import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SignupImage from '../assets/SignupImage.webp';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phone: '',
        password: '',
        confirmPassword: '',
        userType: 'farmer',
    });

    const navigate = useNavigate();

    const { name, location, phone, password, confirmPassword, userType } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            navigate('/home'); // Ensure '/home' matches your route setup
        } catch (err) {
            console.error(err);
        }
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

            {/* Signup Form */}
            <div className="relative z-10 bg-gray-800 bg-opacity-45 p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={location}
                            onChange={handleChange}
                            placeholder="Enter your location"
                            className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder="Create a strong password"
                            className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
                            Retype Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleChange}
                            placeholder="Retype your password"
                            className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="userType">
                            User Type
                        </label>
                        <select
                            name="userType"
                            value={userType}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="farmer">Farmer</option>
                            <option value="customer">Customer</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Signup Now
                    </button>
                    <p className="mt-4 text-center text-gray-400">
                        Already have an account?{' '}
                        <Link to="/login" className="text-green-400 hover:underline">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
