import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Components/Home/Home";
import Details from "../Components/Books/Details";

const router = createBrowserRouter([


    
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>

            },
            {
                path: '/details/:_id',
                element: <Details/>

            }
   

        ]
    }
])

export default router;


