import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

const Register = () => {
  const { creatUser, setUser, loading, setLoading} = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    setSuccessMessage(false)
    setErrorMessage('')

    if (name.length < 5) {
      setErrorMessage("Name should be more than 5 character")
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be 6 character longer!')
      return;
    }
    if (!terms) {
      setErrorMessage('Please Accept Our Terms & Conditions');
      return;
    }
    creatUser(email, password)
      .then(result => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo
        })
          .then(() => {

          })
          .catch(error => {
            setErrorMessage(error.message)
            setLoading(false)
          })
        setUser(result.user)
        setSuccessMessage(true)
        navigate("/")

      })
      .catch(error => {
        setErrorMessage(error.message)
        setLoading(false)
      })
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className="card bg-base-100 w-full max-w-xl mx-auto shrink-0 px-16 py-10">
        <div className="card-body">
          <h2 className='font-semibold text-2xl text-center border-b-2 border-base-200 pb-8'>Register your account</h2>
          <form onSubmit={handleRegister} className="fieldset space-y-2 pt-8">
            {/* name */}
            <label className="label font-semibold text-xl">Your Name</label>
            <input type="text" name='name' required className="input focus:outline-0 w-full bg-base-200 border-0" placeholder="Enter your name" />
            {/* photo url */}
            <label className="label font-semibold text-xl">Photo URL</label>
            <input type="text" name='photo' className="input focus:outline-0 w-full bg-base-200 border-0" placeholder="Enter your photo url" />
            {/* email */}
            <label className="label font-semibold text-xl">Email</label>
            <input type="email" name='email' required className="input focus:outline-0 w-full bg-base-200 border-0" placeholder="Enter your email address" />
            {/* password */}
            <label className="label font-semibold text-xl">Password</label>
            <div className='relative'>
              <input type={showPassword ? "text" : "password"} name='password' required className="input focus:outline-0 w-full bg-base-200 border-0 " placeholder="Enter your password" />
              <span className='cursor-pointer absolute top-2.5 right-4 text-accent' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEye size={22} /> : <IoEyeOffSharp size={22} />}</span>
            </div>

            {/* terms & conditions */}
            <label className="label">
              <input type="checkbox" name='terms' className="checkbox" />
              Accept Term & Conditions
            </label>
           
            <button type='submit' className="btn btn-primary mt-4">{loading ? <span className="loading loading-spinner loading-xs"></span> : "Register"}</button>
             {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            {successMessage && <p className='text-green-600'>User Register Successfully!</p>}
            <p className='font-semibold text-accent mt-6 text-center'>Already Have An Account ? <Link to="/auth/login" className='text-secondary'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;