import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerInitiate } from '../redux/userReducer/actions';
import "./Register.css";
import { toast } from 'react-toastify';

const Register = () => {

  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { currentUser } = useSelector((state) => state.user);
  const { registerFail } = useSelector((state) => state.user);


  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      toast.success("You have successfully registered");
      navigate('/');
    } else if (registerFail === true) {
      toast.error("User already exist!! Kindly Login");
      navigate("/login")
    }
  }, [currentUser, navigate, registerFail]);


  const dispatch = useDispatch();

  const { email, password, displayName, passwordConfirm } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return toast.warning("Passwords don't match");
    }
    // if(currentUser===null){
    //   toast.warning("Email already Exist, Kindly Login!")
    //   navigate("/login")
    // }else{
    dispatch(registerInitiate(email, password, displayName));
    setState({ email: "", displayName: "", password: "", passwordConfirm: "" })



  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div>
        <Link to="/" style={{textDecoration:"none"}}>
      <h1 className="realme">realme</h1>
      </Link>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: "center" ,marginLeft:"25px"}}>
            Create Account
          </h1>

          <div className="form-control">
            <div className="form-data">
              <select style={{ width: "60%" }}>
                <i className="fas fa-sign-in-alt"></i>
                <option value="Select-Country">--Select Country--</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="America">America</option>
                <option value="Denmark">Denmark</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
                <option value="Italy">Italy</option>

              </select>
            </div>
          </div>
          <p className='Pass-data'>You will be unable to change your country/region after your account is created</p>


          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Full Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />

          <input
            type="email"
            id="userEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />

          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />

          <input
            type="password"
            id="passwordConfirm"
            className="form-control"
            placeholder="Confirm Password"
            name="passwordConfirm"
            onChange={handleChange}
            value={passwordConfirm}
            required
          />
          <br />
          <p className='Pass-data'>Password must contain 6-16 characters atleast two of the following digits letters or symbols</p>

          <button className="block" type="submit">
            Create account
          </button>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <i className="fas fa-angle-left" id='back'></i> Back
          </Link>
        </form>
        <br />
      </div>
    </div>
  )
}

export default Register;