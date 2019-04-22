import TodoService from './todoService'

export const createServices = () => ({
  todos: new TodoService()
})
