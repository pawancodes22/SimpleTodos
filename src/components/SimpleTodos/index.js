import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodo extends Component {
  state = {todoList: initialTodosList}

  onDelete = id => {
    const {todoList} = this.state
    const newList = todoList.filter(item => item.id !== id)
    this.setState({todoList: newList})
  }

  render() {
    const {todoList} = this.state
    return (
      <div className="main-page">
        <div className="main-bg">
          <h1>Simple Todos</h1>
          <div className="add-task-container">
            <input
              className="task-input-box"
              placeholder="Enter the task name"
            />
            <button className="add-task-button">Add</button>
          </div>
          <ul>
            {todoList.map(item => (
              <TodoItem key={item.id} object={item} func={this.onDelete} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo
