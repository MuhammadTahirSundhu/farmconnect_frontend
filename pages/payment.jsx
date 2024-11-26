import React, { useState } from "react";
import { FaCreditCard, FaCalendarAlt, FaKey } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { insertPayment } from "@/Services/paymentServiceApi";
import { createOrder } from "@/Services/orderServiceApi";
import { setCurrentOrder, setCurrentPayment } from "@/features/slice"; // Assuming this is your action to store order data
import { useRouter } from "next/router";
import { createOrderProduct } from "@/Services/orderProductControllerApi";
import GetFeedback from "@/components/GetFeedback";
import Footer from "@/components/Footer";

function Payment() {
  const router = useRouter();
  const orderAmount = useSelector((state) => state.currentRecords.orderAmount); // Redux state
  const currentConsumer = useSelector(
    (state) => state.currentRecords.currentConsumer
  );
  const orderedProducts = useSelector(
    (state) => state.currentRecords.orderedProducts
  );
  console.log(orderedProducts);

  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    fullName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const AddProductsToOrder = async (orderID) => {
    try {
      // Check if orderedProducts from Redux is valid
      if (
        !orderedProducts ||
        !Array.isArray(orderedProducts) ||
        orderedProducts.length === 0
      ) {
        throw new Error("Ordered products list is empty or invalid");
      }

      // Iterate over the products and create an order for each
      for (const productId of orderedProducts) {
        console.log(productId);

        const payload = {
          orderID: orderID,
          productID: productId, // Adjust field name if needed
          quantity: 1, // Adjust as necessary
        };

        const response = await createOrderProduct(payload); // API call for each product
        console.log("Product added to order:", response);
      }
    } catch (error) {
      console.error("Error adding products to order:", error.message);
      throw new Error("Unable to add products to the order.");
    }
  };

  const placeOrder = async (orderAmount) => {
    const payload = {
      status: "Pending",
      consumerID: currentConsumer.consumerID,
      totalPrice: orderAmount,
    };

    try {
      console.log(payload);

      const response = await createOrder(payload);
      dispatch(setCurrentOrder(response)); // Store order in Redux
      return response.orderID;
    } catch (error) {
      console.error("Error placing order:", error);
      throw new Error("Unable to place the order. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const orderId = await placeOrder(orderAmount); // Call placeOrder to create order
      await AddProductsToOrder(orderId); // Call AddProductsToOrder to add products to order
      const paymentPayload = {
        orderID: orderId,
        amount: orderAmount + 19.0, // Including tax
        method: paymentMethod === "card" ? "Credit Card" : "Cash on Delivery",
        status: "Completed",
      };

      const paymentResponse = await insertPayment(paymentPayload);
      dispatch(setCurrentPayment(paymentResponse));
      console.log("Payment processed successfully:", paymentResponse);
      router.push("/orderConfirmation");
    } catch (error) {
      console.error("Error during payment processing:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-green-600 to-green-800 py-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg bg-white dark:bg-gray-900 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Section */}
            <div className="p-6 lg:p-8 bg-gray-50 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Choose Payment Method
              </h2>

              <div className="flex space-x-4 mb-6">
                <button
                  onClick={() => handlePaymentMethodChange("card")}
                  className={`py-2 px-4 rounded-lg text-sm font-medium ${
                    paymentMethod === "card"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                  }`}
                >
                  Pay by Card
                </button>
                <button
                  onClick={() => handlePaymentMethodChange("delivery")}
                  className={`py-2 px-4 rounded-lg text-sm font-medium ${
                    paymentMethod === "delivery"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                  }`}
                >
                  Pay on Delivery
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {paymentMethod === "card" && (
                  <>
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Full Name*
                      </label>
                      <div className="relative">
                        <FaCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="cardNumber"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Card Number*
                      </label>
                      <div className="relative">
                        <FaCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                          placeholder="1234-5678-1234-5678"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="expirationDate"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Expiration Date*
                        </label>
                        <div className="relative">
                          <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            id="expirationDate"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="cvv"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          CVV*
                        </label>
                        <div className="relative">
                          <FaKey className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            className="pl-10 w-full rounded-md border border-gray-300 p-2.5 text-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                            placeholder="•••"
                            pattern="^[0-9]{3,4}$"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md text-sm font-medium transition dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  {paymentMethod === "card" ? "Pay Now" : "Place Order"}
                </button>
              </form>
            </div>

            {/* Right Section */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Original Price</span>
                  <span>{orderAmount}</span>
                </li>
                <li className="flex justify-between">
                  <span>Tax</span>
                  <span>$19.00</span>
                </li>
                <li className="border-t border-indigo-300 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>{orderAmount + 19.0}</span>
                </li>
              </ul>
              <p className="mt-6 text-sm">
                By completing this payment, you agree to our{" "}
                <a href="#" className="underline">
                  Terms and Conditions
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default Payment;
