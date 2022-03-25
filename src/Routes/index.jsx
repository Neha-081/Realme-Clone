import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from '../Pages/Product';
import HomePage from '../Pages/HomePage';
import Category from '../Pages/Category';
import ErrorPage from '../Pages/ErrorPage';
import ProtectedRoutes from './ProtectedRoutes';
import HomeProdDetail from '../Components/HomePage/homeProdDetail';
import  Cartbutton  from '../Pages/Cartbutton';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PaymentPage from '../Pages/PaymentPage';
import PhoneDetail from '../Pages/PhoneDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from "../Pages/MyOrder"


const RoutesContainer = () => {
  

  const { currentUser } = useSelector((state) => state.user);
  const isLoggedIn = currentUser;


  console.log(currentUser,'currentUser ----> ')

  return (
    <div>      
        <ToastContainer />
        <Routes >
            <Route path="/" element={ <HomePage /> } />
            <Route path="/login" element={<Login />}/> 
            <Route path="/register" element={<Register />}/>    
            <Route path="/category" element={<ProtectedRoutes auth={isLoggedIn}> <Category/> </ProtectedRoutes> } />
            <Route path='/category/:homeid' element={<HomeProdDetail/>}  />
            <Route path='/phoneproducts/:phoneid' element={<PhoneDetail/>}  />
            <Route path='/cart' element={<Cartbutton />}  />
            <Route path='/payment' element={<PaymentPage />}  />
            <Route path="/phoneproducts" element={<Product />}/>
            <Route path="/myorder" element={<MyOrder/>}/>
            <Route path="*" element={ <ErrorPage/> } /> 
        </Routes>
    </div>
  )
}

export default RoutesContainer