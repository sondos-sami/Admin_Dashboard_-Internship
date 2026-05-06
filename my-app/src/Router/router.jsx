import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../components/Layout";
 
import RequireAuth from "./protectedRouter";

import Dashboard from "../pages/dashboard";
import Login from "../pages/auth/login";
 import UserDetails from "../pages/User/UserDetails";
import EditUser from "../pages/User/EditUser";
import AddUser from "../pages/User/addUser";
 import UsersList from "../pages/User/userLIst"
 import NotFound from "../pages/notFound";
 export const router = createBrowserRouter([
 
  
    
     
      { path: "/login", element: <Login /> },
       
  {
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/users", element: <UsersList/> },
{ path: "/users/add", element: <AddUser /> },

{ path: "/users/edit/:id", element: <EditUser /> },


{ path: "/users/:id", element: <UserDetails /> },

  { path: "*", element: <NotFound /> },
     
 
    ],
  },
]);