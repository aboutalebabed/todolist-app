import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Todo from './Todo';

class App extends Component {

constructor() {
  super()

  this.state = {
    todos: []
  }

  this.todoInput = ""
}

addTodo(e) {
  e.preventDefault();
  // console.log(this.todoInput.value)
  let todoValue = {text: this.todoInput.value, checked: false}

  let newTodos = this.state.todos
  newTodos.push(todoValue)

  this.setState({
    todos: newTodos
  })

  // Reset
  this.todoInput.value = ""

  // Set focus to todoInput
  this.todoInput.focus()

}

removeTodo(id) {
  let todos = this.state.todos.filter((todo,index) => {
    return id !== index
  })

  this.setState({
    todos: todos
  })
}

handleCheck(i) {
  console.log(i);
  const newState = this.state.todos.map((todo, index) => i === index ? {...todo, checked: !this.state.todos[i].checked} : todo);
  console.log(newState);
  this.setState({ todos: newState });
}


  render() {
    return (
      <div>
        <h1>My React Todo</h1>
        <p>All Todos : {this.state.todos.length}</p>

          <form onSubmit={(e) => this.addTodo(e)}>
            <input className="addTodo" type="text" placeholder="Enter a todo" ref={(input) => this.todoInput = input}/>
            <button className="buttonAdd">Add</button>
          </form>

        <ul>
          {this.state.todos.map((todo,index) => {
            return (<Todo id={index} key={index} todo={todo.text} checked={todo.checked} onRemove={() => this.removeTodo(index)} handleCheck={() => this.handleCheck(index)}/>)
          })}
        </ul>

      </div>
    );
  }
}

export default App;
