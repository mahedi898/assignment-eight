import PropTypes from 'prop-types';
import { GiShoppingCart } from "react-icons/gi";
import { useLocation } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";



const DashCard = ({ product,handleRemove }) => {
    const { product_title, product_image, description, product_id } = product || {};
    const { pathname } = useLocation()

    return (
        <div className=" bg-base-100 flex w-full gap-5 shadow-2xl border mt-5">
            <figure>
                <img
                    src={product_image}
                    alt={product_title}
                    className='w-40'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                
                <p>
                {description}
                </p>
                <button className="btn btn-outline btn-primary w-36 rounded-3xl mt-5">Add to Card <span className="text-xl"><GiShoppingCart></GiShoppingCart></span></button>
                   
            </div>
            <div className='flex'> 
            {pathname === "/dashboard/wishlist" && (
                    <div
                      onClick={() => handleRemove(product_id)}
                      className="text-red-600 flex items-center pr-5 text-2xl cursor-pointer"
                    >
                      <MdDeleteForever />
                    </div>
                  )}
            </div>
        </div>
    );
};

DashCard.propTypes = {
    product: PropTypes.shape({
        product_title: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        product_image: PropTypes.string.isRequired,
    }),
};


export default DashCard;