import { useLoaderData, useParams } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { addToStoredCardList, addToStoredWishList} from "../Utility/addToDb";

const ProductDetail = () => {
    const { product_id } = useParams();
    const data = useLoaderData();

    const product = data.find(product => product.product_id === product_id);

    const {
        product_image,
        product_title,
        price,
        availability,
        description,
        specification, 
        rating
    } = product;

    const handleMarkAsCard = (id) => {

        addToStoredCardList(id)
    }

    const handleMarkAsWish = (id) =>{
        addToStoredWishList(id)
    }

    return (
        <div className='max-h-auto md:max-h-[900px]'>
            <div style={{ backgroundColor: "rgb(149, 56, 226)" }} className="hero text-white rounded-2xl pt-5 mt-4 -z-10 pb-56">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-3xl font-bold">Product Details</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r flex gap-4  bg-white z-[1000] border-white border shadow-lg w-4/5 mx-auto rounded-[10px] p-5 relative transform -translate-y-52">
                <img src={product_image} alt={product_title} className="w-96" />
                <div>
                    <span className="text-2xl font-bold">{product_title}</span>  <br /> <br />
                    <span>Price: <span className="font-bold"> ${price.toFixed(2)}</span></span> <br /> <br />
                    <span className={`p-2  rounded ${availability ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                        {availability ? "In Stock" : "Out of Stock"}
                    </span> <br /> <br />
                    <span>{description}</span> <br />
                    <h2 className="text-xl font-bold mt-3">Specifications:</h2>
                    <ol className="list-disc ml-5">
                        <li>Processor: {specification.processor}</li>
                        <li>RAM: {specification.ram}</li>
                        <li>Storage: {specification.storage}</li>
                        <li>Screen Size: {specification.screen_size}</li>
                        <li>Graphics Card: {specification.graphics_card}</li>
                    </ol>
                    <h2 className="text-xl font-bold mt-3">Rating:</h2>
                    <p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <span className="bg-gray-200 p-2 ml-3 rounded-md">{rating}</span>
                    </p>
                    <div className="flex">
                        <button onClick={() =>handleMarkAsCard(product_id)} className="btn btn-outline btn-primary rounded-3xl mt-5">Add to Card <span className="text-xl"><GiShoppingCart></GiShoppingCart></span></button>
                        <span onClick={() =>handleMarkAsWish(product_id)} className="mt-5 ml-3 text-xl btn btn-primary btn-outline"><FaRegHeart></FaRegHeart></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
