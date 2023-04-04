const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
require("dotenv").config();
const connectDB = require("./db");

const typeDefs = require("./routes/typeDefs");
const Emp_Resolvers = require("./routes/Emp_Resolvers");
const User_Resolvers = require("./routes/User_Resolvers");

async function startServer() {
  try {
    await connectDB();
    const app = express();

    /*
    // Add headers to allow cross-origin requests
    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "https://studio.apollographql.com");
      res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      next();
    });
    */

    const server = new ApolloServer({
      typeDefs,
      resolvers: [User_Resolvers, Emp_Resolvers],
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: 3231 }, () => {
      console.log(`Server ready at http://localhost:3231${server.graphqlPath}`);
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();
