import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
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
          path: "topics",
          element: <Topics></Topics>
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '*',
      element: 
      <div className='d-flex justify-content-center align-items-center flex-column vh-100'>
        <p className='fs-1 fw-bold bg-teal'>404 Not Found!</p>
        <p className='fs-6 fw-semibold'>Woops!! Looks like this page doesn't exist!</p>
      </div>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
