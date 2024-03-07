import { ViewerResolvers } from "../__generated__/resolversTypes";
import { GraphContext } from "../graphContext";

export const Viewer: ViewerResolvers = {
  id: (obj, args, context, info) => {
    return context.user && context.user.id ? context.user.id : null;
  },
  username: (obj, args, context: GraphContext, info) => {
    return context.user && context.user.username ? context.user.username : null;
  },
};
