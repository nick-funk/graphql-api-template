import { v4 as uuid } from "uuid";

import { User } from "./models";

export const getTokenFromReq = (req: any) => {
  const bearer = req.headers["authorization"];
  const token = bearer ? bearer.replace("Bearer ", "") : undefined;

  return token;
}

export const findUserForToken = (token: string): User | null => {
  if (token === "user0") {
    return {
      id: uuid(),
      username: "user0",
    };
  }

  return null;
};
