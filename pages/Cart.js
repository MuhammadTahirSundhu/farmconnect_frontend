import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ProductList from '@/components/ProductList'

export default function CartPage() {
  const [cartItems, setCartItems] = useState([])

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart)
        } else {
          setCartItems([]) // Fallback if the cart data is not an array
        }
      } catch (error) {
        console.error('Error parsing cart from localStorage', error)
        setCartItems([]) // Fallback to an empty cart if there's a JSON parsing error
      }
    }
  }, [])

  // Save cart to localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  // Update quantity of an item
  const updateQuantity = (index, newQuantity) => {
    setCartItems(items =>
      items.map((item, i) =>
        i === index ? { ...item, quantity: Math.max(0, newQuantity) } : item
      )
    )
  }

  // Remove item from cart
  const removeItem = (index) => {
    setCartItems(items => items.filter((_, i) => i !== index))
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Your Shopping Cart</h2>
        </div>
        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600 font-medium text-md">Your cart is empty</p>
          ) : (
            <ul className="divide-y">
              {cartItems.map((item, index) => (
                <li key={index} className="py-4 flex items-center space-x-4">
                  <div className="overflow-hidden rounded-lg w-24 h-24">
                    <Image
                      src={'/${item.name.toLowerCase()}.jpg'} 
                      alt={item.name} 
                      width={96} 
                      height={96} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 font-medium text-md">{item.type}</p>
                    <p className="text-green-700 font-semibold text-lg">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      className="bg-blue-600 text-white hover:bg-blue-700 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className="bg-blue-600 text-white hover:bg-blue-700 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="bg-red-600 text-white hover:bg-red-700 px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-4 border-t flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            Subtotal: ${subtotal.toFixed(2)}
          </div>
          <button
            disabled={cartItems.length === 0}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      <ProductList
        onAddToCart={(product) => setCartItems((prevItems) => {
          if (!Array.isArray(prevItems)) {
            return []; // Ensure prevItems is always an array
          }
          const existingItem = prevItems.find(item => item.id === product.id);
          if (existingItem) {
            return prevItems.map(item => 
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevItems, { ...product, quantity: 1 }];
          }
        })}
      />
    </div>
  )
}