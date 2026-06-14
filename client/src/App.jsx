import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { useEffect } from "react";
import { getCurrentUser } from "./services/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const serverUrl = "http://localhost:5001"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Auth",
    element: <Auth />
  }
])
const App = () => {



  const disptach = useDispatch()
  useEffect(() => {
    getCurrentUser(disptach);
  }, [disptach])



  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;