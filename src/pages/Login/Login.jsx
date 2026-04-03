import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const {signInUser, setUser, loading} = use(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const  navigate = useNavigate();
    const location = useLocation();
    console.log(loading)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccessMessage(false)
    setErrorMessage('')

    signInUser(email, password)
    .then(result => {
      setUser(result.user)
      setSuccessMessage(true)
      navigate(`${location?.state ? location?.state : "/"}`)
      
    })
    .catch(error => {
      setErrorMessage(error.message)
    })

  }

  return (
    <div className='min-h-screen mt-20'>
      <div className="card bg-base-100 w-full max-w-xl mx-auto shrink-0 px-16 py-10">
        <div className="card-body">
          <h2 className='font-semibold text-2xl text-center border-b-2 border-base-200 pb-8'>Login your account</h2>
          <form onSubmit={handleLogin} className="fieldset space-y-2 pt-8">
            {/* email */}
            <label className="label font-semibold text-xl">Email</label>
            <input type="email" name='email' required className="input focus:outline-0 w-full bg-base-200 border-0" placeholder="Enter your email address" />
            {/* password */}
            <label className="label font-semibold text-xl">Password</label>
            <input type="password" name='password' required className="input focus:outline-0 w-full bg-base-200 border-0 " placeholder="Enter your password" />
            <div><a className="link link-hover font-semibold text-accent">Forgot password?</a></div>
            
            <button type='submit' className="btn btn-primary mt-4">{loading ? <span className="loading loading-spinner loading-xs"></span> : "Login"}</button>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            {successMessage && <p className='text-green-500'>User Logged In Successfully!</p>}
            <p className='font-semibold text-accent mt-7.5 text-center'>Dont’t Have An Account ?  <Link to="/auth/register" className='text-secondary'>Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;