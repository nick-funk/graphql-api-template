import { User } from "./models";

export interface GraphContext {
  user: User | null;
}

export const createGraphContext = (user: User | null): GraphContext => {
  return {
    user
  }
}