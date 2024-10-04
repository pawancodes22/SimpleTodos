import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    isChecked: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    isChecked: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    isChecked: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    isChecked: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    isChecked: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    isChecked: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    isChecked: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    isChecked: false,
  },
]

// Write your code here

class SimpleTodo extends Component {
  state = {todoList: initialTodosList, multipleTodoTitle: ''}

  saveEditedTodo = (id, newTitle) => {
    this.setState(prev => ({
      todoList: prev.todoList.map(item => {
        if (item.id === id) {
          return {...item, title: newTitle}
        }
        return item
      }),
    }))
  }

  checkFunc = id => {
    this.setState(prev => ({
      todoList: prev.todoList.map(item => {
        if (item.id === id) {
          return {...item, isChecked: !item.isChecked}
        }
        return item
      }),
    }))
  }

  onDelete = id => {
    const {todoList} = this.state
    const newList = todoList.filter(item => item.id !== id)
    this.setState({todoList: newList})
  }

  changeMultipleTodoTitle = event => {
    this.setState({multipleTodoTitle: event.target.value})
  }

  returnMultipleTodo = () => {
    const {multipleTodoTitle} = this.state
    const arrayOfWords = multipleTodoTitle.split(' ')
    const endDigit = parseInt(arrayOfWords[arrayOfWords.length - 1])
    if (!Number.isNaN(endDigit)) {
      const count = arrayOfWords[arrayOfWords.length - 1]
      const heading = arrayOfWords.slice(0, arrayOfWords.length - 1).join(' ')
      const arr = []
      for (let i = 0; i < count; i += 1) {
        arr.push({id: uuidv4(), title: heading, isChecked: false})
      }
      console.log(arr)
      return arr
    }
    return [{id: uuidv4(), title: multipleTodoTitle, isChecked: false}]
  }

  addMultipleTodo = () => {
    this.setState(prev => ({
      todoList: [...prev.todoList, ...this.returnMultipleTodo()],
      multipleTodoTitle: '',
    }))
  }

  render() {
    const {todoList, multipleTodoTitle} = this.state
    return (
      <div className="main-page">
        <div className="main-bg">
          <h1 className="todo-heading">Simple Todos</h1>
          <div className="search-bars-container">
            <div className="add-task-container">
              <input
                className="task-input-box"
                placeholder="Enter task name and number"
                value={multipleTodoTitle}
                onChange={this.changeMultipleTodoTitle}
              />
              <button
                type="button"
                className="add-task-button"
                onClick={this.addMultipleTodo}
              >
                Add
              </button>
            </div>
          </div>
          <ul>
            {todoList.map(item => (
              <TodoItem
                key={item.id}
                details={item}
                deleteFunc={this.onDelete}
                saveFunc={this.saveEditedTodo}
                checkFunc={this.checkFunc}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo
