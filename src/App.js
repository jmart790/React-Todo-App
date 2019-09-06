import React from 'react'
import Navbar from './components/navbar'
import NewTodo from './components/newTodo'
import TodoList from './components/todoList'
import './styles/app.css'

class App extends React.Component {
  state = {
    todos: [],
    countText: '0 items left'
  }

  handleCount = () => {
    const count = this.state.todos.filter(todo => !todo.completed).length
    const plural = count === 1 ? 'item' : 'items'
    const countText = `${count} ${plural} left`
    this.setState({ countText })
  }

  handleDelete = todoId => {
    const todos = [...this.state.todos]
    todos.splice(todoId, 1)
    this.setState({ todos }, this.handleCount)
  }

  handleCompleted = todoId => {
    const todos = this.state.todos.map((todo, index) =>
      index === todoId ? { ...todo, completed: !todo.completed } : todo
    )
    this.setState({ todos }, this.handleCount)
  }

  handleNewTodo = todo => {
    const todos = [...this.state.todos, todo]
    this.setState({ todos }, this.handleCount)
  }

  render() {
    return (
      <React.Fragment>
        <Navbar countText={this.state.countText} />
        <NewTodo onNewTodo={this.handleNewTodo} />
        <TodoList
          todoList={this.state.todos}
          onCompleted={this.handleCompleted}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    )
  }
}
export default App
