import fs from "fs";
import path from "path";

import { makeExecutableSchema } from "@graphql-tools/schema";

const getSchemaPath = () => {
  return path.join(process.cwd(), "schema.graphql");
};

const getRawSchema = () => {
  const schemaPath = getSchemaPath();
  const rawSchema = fs.readFileSync(schemaPath).toString();

  return rawSchema;
};

export const makeSchema = (resolverRoot: any) => {
  const schema = makeExecutableSchema({
    typeDefs: getRawSchema(),
    resolvers: resolverRoot,
  });

  return schema;
};
