import { createBrowserRouter, replace, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import { useEffect } from "react";
import { getCurrentUser } from "./services/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Pricing from "./Pages/Pricing";
import Notes from "./Pages/Notes";
import History from "./Pages/History";

export const serverUrl = "http://localhost:5001";




const App = () => {



  const disptach = useDispatch()
  useEffect(() => {
    getCurrentUser(disptach);
  }, [disptach])


  const userData = useSelector((state) => state.user?.userData);

  const router = createBrowserRouter([
    {
      path: "/",
      element:userData? <Home />: <Navigate to="/auth" replace/>    },
    {
      path: "/Auth",
      element: userData ? <Navigate to="/" replace /> : <Auth />
    },
    {
      path:"/notes",
      element:<Notes/>
    },
    {
      path:"history",
      element:<History/>
    },
    {
      path:"pricing",
      element:<Pricing/>
    }
  ])



  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;