import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './Header';
import Addproduct from './Addproduct';
import Updateproduct from './Updateproduct';
import Home from './Home';
import { Login } from './Login';
import NotFoun404 from './NotFound404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import { Protected } from './Protected';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      
      <Routes>
        <Route path='/Addproduct' element={<Protected Cmp={Addproduct}/>}></Route>
        <Route path='/UpdateProduct' element={<Protected Cmp={Updateproduct}/>}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/*' element={<NotFoun404  />}></Route>
        <Route path='/Register' element={<Register />}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
