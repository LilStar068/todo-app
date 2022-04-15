import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux'
import { setNewTask } from '../redux/reducer'

const AddItem = () => {
  const dispatch = useDispatch()
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
            className='w-full px-3 py-5 mr-6 border-2 border-gray-200 rounded-xl focus:outline-none focus:shadow-outline text-sm'
          />
          <button
            type='submit'
            className='px-10 py-5 bg-blue-500 text-white rounded-xl text-sm font-semibold'
          >
            Add
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddItem
