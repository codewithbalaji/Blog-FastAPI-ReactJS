import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Dashboard from "../pages/dashboard";


export const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: '/login',
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: '/register',
      element: (
        <Layout>
          <Register />
        </Layout>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ),
    },

  ]);