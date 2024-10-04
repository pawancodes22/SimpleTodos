// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {details, deleteFunc, saveFunc, checkFunc} = props
  const {isChecked = true} = details
  const [isEditModeOn, changeEditMode] = useState(false)
  const [changingText, setChangingText] = useState(details.title)
  const alterEditMode = () => {
    changeEditMode(prev => !prev)
  }

  const changeCheckStatus = () => {
    const {id} = details
    checkFunc(id)
  }

  const saveChanges = () => {
    const {id} = details
    saveFunc(id, changingText)
    alterEditMode()
  }

  const todoTitleClassName = isChecked ? 'checked-item' : ''

  return (
    <li className="items">
      <div className="title-checkbox-container">
        <input
          className="todo-checkbox"
          type="checkbox"
          onChange={changeCheckStatus}
          checked={isChecked}
        />
        {!isEditModeOn && <p className={todoTitleClassName}>{details.title}</p>}
        {isEditModeOn && (
          <input
            className="edit-mode-input"
            type="text"
            value={changingText}
            onChange={event => setChangingText(event.target.value)}
          />
        )}
      </div>
      <div className="edit-delete-container">
        {!isEditModeOn && (
          <button type="button" onClick={alterEditMode} className="edit-button">
            Edit
          </button>
        )}
        {isEditModeOn && (
          <button type="button" onClick={saveChanges} className="save-button">
            Save
          </button>
        )}
        <button
          className="delete-button"
          type="button"
          onClick={() => deleteFunc(details.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
