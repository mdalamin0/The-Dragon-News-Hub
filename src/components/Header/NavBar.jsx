import { Link, NavLink } from 'react-router';
import userImg from "../../assets/user.png";
import { use } from 'react';
import { AuthContext } from '../../context/AuthContext';


const NavBar = () => {
  const { user, logOutUser, loading } = use(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {

      })
      .catch(error => {
        alert(error.message)
      })
  }

  return (
    <div className='flex flex-col sm:flex-row gap-3 items-center justify-between pt-5'>
      <div></div>
      <div className='nav flex gap-5 text-accent'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
        {loading ? <span className="loading loading-spinner loading-md "></span> : <div className='login-btn flex items-center gap-5'>
          {user?.photoURL ? <img src={user.photoURL} className='w-12 h-12 rounded-full' alt="User" /> : <img src={userImg} className='w-12 h-12 rounded-full' alt="User" />}
          {
            user ? <button onClick={handleLogOut} className='btn btn-primary px-5 rounded-none'>Log Out</button> :
              <Link to="/auth/login" className='btn btn-primary px-6 rounded-none'>Login</Link>
          }
        </div>}
    </div>
  );
};

export default NavBar;