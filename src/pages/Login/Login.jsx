import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import SocialLogin from '../../components/Main/SocialLogin';
import { Helmet } from 'react-helmet-async';



const Login = () => {
  const { signInUser, setUser, loading, setLoading, resetPassowrd } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef(null);


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
        setLoading(false)
      })

  }

  const handleForgotPassowrd = () => {
    setErrorMessage("")
    const email = emailRef?.current?.value;
    resetPassowrd(email)
      .then(() => {
        alert("Password reset email sent. Check your email!")
      })
      .catch(error => {
        setErrorMessage(error.message)
      })
  }
  return (
    <div className='min-h-screen mt-20'>
      <Helmet>
        <title>The Dragon News | Login</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-xl mx-auto shrink-0 sm:px-8 sm:py-5 md:px-16 md:py-10">
        <div className="card-body">
          <h2 className='font-semibold text-xl md:text-2xl text-center border-b-2 border-base-200 pb-8'>Please Login your account!</h2>
          <form onSubmit={handleLogin} className="fieldset space-y-2 pt-5 md:pt-8">
            {/* email */}
            <label className="label font-semibold text-xl">Email</label>
            <input type="email" name='email' ref={emailRef} required className="input focus:outline-0 w-full bg-base-200 border-0" placeholder="Enter your email address" />
            {/* password */}
            <label className="label font-semibold text-xl">Password</label>
            <div className='relative'>
              <input type={showPassword ? "text" : "password"} name='password' required className="input focus:outline-0 w-full bg-base-200 border-0 " placeholder="Enter your password" />
              <span className='cursor-pointer absolute top-2.5 right-4 text-accent' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEye size={20} /> : <IoEyeOffSharp size={20} />}</span>
            </div>
            <div><a onClick={handleForgotPassowrd} className="link link-hover font-semibold text-accent">Forgot password?</a></div>

            <button type='submit' className="btn btn-primary mt-4">{loading ? <span className="loading loading-spinner loading-xs"></span> : "Login"}</button>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            {successMessage && <p className='text-green-500'>User Logged In Successfully!</p>}
            <p className='font-semibold text-accent mt-7.5 text-center'>Dont’t Have An Account ?  <Link to="/auth/register" className='text-secondary'>Register</Link></p>
          </form>
          <div className='lg:hidden'>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;