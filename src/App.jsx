import { useState }  from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  // Generate Todo ID
  const generateId = () => {
    return Number(Date.now().toString(10))
  }

  // Add Todo
  const addTodo = (text) => {
    setTodos([...todos, { id: generateId(), text, completed: false }])
  }

  // Toggle Todo Complete
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { id: todo.id, text: todo.text, completed: !todo.completed } : {...todo}))
  }

  // Remove Todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  return (
    <div className="container">
      <div className="header">
        <div className="header__title-container">
          <h1 className="header__title">Todo</h1>
          {/* Placeholder Icon */}
          <span
            className="header__icon"
            role="img"
            aria-label="info"
          >
            ℹ️
          </span>
        </div>
        <button
          className="header__button"
          type="button"
          onClick={() => addTodo('test')}
        >
          Add Todo
        </button>
      </div>
      <ul className="todos-list">
        {todos.map(todo =>
          <li
            className="todos-list__item"
            key={todo.id}
          >
            <div className="todos-list__item-details">
              <p className="todos-list__item-id">
                ID: {todo.id}
              </p>
              <p className="todos-list__item-text">
                {todo.text}
              </p>
              <p className="todos-list__item-complete">
                Completed: {todo.completed ? 'Completed' : 'False'}
              </p>
            </div>
            <div className="todos-list__item-actions">
              <button
                  className="todos-list__item-complete-btn"
                  type="button"
                  onClick={() => toggleComplete(todo.id)}
              >
                Complete
              </button>
              <button
                  className="todos-list__item-remove-btn"
                  type="button"
                  onClick={() => removeTodo(todo.id)}
              >
                Remove
              </button>
            </div>
          </li>
        )}
      </ul>
    </div>

  )
}

export default App
