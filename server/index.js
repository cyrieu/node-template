// @flow
import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./graphql/index.js";
import { makeExecutableSchema } from "graphql-tools";
import models from "./models";

const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

// graphql
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

models.db.sync({}).then(() => {
  app.listen(process.env.PORT, () =>
    console.log("Listening on port: " + (process.env.PORT || "8081"))
  );
});
