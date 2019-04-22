import todos from '../models/Todos'

export default class TodoService {
  async findAll () {
    return todos.findAll()
  }
  async editTodo (todo) {
    return todos.editTodo(todo)
  }
  async deleteTodo (id) {
    return todos.deleteTodo(id)
  }
  async createTodo (todo) {
    return todos.createTodo(todo)
  }
}
