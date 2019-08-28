import React, { Component } from 'react';
import todoService from '../services/todo-service';

class Todo extends Component {

  state = {
    title: '',
    body: '',

    }

  handleSubmit (event) {
    const title = values.title;
    const tags = values.tags;
    event.preventDefault();
    todoService.createTodo();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>   
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" value={this.state.value} onChange={this.handleChange} />
                <label htmlFor="body">Body</label>
                <input id="body" type="text" name="body" value={this.state.value} onChange={this.handleChange} />
                <button type="submit">submit</button>
              </form>
            </div>
        )
    }
}

  const todo = new Todo
  export default todo