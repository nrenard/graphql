import server from './server';

const options = { 
  port: process.env.PORT, 
  endpoint: '/graphql', 
  playground: process.env.NODE_ENV === "development" ? '/playground' : null, 
};

server.start(options);