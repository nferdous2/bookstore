import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Components/Home/Home";
import Details from "../Components/Books/Details";
import AddBook from "../Components/Books/AddBook";
import Books from "../Components/Books/Books";

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
                path: '/books',
                element: <Books/>

            },
            {
        path: '/details/:id',
       
        element: <Details></Details>,
        loader:({params})=>fetch(`http://localhost:3000/books/${params.id}`)
      },
      
            {
                path: '/add',
                element: <AddBook/>

            }
   

        ]
    }
])

export default router;


