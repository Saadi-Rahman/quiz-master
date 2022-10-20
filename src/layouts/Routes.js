import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Quizzes from "../components/Quizzes/Quizzes";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "./Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "home",
          element: <Home></Home>
        },
        {
          path: "topics",
          element: <Topics></Topics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
        {
          path: "topic/:id",
          element: <Quizzes></Quizzes>,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        }
      ]
    },
    {
      path: '*',
      element: 
      <div className='d-flex justify-content-center align-items-center flex-column vh-100'>
        <p className='display-1 fw-bold text-teal'>404</p>
        <p className='fs-4 fw-bold'>Not Found!</p>
        <p>Woops!! Looks like this page doesn't exist!</p>
      </div>
    }
  ])

  export default router