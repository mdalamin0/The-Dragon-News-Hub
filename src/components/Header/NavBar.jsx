import { Link, NavLink } from 'react-router';
import userImg from "../../assets/user.png";
import { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const NavBar = () => {
  const { user, logOutUser, loading } = use(AuthContext);

  const handleLogOut = () => {
    logOutUser().catch(error => alert(error.message));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5">

      {/* Empty div for spacing (desktop only) */}
      <div className="hidden sm:block"></div>

      {/* Nav Links */}
      <div className="flex gap-6 text-accent text-sm sm:text-base font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      {/* Right Side */}
      {loading ? (
        <span className="loading loading-spinner loading-md"></span>
      ) : (
        <div
          className="
          flex items-center gap-3 sm:gap-5
          w-full sm:w-auto
          justify-between sm:justify-end
          bg-base-200 sm:bg-transparent
          px-4 py-2 sm:p-0
          rounded-xl sm:rounded-none
        "
        >
          {/* Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={user?.photoURL || userImg}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              alt="User"
            />
            <div className="sm:hidden">
              <h4 className="text-sm font-semibold">
                {user?.displayName || "Guest"}
              </h4>
              <p className="text-xs text-gray-500">
                {`${user ? "Logged In" : "Not Logged In"}`}
              </p>
            </div>
          </div>

          {/* Button */}
          {
            user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-sm sm:btn-md btn-primary rounded-full sm:rounded-none px-4 sm:px-5"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-sm sm:btn-md btn-primary rounded-full sm:rounded-none px-4 sm:px-6"
              >
                Login
              </Link>
            )
          }
        </div>
      )}
    </div>
  );
};

export default NavBar;