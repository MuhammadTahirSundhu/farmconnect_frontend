'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function FarmerLogin() {
  const [formData, setFormData] = useState({ username: "", password: "" })
  const router = useRouter()

  const handleInputChange = (e) => {  // Removed TypeScript type annotation
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("Login Data:", formData)
    router.push("/farmerdashboard")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 via-emerald-100 to-emerald-300">
      <div className="relative w-full max-w-md p-8 mx-4">
        <div className="absolute inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-xl shadow-2xl border border-amber-300"></div>
        <form onSubmit={handleLogin} className="relative space-y-8 z-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-amber-900 mt-4">Farmer Login</h2>
            <p className="mt-2 text-sm text-amber-700">
              Welcome back to your <span className="font-semibold">digital farm!</span>
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-amber-900">
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full pl-4 pr-4 py-2 bg-white border border-amber-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-amber-900 placeholder-amber-400 shadow-sm"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-amber-900">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-4 pr-4 py-2 bg-white border border-amber-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-amber-900 placeholder-amber-400 shadow-sm"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
          >
            Log in to Your Farm
          </button>
          <div className="text-center">
            <a href="#" className="text-sm text-amber-700 hover:text-emerald-600 hover:underline">
              Forgot your harvest password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
