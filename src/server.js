import dotEnv from 'dotenv';
dotEnv.config();

import { GraphQLServer } from 'graphql-yoga';
import { resolve } from 'path';

import resolvers from './resolvers';
import routes from './routes';

import mongoose from 'mongoose';


class Server {
  constructor() {
    this.graphql = new GraphQLServer({
      typeDefs: resolve(__dirname, 'schema.graphql'),
      resolvers,
    });

    this.database();
    this.routes();
  }

  database() {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
  }

  routes () {
    this.graphql.use(routes);
  }
}

export default new Server().graphql;