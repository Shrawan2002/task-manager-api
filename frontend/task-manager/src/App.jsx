
import './App.css'
import Navbar from './components/navbar'
import TaskForm from './components/TaskForm'
import Login from './pages/Login'
import Register from './pages/register'

function App() {

  return (
  <div>
     <h1 className='bg-green-400'>task manager</h1>
     {/* <Navbar /> */}
     {/* <Register /> */}
     {/* <Login /> */}
     <TaskForm />
  </div>
  )
}

export default App
