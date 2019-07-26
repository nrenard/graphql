import dotEnv from 'dotenv';
dotEnv.config();

import express from 'express';
import expressGraphql from "express-graphql";
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';
import authMiddleware from './app/middlewares/auth';

import graphQLSchema from './graphQLSchema';
import resolvers from './resolvers';


class Server {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
  }

  database() {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
  }

  routes () {
    this.express.use(routes);

    this.express.use(authMiddleware);
    this.express.use(
      "/graphql",
      expressGraphql({
        schema: graphQLSchema,
        rootValue: resolvers,
        graphiql: true
      })
    );
  }
}

export default new Server().express;