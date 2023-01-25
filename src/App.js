import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/products' element={<Products/>}/>
   </Routes>
   </>
  );
}

export default App;
