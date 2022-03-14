import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Footer } from "../NavAndFooter/Footer";
import { Header } from "../NavAndFooter/Header";
import { useDispatch } from "react-redux";
import { addCartData } from "../../redux/cartReducer/actions";
import "../../styles/product.css";
import  Cartbutton  from "../../Pages/Cartbutton";
import axios from "axios";

function HomeProdDetail() {
  const { data } = useSelector((store) => store.data.homeData);
  const {  cart } = useSelector((store) => ({...store}));
  const dispatch=useDispatch()
  // console.log("data",data);
  // console.log("cart",cart);
  
//   const cartClick=()=>{
//     console.log(homeid.homeid);
//       dispatch(cartDataSuccess(cart))
//     }

//   useEffect(()=>{
// cartClick()
//   },[dispatch])

const cartClick=()=>{
  console.log("c----->",cart)
   let arr1 = [...cart,homeid];
   console.log("arr--->",arr1)
   dispatch(addCartData(arr1))

  // axios.post('https://neha-json-server.herokuapp.com/posts',homeid)
  // .then(res=>console.log(res))
  // .catch(err=>console.log(err))
}

// useEffect(()=>{
 
//   const getCartData=()=>{
//     axios.get('https://neha-json-server.herokuapp.com/posts').then(({data})=>{
//         dispatch(cartDataSuccess(data))

//     })
// }
//   getCartData()
// },[dispatch])
  


  // const [cartBtn, setcartBtn] = useState("Add to Cart");

  const homeid = useParams();
  // console.log("homeid", homeid.homeid);
  const prodDetail = data.filter(
    (item) => Number(item.id) === Number(homeid.homeid)
  );
  const arr = prodDetail[0];


 


  return (
    <>
      <div>
        <Header/>
        <br />

        <div key={arr.id} className="allDetail">
          <div className="cotainer my-5 py-3">
            <div className="row1">
              <div className="col-md-1 d-flex justify-content-center mx-auto ">
                <img src={arr.image_url} alt={arr.name} height="400px" />
              </div>
              <div className="col-md-2 d-flex flex-column justify-content-center">
                <h1 className="brand display-6 fw-bold">
                  {arr.name} (Prism Blue,6GB+128GB)
                </h1>
                <h2 className="my-1 cartprice"> {arr.price}</h2>
                <hr />
                <div className="mar">
                  <div className="button">{arr.coupon1}</div>
                  <div className="button">{arr.coupon2}</div>
                </div>
                <div className="descript"> {arr.desc}</div>
                <div className="buy">
                  <div className="total">
                    <div>
                      {" "}
                      <p>Total:</p>
                    </div>
                    <div></div>
                    <div>
                      <h2>{arr.price}</h2>
                    </div>
                  </div>
                  <div className="cartsession">
                    <button className="gray" onClick={cartClick} >
                      Add to cart
                    </button>
                    <Link to="/payment">
                    <button className="yellow">
                      Buy Now
                      
                     </button>
                     </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <Footer />
      
    </>
  );
}

export default HomeProdDetail;
