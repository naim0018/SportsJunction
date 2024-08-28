import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomeContainer from "../pages/Home/HomeContainer";
import Login from "../pages/LoginAndSignup/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<HomeContainer/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    }
])