import React from "react";
import { Link } from "react-router-dom";
import Data from "../phones.json";
import { Header } from "../Components/NavAndFooter/Header";
import { Footer } from "../Components/NavAndFooter/Footer";
import "../styles/phones.css";
const MyOrder = () => {
  // console.log(Data);

  const CardItem = (item) => {
    
    return (
      <>


        <div className="card my-3" key={item.id} >
          <Link to={`/phoneproducts/${item.id}`} style={{textDecoration:"none"}}>
          <div>
          <img src={item.image_url} className="card-img-top phoneimg" alt={item.name} />
          <div className="card-body text-center">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.desc}</p>
            <p className="price"> {item.price}</p>
            <div className='color'>
      <div></div>
      <div></div>
      <div></div>
    </div>
            <div className="coupon">
              <div className="button">{item.coupon1}</div>
              <div className="button">{item.coupon2}</div>
            </div>
          </div>
          </div>
          </Link>
        </div>
        
      </>
    );
  };
  return (<>
  <nav className="nav">
    <Header/>
  </nav>
 
    <div className="box">
    <div>
        My Orders
      </div>
    <div className="no-order">

    No Order
  </div>
      <div className="containerPhone">
        <div className="recom">Recommended Items for you</div>
        <div className="row  justify-content-around">{Data.filter(item=>item.id<9).map(CardItem)}</div>
      </div>
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  );
};

export default MyOrder;