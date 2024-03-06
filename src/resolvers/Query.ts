import { v4 as uuid } from "uuid";

import { GraphContext } from "../graphContext";

export interface RollDiceInput {
  numDice: number;
  numSides: number;
}

export const Query = {
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
  viewer: (obj: any, args: any, context: GraphContext, info: any) => {
    if (!context.user) {
      return null;
    }

    return {};
  },
};
