import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/reducer'

const NavButton = props => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  const activeStyling = " after:content-[''] after:bg-blue-500 after:w-full after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-t-lg"
  return (
    <button
      onClick={() => dispatch(setFilter(props.filter))}
      className={
                'w-24 py-4 ml-auto mr-auto text-sm relative' +
                (filter === props.filter ? activeStyling : '')
            }
    >
      {props.children}
    </button>
  )
}

export default NavButton
