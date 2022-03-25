import React from "react";
import { Link } from "react-router-dom";
import Data from "../phones.json";
import { Header } from "../Components/NavAndFooter/Header";
import { Footer } from "../Components/NavAndFooter/Footer";
import "../styles/phones.css";
import ScrollToTop from "../scrollToTop";
import { useSelector } from "react-redux";
const MyOrder = () => {
  const history=useSelector(store=>store.history)
  console.log("hhisro",history);
  

  const CardItem = (item) => {
 
    
    return (
      <>

        <div className="card my-3" key={item.id} >
          <Link to={`/phoneproducts/${item.id}`} style={{textDecoration:"none"}} onClick={ScrollToTop}>
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
    <div className="myOrders">
        My Orders
      </div>
    <div className="no-order">


    <table className="table">
  <thead>
    {/* <tr>
      <th scope="col"></th>
      <th scope="col" ></th>
      <th scope="col" ></th>
    </tr> */}
  </thead>
  <tbody>
  {history.length ?     <div>
    {history.map((e)=>(
     <tr>
       <td>
      
         <img style={{height:100,width:100}} src={e.image_url} alt="proimg"/>
         </td>
       <td>{e.name}</td>
       <td className="price" >{e.price}</td>
     </tr>
    ))}
    </div> : <h5>No Order</h5>}

    
  
  </tbody>
</table>

    
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
