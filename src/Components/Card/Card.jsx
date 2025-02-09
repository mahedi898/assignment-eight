import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { product_title, price, product_image, product_id } = product || {};
  return (

    <div className="card bg-base-100 w-72 shadow-2xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105">
      <figure>
        <img
          src={product_image}
          alt={product_title}
          className="transition-all duration-300 transform w-72 max-h-72 hover:scale-105 hover:w-80" 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>
          Price: {price}
        </p>
        <div className="card-actions justify-end">
          <Link to={`product/${product_id}`} className="btn btn-primary btn-outline">Details</Link>
        </div>
      </div>
    </div>


  );
};

Card.propTypes = {
  product: PropTypes.shape({
    product_title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
