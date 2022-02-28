import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import Category from '../Pages/Category';
import Product from '../Pages/Product';
import ErrorPage from '../Pages/ErrorPage';
import ProtectedRoutes from './ProtectedRoutes';
import HomeProdDetail from '../Components/HomePage/homeProdDetail';
import { Cartbtn } from '../Pages/cartbtn';
import { Payment } from '../Components/Payment';

// todo : Merge
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const RoutesContainer = () => {
  const isLoggedIn = false;

  return (
    <div>      
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/register" element={<Register />}/>    
            <Route path="/category" element={<ProtectedRoutes auth={isLoggedIn}> <Category/> </ProtectedRoutes> } />
            <Route path="/product" element={<ProtectedRoutes auth={isLoggedIn}> <Product/> </ProtectedRoutes> } />
            <Route path="*" element={ <ErrorPage/> } />
            <Route path='/category/:homeid' element={<HomeProdDetail/>}  />
            <Route path='/cart' element={<Cartbtn />}  />
            <Route path='/payment' element={<Payment />}  />
            
        </Routes>
    </div>
  )
}

export default RoutesContainer