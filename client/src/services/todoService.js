import graphqlClient from '../api/graphql'

const getTodos = async () => {
  const query = `
  query findAll {
    todos {
      id
      content
      checked
    }
  }
  `
  try {
    const results = await graphqlClient.query(query)
    return results.data.todos
  } catch (err) {
    console.warn(err)
  }
}

const createTodo = async (todo) => {
  const mutation = `
  mutation createTodo($content: String!, $checked: Boolean!) {
    createTodo(content: $content, checked: $checked) {
      id
      content
      checked
    }
  }
  `
  try {
    const variables = {
      content: todo.content,
      checked: todo.checked
    }
    const results = await graphqlClient.query(mutation, variables)
    return results.data.createTodo
  } catch (err) {
    console.warn(err)
  }
}

const editTodo = async (todo) => {
  const mutation = `
  mutation editTodo($id: Int!, $content: String!, $checked: Boolean!) {
    editTodo(id: $id, content: $content, checked: $checked) {\
      id
      content
      checked
    }
  }
  `
  try {
    const variables = {
      id: parseInt(todo.id),
      content: todo.content,
      checked: todo.checked
    }
    const results = await graphqlClient.query(mutation, variables)
    return results.data.editTodo
  } catch (err) {
    console.warn(err)
  }
}

const deleteTodo = async (id) => {
  const mutation = `
  mutation editTodo($id: Int!) {
    deleteTodo(id: $id) {
      id
      content
      checked
    }
  }
  `
  try {
    const variables = {
      id: parseInt(id)
    }
    const results = await graphqlClient.query(mutation, variables)
    return results.data.deleteTodo
  } catch (err) {
    console.warn(err)
  }
}

export default {
  getTodos,
  createTodo,
  deleteTodo,
  editTodo
}
