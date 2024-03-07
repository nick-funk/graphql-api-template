import { RollDiceResultResolvers } from "../__generated__/resolversTypes";

export const RollDiceResult: RollDiceResultResolvers = {
  id: (obj, args, context, info) => {
    return obj && obj.id ? obj.id : null;
  },
  rolls: (obj, args, context, info) => {
    const output: number[] = [];
    for (let i = 0; i < (obj.numDice ?? 3); i++) {
      output.push(1 + Math.floor(Math.random() * (obj.numSides ?? 6)));
    }
    return output;
  },
};