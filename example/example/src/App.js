import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import store from "./redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import StudentList from "./pages/StudentList";
import StudentForm from "./pages/StudentForm";
import Dashboard from "./pages/AdminPage/Dashboard";
import Products from "./pages/AdminPage/Products";
import AdminPage from "./pages/AdminPage";
import ProductDetail from "./pages/Product-detail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AdminPage />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="student-list" element={<StudentList />} />
          <Route path="student-form" element={<StudentForm />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
        </Route>

        <Route path="/admin" element={<AdminPage />}>
          <Route path="" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>
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
