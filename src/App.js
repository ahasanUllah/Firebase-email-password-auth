import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Root from './components/Root';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Root></Root>,
      children: [
         { path: '/', element: <Register></Register> },
         { path: '/register', element: <Register></Register> },
         { path: '/login', element: <Login></Login> },
      ],
   },
]);
function App() {
   return (
      <div className="App">
         <RouterProvider router={router}></RouterProvider>
      </div>
   );
}

export default App;
