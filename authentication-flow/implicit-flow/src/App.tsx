import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from './Login'
import { Logout } from './Logout'
import { PrivateRoute } from './PrivateRoute'
import { Admin } from './Admin'
import { Callback } from './Callback'
import { AuthProvider } from './AuthProvider'

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
  },
  {
    path: "callback",
    element: <Callback />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
