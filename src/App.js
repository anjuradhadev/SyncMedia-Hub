import { Container } from '@mui/material';
import './App.css';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './pages/Home/Home';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
