import { v4 as uuid } from "uuid";

import { GraphContext } from "../graphContext";

export const HelloResult = {
  id: (obj: any, args: any, context: GraphContext, info: any) => {
    return uuid();
  },
  payload: (obj: any) => {
    return {};
  },
};
