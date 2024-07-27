import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "./redux";
import StudentList from "./pages/StudentList";
import StudentForm from "./pages/StudentForm";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<div></div>} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/student-form" element={<StudentForm />} />
      </Route>
    )
  );

  return (
     <>
      <Provider store={store}>
        <CookiesProvider defaultSetOptions={"/"}>
          <RouterProvider router={router} />
        </CookiesProvider>
      </Provider>
    </>
  );
}

export default App;
