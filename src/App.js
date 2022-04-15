import Container from './components/Container'
import Title from './components/Title'
import Navbar from './components/Navbar'
import NavButton from './components/Navbar/NavButton'
import AddItem from './components/AddItem'
import TodoList from './components/TodoList'
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux'

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem('todos'));
      dispatch({
        type: 'todo/new',
        payload: todos
      });
      setLoading(false);
  }, []);
  if(loading) {
    return (
        <Container>Loading...</Container>
    )
  }
  return (
    <Container>
      <Title>#todo</Title>
      <Navbar>
        <NavButton filter='all'>All</NavButton>
        <NavButton filter='active'>Active</NavButton>
        <NavButton filter='completed'>Completed</NavButton>
      </Navbar>
      <AddItem />
      <TodoList />
    </Container>
  )
}
export default App
