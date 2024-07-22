import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Register from './pages/Register';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/register' element={<Register />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
