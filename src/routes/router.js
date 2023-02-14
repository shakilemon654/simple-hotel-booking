import { createBrowserRouter } from "react-router-dom";
import BookingDetails from "../components/BookingDetails/BookingDetails";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import SignIn from "../components/SignIn/SignIn";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                
                element: <Home />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/booking/:id',
                element: <PrivateRoute><BookingDetails /></PrivateRoute>
            }
        ]
    }
])

export default router;