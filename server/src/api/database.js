import { Client } from 'pg'

export const getConnector = () => {
  const client = new Client({
    user: process.env.databaseUser,
    host: process.env.databaseHost,
    database: process.env.databaseDb,
    password: process.env.databasePassword,
    port: 5432
  })
  client.connect()
  return client
}
