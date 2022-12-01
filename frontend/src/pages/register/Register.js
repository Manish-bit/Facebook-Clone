import './Register.css'

const Register = () => {
  return (
    <div className="loginContainer">
    <div className="loginWrapper">
        <div className="loginLeft">
    <h3 className="loginLogo">FACEBOOK</h3>
    <span className="loginDesc">Reach with friends from all around the world and create a connection.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="text" placeholder='Username' name="" className='loginInput' />
                <input type="Email" placeholder='Email' name="" className='loginInput' />
                <input type="Password" placeholder='Password' name="" className='loginInput' />
                <input type="Password" placeholder='Password Again' name="" className='loginInput' />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">Log into your Account</button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Register