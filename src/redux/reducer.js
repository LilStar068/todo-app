import { combineReducers } from 'redux'

const saveState = state => {
    localStorage.setItem('todos', JSON.stringify(state))
}

export const setFilter = payload => ({
  type: 'filter/set',
  payload
})
export const setNewTask = task => {
  const id = Math.random().toString(36)
  return {
    type: 'todo/add',
    payload: {
      title: task,
      completed: false,
      id
    }
  }
}

export const selectTodos = state => {
  const { todos, filter } = state
  if (filter === 'completed') {
    return todos.filter(todo => todo.completed)
  }
  if (filter === 'active') {
    return todos.filter(todo => !todo.completed)
  }
  return state.todos
}

export const filter = (state = 'all', { type, payload }) => {
  if (type === 'filter/set') {
    return payload
  }
  return state
}
export const todos = (state = [], { type, payload }) => {
  switch (type) {
    case 'todo/add': {
      const newTodos = state.concat({ ...payload })
      saveState(newTodos);
      return newTodos;
    }
    case 'todo/update': {
      const newTodos = state.map(todo => {
        if (todo.id === payload.id) { return { ...todo, completed: !todo.completed } }
        return todo
      })
      saveState(newTodos);
      return newTodos
    }
    case 'todo/delete': {
      const newTodos = state.filter(todo => {
        return todo.id !== payload.id
      })
      saveState(newTodos);
      return newTodos
    }
    case 'todo/deleteCompleted' : {
      const newTodos = state.filter(todo => todo.completed === false)
      saveState(newTodos);
      return newTodos
    }
    case 'todo/new': {
        return payload
    }
    default: {
        return state
    }
  }
}

export const reducer = combineReducers({
  todos,
  filter
})
