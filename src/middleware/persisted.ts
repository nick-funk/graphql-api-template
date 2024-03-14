import { NextFunction, Request, Response } from "express";

const queryLookup = new Map<string, string>();
queryLookup.set(
  "hello",
  `query {
    hello {
      id
      payload {
        id
        message
      }
    }
  }`
);

export const persistedQueryMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  if (!body.queryID) {
    next();
    return;
  }

  const query = queryLookup.get(body.queryID);
  if (query && query.length > 0) {
    req.body.query = query;
  }

  next();
};
