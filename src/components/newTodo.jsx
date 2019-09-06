import React from 'react'

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
      <form onSubmit={this.validateTodo}>
        <input type='text' value={this.state.text} onChange={this.handleText} autoFocus />
        <button type='submit'>+</button>
      </form>
    )
  }
}
export default NewTodo
