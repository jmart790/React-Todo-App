import React from 'react'
import '../styles/newTodo.css'

class NewTodo extends React.Component {
  state = { text: '' }

  handleText = e => {
    this.setState({ text: e.target.value })
  }

  validateTodo = e => {
    e.preventDefault()
    const todo = this.state.text.trim()
    if (todo.length > 0) {
      this.props.onNewTodo({ text: todo, completed: false })
      this.setState({ text: '' })
    } else {
      alert('Sorry you cannot enter empty to-dos')
    }
  }

  render() {
    return (
      <div>
        <form className='new-todo-container' onSubmit={this.validateTodo}>
          <input
            className='new-todo-input'
            type='text'
            value={this.state.text}
            onChange={this.handleText}
            autoFocus
            placeholder='add new to-do'
          />
          <button className='new-todo-submit' type='submit'>
            +
          </button>
        </form>
      </div>
    )
  }
}
export default NewTodo
