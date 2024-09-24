import {Component} from 'react'

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
  state = {todoList: initialTodosList, newTodoTitle: '', count: 9}

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

  changeNewTodoTitle = event => {
    this.setState({newTodoTitle: event.target.value})
  }

  addNewTodo = () => {
    const {count, newTodoTitle} = this.state
    this.setState(prev => ({
      todoList: [
        ...prev.todoList,
        {id: count, title: newTodoTitle, isChecked: false},
      ],
      count: prev.count + 1,
      newTodoTitle: '',
    }))
  }

  render() {
    const {todoList, newTodoTitle} = this.state
    return (
      <div className="main-page">
        <div className="main-bg">
          <h1>Simple Todos</h1>
          <div className="add-task-container">
            <input
              className="task-input-box"
              placeholder="Enter the task name"
              value={newTodoTitle}
              onChange={this.changeNewTodoTitle}
            />
            <button
              type="button"
              className="add-task-button"
              onClick={this.addNewTodo}
            >
              Add
            </button>
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
