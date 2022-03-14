import React from 'react';
import cart from "../cart.json";
import { Footer } from '../Components/NavAndFooter/Footer';
import { Header } from '../Components/NavAndFooter/Header';
import "../styles/tab.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addCartData} from '../redux/cartReducer/actions'

 const Cartbutton = () => {
  const {  cart } = useSelector((store) => ({...store}));
  const dispatch=useDispatch();
  // console.log("cart",cart);
 let total= cart.reduce((curr,el)=>{
    return curr+Number(el.price.replace(/,/g,'').split('₹')[1]);
  },0)
// console.log(total);

total=(total.toLocaleString())   //apply comma in digit place

const handleRemove=(id)=>{
  let filArr=cart.filter(item=>item.id!==id)
  localStorage.setItem("cartData",JSON.stringify(filArr))
  dispatch(addCartData(filArr))
  console.log(filArr);
}

  
  return (
    <div>
      <nav>
        <Header/>
      </nav>
      <br />
 


      <table class="table">
      <h1>My Cart</h1>
  <thead>
    {/* <tr>
      <th scope="col"></th>
      <th scope="col" ></th>
      <th scope="col" ></th>
    </tr> */}
  </thead>
  <tbody>
    {cart.map((e)=>(
     <tr>
       <td><img style={{height:100,width:100}} src={e.image_url}/></td>
       <td>{e.name}</td>
       <td>{e.price}</td>
       <td style={{cursor:"pointer"}} onClick={()=>handleRemove(e.id)}>X</td>
     </tr>
    ))}
  
  </tbody>
</table>

        <h2 className='lead fw-bold'>Total Amount : $ {total}</h2>
        <Link to="/payment"  > <button  className='btn btn-primary float-end' id="buybtn">Buy Now </button></Link>

      {/* <div className='container containercart'>
        <div className='row  justify-content-around' >
       
          {cart.map((e)=>(
            <>
                <div className='col-md-4'>
              <img src={e.image_url} height="100px" width="90px" alt=""/>
              <p>{e.price}</p>
            </div>
            </>
          ))}
          
        </div>
        <h2 className='lead fw-bold'>Total Amount : $21498</h2>
        <Link to="/payment"  > <button  className='btn btn-primary float-end' >Buy Now </button></Link>
    </div> */}
    <footer>
      <Footer/>
    </footer>
    </div>
  )

}

export default Cartbutton

