import { v4 as uuid } from "uuid";

import { GraphContext } from "../graphContext";
import { HelloPayloadResolvers } from "../__generated__/resolversTypes";

export const HelloResult: HelloPayloadResolvers = {
  id: (obj, args, context: GraphContext, info) => {
    return uuid();
  },
  payload: () => {
    return {};
  },
};
