import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { v4 as uuid } from "uuid";

import { findUserForToken, getTokenFromReq } from "./auth";
import { createGraphContext, GraphContext } from "./graphContext";
import { makeSchema } from "./schema";

const PORT = 7000;
const HOST = "localhost";

interface RollDiceInput {
  numDice: number;
  numSides: number;
}

const helloPayloadResolver = {
  id: () => {
    return uuid();
  },
  message: () => {
    return "hello";
  },
};

const helloResultResolver = {
  id: (obj: any, args: any, context: GraphContext, info: any) => {
    console.log(context.user);
    return uuid();
  },
  payload: (obj: any) => {
    return {};
  },
};

const rollDiceResultResolver = {
  id: (obj: any) => {
    return obj.id;
  },
  rolls: (obj: any, args: any, context: GraphContext, info: any) => {
    const output: number[] = [];
    for (let i = 0; i < obj.numDice; i++) {
      output.push(1 + Math.floor(Math.random() * obj.numSides));
    }
    return output;
  },
};

const resolverRoot = {
  Query: {
    hello: (root: any, args: any, context: GraphContext, info: any) => {
      return {};
    },
    rollDice: (
      root: any,
      args: RollDiceInput,
      context: GraphContext,
      info: any
    ) => {
      return {
        id: uuid(),
        numDice: args.numDice,
        numSides: args.numSides || 6,
      };
    },
  },
  RollDiceResult: rollDiceResultResolver,
  HelloResult: helloResultResolver,
  HelloPayload: helloPayloadResolver,
};

const run = async () => {
  const app = express();

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
