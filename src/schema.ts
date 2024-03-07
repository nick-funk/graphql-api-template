import fs from "fs";
import path from "path";

import { makeExecutableSchema } from "@graphql-tools/schema";

import { authDirective, getUser } from "./directives/auth";

const getSchemaPath = () => {
  return path.join(process.cwd(), "schema.graphql");
};

const getRawSchema = () => {
  const schemaPath = getSchemaPath();
  const rawSchema = fs.readFileSync(schemaPath).toString();

  return rawSchema;
};

export const makeSchema = (resolverRoot: any) => {
  const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective(
    "auth",
    getUser
  );

  let schema = makeExecutableSchema({
    typeDefs: [authDirectiveTypeDefs, getRawSchema()],
    resolvers: resolverRoot,
  });

  schema = authDirectiveTransformer(schema);

  return schema;
};
