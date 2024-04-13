
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Root from './components/Root';
import Dahboard from './components/Dahboard';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Dahboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
   
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
