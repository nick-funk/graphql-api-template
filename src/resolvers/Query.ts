import { v4 as uuid } from "uuid";

import { GraphContext } from "../graphContext";
import { QueryResolvers, QueryRollDiceArgs } from "../__generated__/resolversTypes";

export const Query: QueryResolvers = {
  hello: (root, args, context: GraphContext, info) => {
    return {};
  },
  rollDice: (
    root,
    args: QueryRollDiceArgs,
    context: GraphContext,
    info
  ) => {
    return {
      id: uuid(),
      numDice: args.numDice,
      numSides: args.numSides || 6,
    };
  },
  viewer: (obj, args, context: GraphContext, info) => {
    if (!context.user) {
      return null;
    }

    return {};
  },
};
