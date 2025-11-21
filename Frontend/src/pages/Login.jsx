import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const { login, register } = useAuth();
    const navigate = useNavigate(); // Hook to redirect after login

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLogin) {
            await login(email, password);
        } else {
            await register(name, email, password);
        }
        // The redirection happens in AuthContext or we can do it here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0C0E12] text-white font-sans">
            <div className="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-800">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#BB86FC]">
                    {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-400">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded bg-[#2C2C2C] border border-gray-700 text-white focus:outline-none focus:border-[#BB86FC]"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-400">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full p-3 rounded bg-[#2C2C2C] border border-gray-700 text-white focus:outline-none focus:border-[#BB86FC]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-400">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full p-3 rounded bg-[#2C2C2C] border border-gray-700 text-white focus:outline-none focus:border-[#BB86FC]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#BB86FC] hover:bg-[#9e6be0] text-black font-bold py-3 rounded transition duration-200"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-400">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-[#03DAC6] hover:underline"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </div>

                <div className="mt-4 text-center">
                    <Link to="/" className="text-gray-500 hover:text-white text-xs">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;