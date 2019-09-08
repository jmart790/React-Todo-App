import React from 'react'
import '../styles/todoList.css'

const TodoList = props => {
  return (
    <div className='todo-list-container'>
      <ul>
        {props.todoList.map((todo, id) => (
          <React.Fragment>
            <li key={id} className='todo'>
              <button className='complete-btn' onClick={() => props.onCompleted(id)}>
                {todo.completed ? '✓' : ' '}
              </button>
              <span className={todo.completed ? 'todo-completed' : ''}>{todo.text}</span>
              <button className='delete-btn hide' onClick={() => props.onDelete(id)}>
                ✗
              </button>
            </li>
            <div className={id < props.todoList.length - 1 ? 'todo-divider' : ''} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
