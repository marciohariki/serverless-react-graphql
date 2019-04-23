import { IS_PROD } from './env'

export const GRAPHQL_API_ROOT = IS_PROD
  ? 'https://dev-api.hariki-labs.com/graphql'
  : 'http://localhost:4000/graphql'
