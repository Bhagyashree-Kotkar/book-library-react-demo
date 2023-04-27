import { createBrowserRouter } from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import ForgetPassword from './component/ForgetPassword/ForgetPassword';
import MenuListAccount from './component/MenuListAccount/MenuListAccount';
import UserDashBoard from './component/UserDashBoard/UserDashBoard';
import AdminDashBoard from './component/AdminDashBoard/AdminDashBoard';
import Donate from './component/Donate/Donate';
import BooksCollections from './component/BooksCollections/BooksCollections';
import Layout from './component/Layout';
import HomePage from './component/HomePage/HomePage';
import Carts from './component/Carts/Carts';
import LearnMore from "./component/BooksCollections/LearnMore";

const newCustomeRoute = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: 'menuListAccount',
                    element: <MenuListAccount></MenuListAccount>
                },
                {
                    path: 'home',
                    element: <Home></Home>
                },
                {
                    path: 'collections',
                    element: <BooksCollections></BooksCollections>
                },
                {
                    path: 'donate',
                    element: <Donate></Donate>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                },
                {
                    path: 'forgotPassword',
                    element: <ForgetPassword></ForgetPassword>
                },
                {
                    path: 'userDashboard',
                    element: <UserDashBoard></UserDashBoard>
                },
                {
                    path: 'adminDashboard',
                    element: <AdminDashBoard></AdminDashBoard>
                },
                {
                    path: '',
                    element: <HomePage></HomePage>
                },
                {
                    path: '/cart',
                    element: <Carts></Carts>       
                }
                ,
                {
                    path: '/learnMore',
                    element: <LearnMore></LearnMore>       
                }
            ]
        }

    ]
)

export default newCustomeRoute