// Write your code here
import './index.css'

const TodoItem = props => {
  const {object, func} = props
  return (
    <li className="items">
      <p>{object.title}</p>
      <button onClick={() => func(object.id)}>Delete</button>
    </li>
  )
}

export default TodoItem
