import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormText, FormCheck } from 'react-bootstrap';
import {
RouterProvider,
Route,
createBrowserRouter,
createRoutesFromElements,
} from 'react-router-dom'

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App;