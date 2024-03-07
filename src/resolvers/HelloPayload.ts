import { v4 as uuid } from "uuid";
import { HelloPayloadResolvers } from "../__generated__/resolversTypes";

export const HelloPayload: HelloPayloadResolvers = {
  id: () => {
    return uuid();
  },
  message: () => {
    return "hello";
  },
};