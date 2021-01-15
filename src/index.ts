import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { ContactResolver } from "./resolvers/ContactResolver";

const PORT = process.env.PORT || 6060;

async function main() {
    const schema = await buildSchema({ resolvers: [ContactResolver] });
    const server = new ApolloServer({ schema, playground: true, introspection: true });
    await server.listen(PORT);
    console.log(`Linstening to ${PORT}!`);
}

main();
