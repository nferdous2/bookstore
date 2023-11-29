import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Components/Home/Home";
import Details from "../Components/Books/Details";
import AddBook from "../Components/Books/AddBook";

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
        path: '/details/:id',
       
        element: <Details></Details>,
        loader:({params})=>fetch(`http://localhost:3000/books/${params.id}`)
      },
      
            // {
            //     path: '/details/:_id',
            //     element: <Details/>

            // },
            {
                path: '/add',
                element: <AddBook/>

            }
   

        ]
    }
])

export default router;


