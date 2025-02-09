import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ categories }) => {
  return (
    <div className="menu w-56 h-72 shadow-2xl p-5 text-center rounded-lg space-y-3" >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-white text-lg font-bold rounded-lg p-1 bg-[#9538E2]" : "text-lg font-bold rounded-lg p-1 bg-gray-200"
        }
      >
        All Products
      </NavLink> 
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          className={({ isActive }) => `${isActive ? "text-white text-lg font-bold rounded-lg p-1 bg-[#9538E2]" : "text-lg font-bold rounded-lg p-1 bg-gray-200"}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Categories;
