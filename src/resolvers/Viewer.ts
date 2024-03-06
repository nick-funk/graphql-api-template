import { GraphContext } from "../graphContext";

export const Viewer = {
  id: (obj: any, args: any, context: GraphContext, info: any) => {
    return context.user?.id;
  },
  username: (obj: any, args: any, context: GraphContext, info: any) => {
    return context.user?.username;
  },
};