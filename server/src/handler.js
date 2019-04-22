import { ApolloServer } from 'apollo-server-lambda'
import lambdaPlayground from 'graphql-playground-middleware-lambda'
import { resolvers, typeDefs } from './schemas'
import { createServices } from './services'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    console.log(error)
    return error
  },
  formatResponse: response => {
    return response
  },
  context: ({ event, context }) => {
    return {
      headers: event.headers,
      functionName: context.functionName,
      service: createServices(),
      event,
      context
    }
  },
  playground: {
    endpoint: '/graphql'
  },
  tracing: true
})

export const graphqlHandler = server.createHandler({
  cors: {
    origin: '*'
  }
})

export const playgroundHandler = lambdaPlayground({
  endpoint: '/graphql'
})
