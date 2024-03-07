import { defaultFieldResolver, GraphQLSchema } from "graphql";

import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils";

import { GraphContext } from "../graphContext";
import { User } from "../models";

export const authDirective = (
  directiveName: string,
  getUserFn: (user: User | null) => { hasRole: (role: string) => boolean }
) => {
  const typeDirectiveArgumentMaps: Record<string, any> = {};
  return {
    authDirectiveTypeDefs: `directive @${directiveName}(
      requires: Role = ADMIN,
    ) on OBJECT | FIELD_DEFINITION
 
    enum Role {
      ADMIN
      USER
      UNKNOWN
    }`,
    authDirectiveTransformer: (schema: GraphQLSchema) =>
      mapSchema(schema, {
        [MapperKind.TYPE]: (type) => {
          const authDirective = getDirective(schema, type, directiveName)?.[0];
          if (authDirective) {
            typeDirectiveArgumentMaps[type.name] = authDirective;
          }
          return undefined;
        },
        [MapperKind.OBJECT_FIELD]: (fieldConfig, _fieldName, typeName) => {
          const authDirective =
            getDirective(schema, fieldConfig, directiveName)?.[0] ??
            typeDirectiveArgumentMaps[typeName];
          if (authDirective) {
            const { requires } = authDirective;
            if (requires) {
              const { resolve = defaultFieldResolver } = fieldConfig;
              fieldConfig.resolve = function (
                source,
                args,
                context: GraphContext,
                info
              ) {
                const user = getUserFn(context.user);
                if (!user.hasRole(requires)) {
                  throw new Error("not authorized");
                }
                return resolve(source, args, context, info);
              };
              return fieldConfig;
            }
          }
        },
      }),
  };
};

export const getUser = (user: User | null) => {
  const roles = ["UNKNOWN", "USER", "ADMIN"];
  return {
    hasRole: (role: string) => {
      if (!user) {
        return false;
      }

      if (role === "ADMIN" && user.username === "user0") {
        return true;
      }

      return false;
    },
  };
};
