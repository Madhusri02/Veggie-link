import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupImage from '../assets/SignupImage.webp';

const Login = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center text-white"
            style={{
                backgroundImage: `url(${SignupImage})`,
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Login Form */}
            <div className="relative z-10 bg-gray-800 bg-opacity-45 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full px-3 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <Link to="/home">Login</Link>
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/" className="text-green-400 hover:underline">
                        Sign up here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
