import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../context/AuthContext';

const SocialLogin = () => {
  const {loginWithGoogle, setUser, loginWithGitHub} = use(AuthContext);
  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then(result => {
      setUser(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleGitHubLogin = () => {
    loginWithGitHub()
    .then(result => {
      setUser(result.user)
      console.log(result.user)
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
      <h2 className='text-xl font-semibold'>Login With</h2>
      <div className='space-y-3 mt-5'>
        <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary w-full  ">
         <FcGoogle size={24}/>
          Login with Google
        </button>
        <button onClick={handleGitHubLogin} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24}/>
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;