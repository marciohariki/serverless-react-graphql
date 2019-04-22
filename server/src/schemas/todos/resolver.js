export default {
  Query: {
    todos (root, args, { service }) {
      return service.todos.findAll()
    }
  },
  Mutation: {
    createTodo (root, args, { service }) {
      const { content, checked } = args
      return service.todos.createTodo({
        content,
        checked
      })
    },
    editTodo (root, args, { service }) {
      const { id, content, checked } = args
      return service.todos.editTodo({
        id,
        content,
        checked
      })
    },
    deleteTodo (root, args, { service }) {
      const { id } = args
      return service.todos.deleteTodo(id)
    }
  }
}
