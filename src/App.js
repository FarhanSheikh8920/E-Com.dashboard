import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './Header';
import Addproduct from './Addproduct';
import Updateproduct from './Updateproduct';
import Home from './Home';
import { Login } from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>E-Commerce Project</h1>
      <Routes>
        <Route path='/Addproduct' element={<Addproduct />}></Route>
        <Route path='/UpdateProduct' element={<Updateproduct />}></Route>
        <Route path='/*' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
