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
import Profile from './pages/Profile';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element = {< Profile />} />
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