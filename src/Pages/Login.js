import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate, Link} from 'react-router-dom';
import { googleSignInInitiate, loginInitiate } from '../redux/userReducer/actions';
import "./Login.css";
import { toast } from 'react-toastify';


const Login=()=>{
  const [state, setState] = useState({
    email:'',
    password:'',
  });

const{email, password} = state;

const { currentUser } = useSelector((state) => state.user);

const { loginFail } = useSelector((state) => state.user);
// console.log("log",loginFail);

const navigate = useNavigate();

useEffect(()=>{
  if(currentUser){
    toast.success("You have successfully logged In")
    navigate('/');
  }

},[currentUser, navigate,loginFail]);

const dispatch = useDispatch();


const handleGoogleSignIn = () => {
  dispatch(googleSignInInitiate());
};


  const handleSubmit =(e) =>{
    e.preventDefault();
    if(!email || !password){
      return toast.warning("Please fill in all fields");
    }
if(password.length < 6){
  return toast.error("Password must be of 6 characters")
}
if(email.length < 6){
  return toast.error("Email must be at least 6 characters");
}
if(!email.includes("@")){
  return toast.error("Please enter a valid email");
}
if(!email.includes(".")){
  return toast.error("Please enter a valid email");
}




   dispatch(loginInitiate(email, password));
    setState({email:"", password:""});
  

    
  };

  const handleChange =(e) =>{
    let {name, value} = e.target;
    setState({...state, [name]: value });
  };

  return (
    <div>
      <Link to="/" style={{textDecoration:"none"}}>
      <h1 className="realme">realme</h1>
      </Link>
        <div id= "logreg-forms">
          <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal" style={{textAlign:"center"}}>
              Sign in
              </h1>
              
              <p className="signwithpass">Sign in with password</p>
              <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              value={email}
              required
              autoFocus
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
              <button className="block-signin" type="submit">
                <i className="fas fa-sign-in-alt"></i> Sign In
              </button>
            
               <hr/> 
              <p className="otherstyle" style={{textAlign:"center"}}>Other ways to sign in</p>
              <div className="social-login">
                <button 
                className="btn google-btn social-btn" 
                type="button" 
                onClick={handleGoogleSignIn}>

                  <span>
                    <i className="fab fa-google-plus-g"></i> Sign in with Google+
                  </span>
                  </button>

              </div>

              <p className="otherstyle">Don't have an account</p>
              <Link to="/register">
              <button 
              className="block-newsignup" 
              type="button" 
              id="btn-signup"
              >
                <i className="fas fa-user-plus"></i>Create New Account
              </button>
                </Link>
          </form>
        </div>
    </div>
  )
}

export default Login