import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
import Offer from './components/Offer';


function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/Offer' element={<Offer/>}/>
   </Routes>
   </>
  );
}

export default App;
