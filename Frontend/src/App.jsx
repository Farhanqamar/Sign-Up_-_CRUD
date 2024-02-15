import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/pages/Login';
import {Route, Routes} from 'react-router-dom'
import SignUp from './components/pages/SignUp';
import Header from './components/Header';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
