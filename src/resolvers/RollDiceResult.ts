import { GraphContext } from "../graphContext";

export const RollDiceResult = {
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