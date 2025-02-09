import { MdDeleteForever } from "react-icons/md";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const DashCard = ({ product, handleRemove }) => {
  const { product_title, price, product_image, description, product_id } = product || {};
  const { pathname } = useLocation();

  return (
    <div className="bg-base-100 flex w-full gap-5 shadow-2xl border mt-5">
      <figure>
        <img src={product_image} alt={product_title} className="w-40" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>

        <p>{description}</p>
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>
      </div>
      {pathname === "/dashboard/cart" && (
        <div
          onClick={() => handleRemove(product_id)}
          className="text-red-600 flex items-center pr-5 text-2xl cursor-pointer"
        >
          <MdDeleteForever />
        </div>
      )}
    </div>
  );
};


DashCard.propTypes = {
  product: PropTypes.shape({

  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default DashCard;
