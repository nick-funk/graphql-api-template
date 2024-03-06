import { v4 as uuid } from "uuid";

export const HelloPayload = {
  id: () => {
    return uuid();
  },
  message: () => {
    return "hello";
  },
};