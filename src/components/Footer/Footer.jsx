import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import logImg from "../../assets/nav-logo.png"
import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-16">
      <div className="my-container py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo + Description */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <img src={logImg} alt="Logo" className="w-12 h-12" />
            <h2 className="text-xl font-bold ">The Dragon News Hub</h2>
          </div>
          <p className="text-sm text-gray-500">
            Stay updated with the latest news, trends, and breaking stories from around the world.
          </p>
          <p className="flex items-center gap-2 text-xs text-gray-500">
           <FaLocationDot/> College Road, Mohakhali, Dhaka
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="link link-hover">Home</Link></li>
            <li><Link to="/about" className="link link-hover">About</Link></li>
            <li><Link to="/career" className="link link-hover">Career</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/category/1" className="link link-hover">Breaking News</Link></li>
            <li><Link to="/category/5" className="link link-hover">Sports</Link></li>
            <li><Link to="/category/6" className="link link-hover">Entertainment</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <a className="btn btn-circle text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://github.com/mdalamin0" target="_blank" className="btn btn-circle ">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/md-al-amin-60aa32219/" target="_blank" className="btn btn-circle text-blue-600 ">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
      <div className="border border-base-300"></div>

      {/* Bottom */}
      <div className=" py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The Dragon News Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;