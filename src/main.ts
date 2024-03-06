import express from "express";
import { createHandler } from "graphql-http/lib/use/express";

import { findUserForToken, getTokenFromReq } from "./auth";
import { createGraphContext } from "./graphContext";
import { makeSchema } from "./schema";
import { buildRoot } from "./graphql";

const PORT = 7000;
const HOST = "localhost";

const run = async () => {
  const app = express();

  const resolverRoot = buildRoot();
  const schema = makeSchema(resolverRoot);

  app.all(
    "/api",
    createHandler({
      schema,
      rootValue: resolverRoot,
      context: (req, params) => {
        const token = getTokenFromReq(req);
        const user = findUserForToken(token);

        return createGraphContext(user);
      },
    })
  );

  app.listen(PORT, HOST, () => {
    console.log(`app listening on ${HOST}:${PORT}...`);
  });
};

void run();
