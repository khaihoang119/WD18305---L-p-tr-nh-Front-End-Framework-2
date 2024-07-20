import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    )
  )

  return (
    <>
      <CookiesProvider defaultSetOptions={"/"}>
        <RouterProvider router={router} />
      </CookiesProvider>

    </>
  )
}

export default App;