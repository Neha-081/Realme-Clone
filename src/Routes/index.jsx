import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from '../Pages/HomePage';
import Category from '../Pages/Category';
import Product from '../Pages/Product';
import ErrorPage from '../Pages/ErrorPage';
import ProtectedRoutes from './ProtectedRoutes';
import HomeProdDetail from '../Components/HomePage/homeProdDetail';
import { Cartbtn } from '../Pages/cartbtn';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PaymentPage from '../Pages/PaymentPage';

const RoutesContainer = () => {
  const { currentUser } = useSelector((state) => state.user);
  const isLoggedIn = currentUser;

  console.log(currentUser,'currentUser -----> ')

  return (
    <div>      
        <Routes>
            <Route exact path="/" element={ <HomePage /> } />
            <Route path="/login" element={<Login />}/> 
            <Route path="/register" element={<Register />}/>    
            <Route path="/category" element={<ProtectedRoutes auth={isLoggedIn}> <Category/> </ProtectedRoutes> } />
            <Route path="/product" element={<ProtectedRoutes auth={isLoggedIn}> <Product/> </ProtectedRoutes> } />
            <Route path='/category/:homeid' element={<HomeProdDetail/>}  />
            <Route path='/cart' element={<Cartbtn />}  />
            <Route path='/payment' element={<PaymentPage />}  />
            <Route path="*" element={ <ErrorPage/> } /> 
        </Routes>
    </div>
  )
}

export default RoutesContainer