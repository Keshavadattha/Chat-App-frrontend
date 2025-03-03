import React , {useState} from 'react'
import './Login.css'
import assets from '../../assets/assets'
const Login = () => {
  const [currState,setCurrState] = useState("Sign in")
  return (
    <div className="login">
     <img src={assets.logo_big} alt="" className="logo" />
     <form  className="login form">
        <h2>{currState}</h2>
       {currState === "Sign up"? <input type="text" placeholder='username' className="form-input" required /> : null}
        <input type="Email" placeholder='Email address' className="form-input" required />
        <input type="Password" placeholder='password' className="form-input" />
        <button type="submit">{currState === "Sign up"?"Create account" :"Login Now"}</button>
        <div className="login-term">
            <input type="checkbox" />
            <p>agree to the term of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {
            currState === "Sign in" 
            ?  <p className="login-toggle">Already have an account <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            :<p className="login-toggle">Create Account <span onClick={()=>setCurrState("Login")}></span></p>
          }
        </div>
     </form>
    </div>
  )
}

export default Login
