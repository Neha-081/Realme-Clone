import React from 'react';
import { Footer } from '../Components/NavAndFooter/Footer';
import { Header } from '../Components/NavAndFooter/Header';
import "../styles/tab.css";
import ScrollToTop from '../scrollToTop';
import Data from "../phones.json"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCartData } from '../redux/cartReducer/actions'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Cartbutton = () => {
  const { cart } = useSelector((store) => ({ ...store }));
  const { currentUser } = useSelector((state) => state?.user);

  const dispatch = useDispatch();
  const navigate = useNavigate()
  // console.log("cart",cart);
  let total = cart.reduce((curr, el) => {
    return curr + Number(el.price.replace(/,/g, '').split('₹')[1]);
  }, 0)
  // console.log(total);

  total = (total.toLocaleString())   //apply comma in digit place

  const handleRemove = (id) => {
    let filArr = cart.filter(item => item.id !== id)
    localStorage.setItem("cartData", JSON.stringify(filArr))
    dispatch(addCartData(filArr))
    console.log(filArr);
  }

  const CardItem = (item) => {

    return (
      <>


        <div className="card my-3" key={item.id} >
          <Link to={`/phoneproducts/${item.id}`} style={{ textDecoration: "none" }} onClick={ScrollToTop}>
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


  const buyCheck = () => {
    if (currentUser) {
      navigate("/payment")
    } else {
      toast.warning("User have to Login first")
      navigate("/login")
    }
  }

  return (
    <div>
      <nav>
        <Header />
      </nav>
      <br />



      <table className="table">
        <h1>My Cart</h1>
        <thead>
          {/* <tr>
      <th scope="col"></th>
      <th scope="col" ></th>
      <th scope="col" ></th>
    </tr> */}
        </thead>
        <tbody>

          {cart.map((e) => (
            <tr>
              <td>

                <img style={{ height: 100, width: 100 }} src={e.image_url} alt="proimg" />
              </td>
              <td>{e.name}</td>
              <td className="price" >{e.price}</td>
              <td style={{ cursor: "pointer" }} onClick={() => handleRemove(e.id)} className="remove">X</td>
            </tr>
          ))}


        </tbody>
      </table>


      <h2 className='lead fw-bold' >Total Amount : <span id="pricep">₹ {total}</span></h2>
      {/* <Link to="/payment"  >  */}
      <button className='btn btn-primary float-end' id="buybtn" onClick={buyCheck} disabled={cart.length === 0}>
        Buy Now </button>


      {cart.length === 0 ? <div className="containerPhone" style={{ margin: "50px auto" }}>
        <div className="recom">Recommended Items for you</div>
        <div className="row  justify-content-around">{Data.filter(item => item.id > 10 && item.id < 21).map(CardItem)}</div>
      </div> : ""}
      {/* </Link> */}

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
        <Footer />
      </footer>
    </div>
  )

}

export default Cartbutton

