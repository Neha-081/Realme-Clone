import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Footer } from "../NavAndFooter/Footer";
import { Header } from "../NavAndFooter/Header";
import "../../styles/product.css";
import  Cartbutton  from "../../Pages/Cartbutton";

function HomeProdDetail() {
  const { data } = useSelector((store) => store.data.homeData);
  // const dispatch = useDispatch();


  // const [cartBtn, setcartBtn] = useState("Add to Cart");
  const [cartData,setCartData]=useState([])

  const homeid = useParams();
  // console.log("homeid", homeid.homeid);
  const prodDetail = data.filter(
    (item) => Number(item.id) === Number(homeid.homeid)
  );
  const arr = prodDetail[0];
  // console.log("arr", arr);
  // const handleCart = (arr) => {
  //   if (cartBtn === "Add to Cart") {
  //     dispatch(addItem(arr));
  //     setcartBtn("Remove from Cart");
  //   } else {
  //     dispatch(deleteItem(arr));
  //     setcartBtn("Add to Cart");
  //   }
  // };
  // const handleCart=()=>{
  //   setCartData(homeid.homeid)
   
  // }
  console.log("cartData",cartData);

 


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
                    <button className="gray" onClick={() => setCartData(...cartData,homeid.homeid)} >
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
      <Cartbutton cartData={cartData}/>
    </>
  );
}

export default HomeProdDetail;
