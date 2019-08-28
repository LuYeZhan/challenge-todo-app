import axios from 'axios';

class TodoService {

  constructor () {
    this.talk = axios.create({
      baseURL: 'http://localhost:4000/api/v1' + '/',
      withCredentials: true
    });
  };

  createTodo (todo) {
    const { title, body } = todo;
    return todo.post('/todos', { title, body })
      .then(({ data }) => data);
  };

  getAllTodos () {
    return this.todo.get('/')
      .then(response => response.data);
  };

  getTodo (id) {
    return this.todo.get(`/${id}`)
      .then(response => response.data);
  }

  updateTodo (id, todo) {
    return this.todo.put(`/update/${id}`, todo)
      .then(response => response.data);
  };

  deleteTodo (id) {
    return this.todo.delete(`/delete/${id}`)
      .then(response => response.data);
  };

}

const todoService = new TodoService();

export default todoService;
