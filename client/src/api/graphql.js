import axios from 'axios'
import { GRAPHQL_API_ROOT } from './url'

class GraphQLConnector {
  constructor () {
    this.api = axios.create({
      baseURL: GRAPHQL_API_ROOT,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async query (query, variables = {}) {
    const data = {
      query,
      variables
    }
    try {
      const response = await this.api.post('', data)
      return response.data
    } catch (err) {
      console.warn(err)
    }
  }
}

export default new GraphQLConnector()
