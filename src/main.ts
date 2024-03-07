import express, { json } from "express";
import { createHandler } from "graphql-http/lib/use/express";

import { createGraphContext } from "./graphContext";
import { buildRoot } from "./graphql";
import { findUserForToken, getTokenFromReq } from "./middleware/auth";
import { persistedQueryMiddleware } from "./middleware/persisted";
import { makeSchema } from "./schema";

const PORT = 7000;
const HOST = "localhost";

const run = async () => {
  const app = express();

  const resolverRoot = buildRoot();
  const schema = makeSchema(resolverRoot);

  app.use(json());

  app.all(
    "/api",
    persistedQueryMiddleware,
    createHandler({
      schema,
      rootValue: resolverRoot,
      context: (req, params) => {
        const token = getTokenFromReq(req);
        const user = findUserForToken(token);

        return { ...createGraphContext(user) };
      },
    })
  );

  app.listen(PORT, HOST, () => {
    console.log(`app listening on ${HOST}:${PORT}...`);
  });
};

void run();
