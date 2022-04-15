import { useDispatch, useSelector } from 'react-redux'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const { filter } = useSelector(state => state)

  return (
    <li className='flex mb-7'>
      <input
        type='checkbox'
        defaultChecked={todo.completed}
        onClick={() => {
          dispatch({
            type: 'todo/update',
            payload: todo
          })
        }}
        className='rounded-sm w-5 h-5'
      />
      <label className={`ml-2 ${todo.completed ? 'line-through' : ''}`}>
        {todo.title}
      </label>
      {filter === 'completed'
        ? (
          <button
            onClick={() => {
              dispatch({
                type: 'todo/delete',
                payload: todo
              })
            }}
            className='ml-auto text-sm text-gray-300 hover:text-gray-400'
          >
            <DeleteOutlineIcon />
          </button>
          )
        : null}
    </li>
  )
}

export default TodoItem
