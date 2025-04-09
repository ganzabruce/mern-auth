import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './login'
import Signup from './signup'
import Home from './dashboard'
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
