import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux'; // Import useDispatch hook
import { addToCart } from '../../redux/features/cart/cartSlice'; // Import the action to add to cart

import IncrementFeature from '../Utils/IncrementFeature'; // The Increment feature of the product cards

import { formatPrice } from '../Utils/FormatCurrency'; //Handles the price format 

function ProductCard({
  name = 'Product',
  description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  id = '0000',
  image = 'src/assets/no_image.png',
  priceInKobo = 4000,
}) {
  const [value, setValue] = useState(1);
  const [added, setAdded] = useState(false); // Local state for showing the "Added" notification
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions

  // Function to handle adding item to the cart
  const handleAddToCart = () => {
    // Dispatch the addToCart action with the product details
    dispatch(addToCart({
      id,
      name,
      description,
      image,
      priceInKobo,
      quantity: value,
    }));
    setAdded(true); // Show the "Added" notification
    setTimeout(() => {
      setAdded(false); // Hide the notification after 2 seconds
    }, 2000);
  };

  // Handles the product price
  const formattedPrice = formatPrice(priceInKobo)

  return (
    <>
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full my-6">
    <div className="relative">
      <img src={image} alt="Product image" className="w-full h-44 object-cover" />
      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
      <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
        <svg
          className="w-4 h-4 text-blue-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
  
      {/* Currency */}
      <div className="py-2 flex items-center gap-10">
        <p className="text-lg font-bold text-green-600">
          ₦{ formattedPrice }
        </p>
        <p className="text-sm text-gray-500 line-through">
        {formatPrice(priceInKobo + 150000)}
        </p>
      </div>
      <div className="flex items-center mb-2">
        <div className="flex text-yellow-400">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        <span className="text-gray-600 text-sm ml-2">(4.5/5)</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <i className="fas fa-truck text-gray-800 mr-2"></i>
          <span className="text-sm text-gray-600">Free Shipping</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-clock text-gray-800 mr-2"></i>
          <span className="text-sm text-gray-600">In Stock</span>
        </div>
      </div>
  
      {/* Added Notification Message */}
      <div className="h-8">
        {added && (
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-circle-check text-green-600"></i>
            <div className="text-green-600 text-sm font-semibold">
              <span>Item Added</span>
            </div>
          </div>
        )}
      </div>
  
      {/* Add to Cart Button */}
      <div className="flex space-x-4">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-teal-900 text-white rounded-full font-semibold hover:bg-teal-950 transition-colors duration-200"
        >
          Add to Cart
        </button>

        <IncrementFeature value={value} setValue={setValue} />
      </div>
    </div>
  </div>
    </>
  );
}
ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  priceInKobo: PropTypes.number,
};

export default ProductCard;
