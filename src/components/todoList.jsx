import React from 'react'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map((todo, id) => (
          <li key={id} className='todo'>
            {todo.text}
            <button onClick={() => this.props.onCompleted(id)}>{todo.completed ? '✓' : ' '}</button>
            <button className='hide' onClick={() => this.props.onDelete(id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    )
  }
}
export default TodoList
