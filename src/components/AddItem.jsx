import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { setNewTask } from '../redux/reducer'

const AddItem = () => {
  const dispatch = useDispatch()
  const {filter} = useSelector(state => state);
  if(filter === 'completed') return null;
  return (
    <div className='pt-5 pb-8'>
      <Formik
        initialValues={{
          taskInput: ''
        }}
        onSubmit={(values, actions) => {
          dispatch(setNewTask(values.taskInput))
          actions.resetForm()
        }}
      >
        <Form
          className='flex'
        >
          <Field
            name='taskInput'
            placeholder='add details'
            required
            autoComplete='off'
            className='w-full px-3 py-2 mr-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:shadow-outline text-sm md:mr-6 md:py-5 sm:mr-2'
          />
          <button
            type='submit'
            className='px-5 py-2 bg-blue-500 text-white rounded-xl text-sm font-semibold md:py-5 md:px-10'
          >
            Add
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddItem
