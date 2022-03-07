import React from 'react';
import cart from "../cart.json";
import { Footer } from '../Components/NavAndFooter/Footer';
import { Header } from '../Components/NavAndFooter/Header';
import "../styles/tab.css"
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';

 const Cartbutton = () => {
  // const { data } = useSelector((store) => store.data.homeData);
  // const dispatch = useDispatch();
  // console.log(data);


  const CartItem =(item,{cartData})=>{
    console.log("cartData",cartData);

    

    return (
      <div className='px-3 my-5 bg-light rounded-3 hi'>
      <div className='container py-5 bye'>
      
          <div className='row justify-content-center'>
  
            <div className='col-md-4'>
              <img src={item.image_url} height="100px" width="90px" alt=""/>
            </div>
  
            <div className='col-md-4'>
            <h3>{item.name}</h3>
              <p className='lead fw-bold'>${item.price}</p>
            </div>
        </div>
      </div>
    </div>
    )

  }
  
  return (
    <div>
      <nav>
        <Header/>
      </nav>
      <br />
      <div className='container containercart'>
        <div className='row  justify-content-around' >
       
          {cart.map(CartItem)}
          
        </div>
        <h2 className='lead fw-bold'>Total Amount : $21498</h2>
        <Link to="/payment"  > <button  className='btn btn-primary float-end' >Buy Now </button></Link>
    </div>
    <footer>
      <Footer/>
    </footer>
    </div>
  )

}

export default Cartbutton

