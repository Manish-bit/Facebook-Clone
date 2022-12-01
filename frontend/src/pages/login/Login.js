import './Login.css'

const Login = () => {
  return (
    <div className="loginContainer">
        <div className="loginWrapper">
            <div className="loginLeft">
        <h3 className="loginLogo">FACEBOOK</h3>
        <span className="loginDesc">Reach with friends from all around the world and create a connection.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" placeholder='Email' name="" className='loginInput' />
                    <input type="Password" placeholder='Password' name="" className='loginInput' />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login