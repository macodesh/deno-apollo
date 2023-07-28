import { ApolloServer } from "npm:@apollo/server@^4.1"
import { startStandaloneServer } from "npm:@apollo/server@4.1/standalone"
import { graphql } from "npm:graphql@16.6"

import { typeDefs } from "./schema.ts"
import { resolvers } from "./resolvers.ts"

// Cria uma instância do ApolloServer com as definições de tipo e resolvedores fornecidos.
const server = new ApolloServer({
  // Define as definições de tipo do esquema GraphQL.
  typeDefs,
  // Define os resolvedores do esquema GraphQL.
  resolvers,
})

// Inicia o servidor standalone Apollo na porta 8000.
const { url } = await startStandaloneServer(server, {
  // Define a porta em que o servidor irá ouvir as requisições.
  listen: { port: 8000 },
})

// Exibe a URL do servidor após a inicialização.
console.log(`Server running on: ${url}`)
