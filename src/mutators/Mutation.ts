import { MutationResolvers } from "../__generated__/resolversTypes";

let counter = 0;

export const Mutation: MutationResolvers = {
  counter: (root, args, context, info) => {
    counter += args.amount;
    return counter;
  }
}