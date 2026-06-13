import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Auth",
    element:<Auth/>
  }
])
const App = () => {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;