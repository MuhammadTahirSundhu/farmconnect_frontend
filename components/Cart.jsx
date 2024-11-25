import React, { useState, useEffect } from "react";
import { getCartProductsById } from "@/Services/cartProductServiceApi"; // Ensure to import the function
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
function Cart({ cartId }) {
  const [cartProducts, setCartProducts] = useState([]); // State to store cart products
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to handle errors
  const [isVisible, setIsVisible] = useState(false); // State to toggle visibility of the cart
  const currentCart = useSelector((state) => state.currentRecords.currentCart); // Correct selector path
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {

    const fetchCartProducts = async () => {
      try {
        const products = await getCartProductsById(currentCart.cartID);

        setCartProducts(products);
        console.log(products);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch cart products");
        setLoading(false);
      }
    };

    const delayFetch = setTimeout(() => {
      fetchCartProducts();
    }, 1500); // Delay the execution by 1 second (1000ms)
  }, [cartId]); // Run effect when cartId changes

  if (loading) {
    return null;
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  // Toggle visibility of the cart widget
  const toggleCartVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleCheckout = () => {
    router.push("/payment"); // Redirect to the payment page
  };

  return (
    <div>
      {/* Cart Icon with Avatar */}
      <div
        onClick={toggleCartVisibility}
        className="cursor-pointer bg-green-600 hover:green-teal-700 text-white font-semibold p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out"
      >
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {/* Avatar badge for the number of products */}
          {cartProducts.length > 0 && (
            <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
              {cartProducts.length}
            </div>
          )}
        </div>
      </div>

      {/* Cart Widget */}
      {isVisible && (
        <div className="fixed top-25 right-8 bg-white shadow-lg rounded-lg w-80 z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                  {cartProducts.length}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-700 hover:text-teal-900 transition-all duration-200"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <span className="text-xl font-semibold">Your Cart</span>
            </div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 max-h-60 overflow-y-auto">
            {cartProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                <div className="w-16 h-16 mr-4">
                  <Image
                    src={`/${product.name}.jpg`} // Use template literal properly inside curly braces
                    alt={product.name}
                    width={50} // Add width
                    height={50} // Add height
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-gray-800">
                    {product.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {product.description}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Qty: {product.stockQuantity}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-teal-600">
                    ${product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="flex justify-between items-center mt-4 p-4 bg-teal-100 rounded-lg">
            <div className="text-sm font-semibold text-teal-700">
              Total: $
              {cartProducts
                .reduce(
                  (total, product) =>
                    total + product.price * product.stockQuantity,
                  0
                )
                .toFixed(2)}
            </div>

            <button
              className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
              onClick={handleCheckout} // Attach the click handler
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
