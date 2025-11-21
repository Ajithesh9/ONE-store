import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // Protect Route: Redirect to login if not authenticated
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) return null; // Prevent flash of content

    return (
        <div className="min-h-screen bg-[#0C0E12] pt-28 px-6 md:px-12 text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-6 mb-8">
                    <div className="flex items-center gap-4">
                        <img
                            src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=BB86FC&color=000`}
                            alt="Profile"
                            className="w-20 h-20 rounded-full border-4 border-[#1E1E1E] shadow-lg"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
                            <p className="text-gray-400">{user.email}</p>
                            <span className="inline-block mt-2 px-3 py-1 bg-[#1E1E1E] text-[#03DAC6] text-xs rounded-full border border-[#03DAC6]/20">
                                {user.isAdmin ? 'Admin User' : 'Standard User'}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={logout}
                        className="mt-4 md:mt-0 px-6 py-2 border border-red-500/50 text-red-400 rounded hover:bg-red-500/10 transition"
                    >
                        Logout
                    </button>
                </div>

                {/* Stats Grid (Placeholder for Orders) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-[#1E1E1E] p-6 rounded-xl border border-gray-800">
                        <h3 className="text-gray-400 text-sm mb-2">Total Orders</h3>
                        <p className="text-3xl font-bold text-white">0</p>
                    </div>
                    <div className="bg-[#1E1E1E] p-6 rounded-xl border border-gray-800">
                        <h3 className="text-gray-400 text-sm mb-2">Member Since</h3>
                        <p className="text-xl font-medium text-white">
                            {new Date(user.createdAt || Date.now()).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="bg-[#1E1E1E] p-6 rounded-xl border border-gray-800">
                        <h3 className="text-gray-400 text-sm mb-2">Account Status</h3>
                        <p className="text-xl font-medium text-[#03DAC6]">Active</p>
                    </div>
                </div>

                {/* Order History Section */}
                <div className="bg-[#1E1E1E] rounded-xl border border-gray-800 overflow-hidden">
                    <div className="p-6 border-b border-gray-800">
                        <h2 className="text-xl font-semibold">Order History</h2>
                    </div>

                    <div className="p-8 text-center text-gray-500">
                        <p className="mb-4">You haven't placed any orders yet.</p>
                        <button
                            onClick={() => navigate('/#pricing')}
                            className="px-6 py-3 bg-[#BB86FC] text-black font-bold rounded hover:bg-[#9e6be0] transition"
                        >
                            Browse Products
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Dashboard;