import { NavLink } from "react-router-dom";
import { GiShoppingCart} from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-white rounded-lg p-1 bg-[#000000] mr-3" 
            : "text-[#9538E2]  rounded-lg p-1 font-semibold mr-3"
        } >Home</NavLink>
      </li>
      <li>
        <NavLink to="statistics"  className={({ isActive }) =>
          isActive ? "text-white rounded-lg p-1 bg-[#000000] mr-3" 
            : "text-[#9538E2]  rounded-lg p-1 font-semibold mr-3"
        } >Statistics</NavLink>
      </li>
      <li>
        <NavLink to="dashboard"  className={({ isActive }) =>
          isActive ? "text-white rounded-lg p-1 bg-[#000000] mr-3" 
            : "text-[#9538E2]  rounded-lg p-1 font-semibold mr-3"
        } >Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="login"  className={({ isActive }) =>
          isActive ? "text-white rounded-lg p-1 bg-[#000000]" 
            : "text-[#9538E2]  rounded-lg p-1 font-semibold"
        } >Sign in</NavLink>
      </li>
    </>
  );
  
  

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-[#9538E2]">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        <GiShoppingCart  className="text-2xl mr-5"></GiShoppingCart>
        <FaRegHeart className="text-xl mr-2"></FaRegHeart>
      </div>
    </div>
  );
};

export default Navbar;
