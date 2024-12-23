
import TodoList from './componets/TodoListApp'
import './App.css'
import HeaderTodo from './componets/HeaderTodo'

function App() {

  return (
    <div className='contener'>
      <HeaderTodo/>
       <TodoList/>
    </div>
  )
}

export default App
