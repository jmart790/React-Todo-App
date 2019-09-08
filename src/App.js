import React from 'react'
import Navbar from './components/navbar'
import NewTodo from './components/newTodo'
import TodoList from './components/todoList'
import './styles/app.css'

class App extends React.Component {
  state = {
    todos: [],
    countText: { count: 0, text: 'items left' }
  }

  handleCount = () => {
    const count = this.state.todos.filter(todo => !todo.completed).length
    const plural = count === 1 ? 'item' : 'items'
    const text = `${plural} left`
    const countText = { count, text }
    this.setState({ countText })
  }

  handleDelete = todoId => {
    const del = confirm('Are you sure you want to delete?') //eslint-disable-line
    if (del) {
      const todos = [...this.state.todos]
      todos.splice(todoId, 1)
      this.setState({ todos }, this.handleCount)
    }
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
      <div className='app-container'>
        <Navbar countText={this.state.countText} />
        <NewTodo onNewTodo={this.handleNewTodo} />
        <TodoList
          todoList={this.state.todos}
          onCompleted={this.handleCompleted}
          onDelete={this.handleDelete}
        />
      </div>
    )
  }
}
export default App
