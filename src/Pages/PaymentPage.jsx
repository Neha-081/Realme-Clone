import React , { useState } from "react";
import "../styles/payment.css";
import { Header } from "../Components/NavAndFooter/Header";
import { Footer } from "../Components/NavAndFooter/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PaymentPage = () => {

    const [passWord, setPassWord] = useState([]);
    const [passDes, setPassDes] = useState();
    let navigate = useNavigate();
  
    const [cardNumber, setCardNumber] = useState([]);
    const [cardNumberValid, setCardNumberValid] = useState();
  
    const passHandleChange = (e) => {
      setPassWord(e.target.value);
    };
    const cardNumberHandleChange = (e) => {
      setCardNumber(e.target.value);
    };

  
    const handlePayment = () => {
      if (passWord.length !== 3) {
        setPassDes("*Invalid Credential");
      }
      if (passWord.length === 3) {
        setPassDes("");
      }
      if (cardNumber.length !== 16) {
        setCardNumberValid("*Invalid Card Number");
      }
      if (cardNumber.length === 16) {
        setCardNumberValid("");
      }
      if(passWord.length===3 && cardNumber.length===16){

        
  
      toast.success("Payment Successful")
      setTimeout(() => {
        navigate("/")
      }, 5000)
    }
    };


  return  (
    <div>
      <nav>
        <Header/>
      </nav>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqFQ-3RAWOJvYpQ09tnVJN5R7nxO857-ehrT5ROtcNDaGGLuEPuZ1YeYyUuulZEROtoTk&usqp=CAU" alt="" className="imgpay"/>
   <div className="payment-container-main">
     
        <div className="payment-container">
      <h1>Make Your Payment Now</h1>
      <div className="first-row">
        <div className="owner">
          <h3>Card Holder's Name</h3>
          <div className="input-field">
            <input id="name" type="text" placeholder="Enter Your Name Here" />
          </div>
        </div>
        <div className="cvv">
          <h3>CVV</h3>
          <div className="input-field">
            <input
              id="password"
              type="number"
              placeholder="Enter  Number"
              onChange={passHandleChange}
            />
          </div>
          <p id="in_pass">{passDes}</p>
        </div>
      </div>
      <div className="second-row">
        <div className="card-number">
          <h3>Card Number</h3>
          <div className="input-field">
            <input
              id="card_number"
              type="number"
              placeholder="Enter Your Card Number Here"
              onChange={cardNumberHandleChange}
            />
          </div>
          <p
            id="in_nm"
            style={{
              textAlign: "left",
            }}
          >
            {cardNumberValid}
          </p>
        </div>
      </div>
      <div className="third-row">
        <h3>Valid Upto</h3>
        <div className="selection">
          <div className="date">
            <select name="months" id="months">
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </select>
            <select name="years" id="years">
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>
          </div>
          <div className="cards">
            <img alt="https://utils.imimg.com/payments/pwim_files/pwim_modes_v5.png" src="https://utils.imimg.com/payments/pwim_files/pwim_modes_v5.png" />
          </div>
        </div>
        <p id="exp"></p>
      </div>
      <a href='###' className="paybtn" id="payment" style={{textDecoration:"none"}} onClick={handlePayment}>
  
      Pay Now
        
      </a>
    </div>
   </div>
   </div>
   <footer>
     <Footer/>
   </footer>
   </div>
  );
}

export default PaymentPage;