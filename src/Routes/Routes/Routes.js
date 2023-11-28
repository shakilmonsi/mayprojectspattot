
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import Profile from "../../Pages/Others/Profile/Profile";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductDitils from "../../ProdcutDitils/ProductDitils/ProductsDitilpage/ProducditilsPattopat/ProductDitils";
import ElectricCategorypageAllCompoment from "../../Pages/Home/Home/ElectricCategorypages/ElectricCategorypages/ElectricCategorypagePatToPat/ElectricCategorypageAllCompoment";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
           
         
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/productditils',
                element:<ProductDitils></ProductDitils>
            },
            {
                path: '/electricCategorypage',
                element:<ElectricCategorypageAllCompoment></ElectricCategorypageAllCompoment>
            },
        ]
    }
])