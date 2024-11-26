import React, { useState } from "react";
import { getCartProductsById } from "@/Services/cartProductServiceApi"; // Ensure to import the function
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setOrderAmount } from "@/features/slice";
function Cart() {
  const [cartProducts, setCartProducts] = useState([]); // State to store cart products
  const [loading, setLoading] = useState(false); // State to track loading state
  const [error, setError] = useState(null); // State to handle errors
  const [isVisible, setIsVisible] = useState(false); // State to toggle visibility of the cart
  const currentCart = useSelector((state) => state.currentRecords.currentCart); // Correct selector path
  const router = useRouter(); // Initialize useRouter
  const dispatch = useDispatch(); // Initialize useDispatch

  // Function to fetch cart products
  const fetchCartProducts = async () => {
    try {
      setLoading(true); // Start loading
      const products = await getCartProductsById(currentCart.cartID);
      setCartProducts(products); // Update cart products
      setError(null); // Reset error
    } catch (err) {
      setError("Failed to fetch cart products");
    } finally {
      setLoading(false); // End loading
    }
  };

  // Toggle visibility of the cart widget
  const toggleCartVisibility = async () => {
    if (!isVisible) {
      // Fetch products only when the cart is being opened
      await fetchCartProducts();
    }
    setIsVisible(!isVisible); // Toggle visibility
  };

  const handleCheckout = () => {
    const totalAmount = cartProducts.reduce(
      (total, product) => total + product.price * product.stockQuantity,
      0
    );

    dispatch(setOrderAmount(totalAmount));
    router.push("/payment"); // Redirect to the payment page
  };

  if (loading) {
    return (
      <div className="text-center text-xl text-gray-500">
        Loading your cart...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

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
            <span className="text-xl font-semibold">Your Cart</span>
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
                    src={`/${product.name}.jpg`}
                    alt={product.name}
                    width={50}
                    height={50}
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
              onClick={handleCheckout}
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
