import React from 'react'
import './Login.css'
import './Slidestyle.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
        navigate('/ContentPage');
      };
  return (
    <div className='login-body'>

    <div className='login-main'>
      <input type='checkbox' id='chk' aria-hidden="true"></input>
      <div className='loginsignup'>
        <form>
          <label for="chk" aria-hidden="true" className='loginlabel'>Sign Up</label>
          <input type='email' name='email' placeholder='Email' required='' className='logininput'></input>
          <input type='Password' name='pswd' placeholder='Password' required='' className='logininput'></input>
          
          <button className='loginbutton' onClick={handleClick}>Sign Up</button>
        </form>
      </div>

      <div className='login'>
        <form>
          <label for="chk" aria-hidden="true" className='loginlabel'>Login</label>
          <input type='email' name='email' placeholder='Email' required='' className='logininput'></input>
          <input type='Password' name='pswd' placeholder='Password' required='' className='logininput'></input>
          <button className='loginbutton' onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
    
    </div>
  )
}

export default Login