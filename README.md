# graphql-api (without Apollo)

Have you ever wanted to spin up a GraphQL API and felt like the only real way to do so with Node.js is by using the Apollo Server packages?

Well, as it turns out, you don't need any of that bloat. You can set it up much simpler with less hassle. This project is an example of a fully working, type-friendly GraphQL api using nothing but `express`, `graphql`, and `@graphql-tools/schema`.

The types for resolvers are technically optional. You don't have to generate resolver types, but they're nice. If you include that, you're bringing in some `@graphql-codegen` packages as well.

If you follow the simple example in this project, you can divest yourself from Apollo products entirely.

# Getting Started

```
npm i
npm run start
```

Then you can fire requests to the API like so:

URL: `http://localhost:7000/api`

Method: `POST`

Body:
```
query {
	hello {
		id
		payload {
			id
			message
		}
	}
}
```

which returns a result similar to:
```
{
	"data": {
		"hello": {
			"id": "7383651c-6e0b-46d9-859f-0c894f03c3db",
			"payload": {
				"id": "0df72cb4-67f8-4267-ae77-d4b612f3fc9c",
				"message": "hello"
			}
		}
	}
}
```

This simple example demonstrates the cascade of resolvers fulfilling the data request which you can follow by inspecting `src/resolvers/Query.ts`, `src/resolvers/HelloResult.ts`, and `src/resolvers/HelloPayload.ts`.

There are other examples available as well, but that should get you started.