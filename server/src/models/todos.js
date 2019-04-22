import { getConnector } from '../api/database'

class Todo {
  async findAll () {
    const client = getConnector()
    const response = await client.query('SELECT * FROM todos WHERE status=true;')
    client.end()
    return response.rows
  }

  async editTodo (todo) {
    const client = getConnector()
    const response = await client.query(
      `UPDATE todos SET content='${todo.content}', checked=${todo.checked} WHERE id=${todo.id} RETURNING *;`
    )
    client.end()
    return response.rows[0]
  }

  async deleteTodo (id) {
    const client = getConnector()
    const response = await client.query(
      `UPDATE todos SET status=false WHERE id=${id} RETURNING *;`
    )
    client.end()
    return response.rows[0]
  }

  async createTodo (todo) {
    const client = getConnector()
    const response = await client.query(
      `INSERT INTO todos (content, checked) VALUES ('${todo.content}', ${todo.checked}) RETURNING *;`
    )
    client.end()
    return {
      ...todo,
      id: response.rows[0].id
    }
  }
}

export default new Todo()
