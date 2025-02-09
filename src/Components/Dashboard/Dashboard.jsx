import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "rgb(149, 56, 226)" }}
        className="hero text-white rounded-2xl pt-5 mt-4 -z-10 pb-12"
      >
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="py-6 w-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="transform -translate-y-52  mt-36 ml-[570px]">
        <NavLink
          to="cart"
          className={
            ({ isActive }) =>
              isActive
                ? "btn rounded-3xl bg-white text-[#9538E2]" 
                : "btn rounded-3xl bg-[#9538E2] text-white" 
          }
        >
          Cart
        </NavLink>

        <NavLink
          to="wishlist"
          className={
            ({ isActive }) =>
              isActive
                ? "btn ml-2 rounded-3xl bg-white text-[#9538E2] " 
                : "btn ml-2 rounded-3xl bg-[#9538E2] text-white" 
          }
        >
          Wish List
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
