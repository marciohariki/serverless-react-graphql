import { merge } from 'lodash'
import todosResolver from './todos/resolver'
import rootSchema from './root.graphql'

export const typeDefs = rootSchema
export const resolvers = merge(
  todosResolver
)
