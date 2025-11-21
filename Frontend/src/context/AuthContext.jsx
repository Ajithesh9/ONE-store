import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // 1. Initialize loading to true so the app waits before redirecting
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Check if user is already logged in (on page refresh)
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        setUser(userInfo);

        // 2. We have checked storage, so we are done loading
        setLoading(false);
    }, [navigate]);

    // Login Function
    const login = async (email, password) => {
        try {
            const res = await fetch('/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            localStorage.setItem('userInfo', JSON.stringify(data));
            setUser(data);
            navigate(data.isAdmin ? '/admin' : '/dashboard'); // Redirect logic
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    // Register Function
    const register = async (name, email, password) => {
        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.message);

            localStorage.setItem('userInfo', JSON.stringify(data));
            setUser(data);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            alert(error.message);
        }
    };

    // Logout Function
    const logout = () => {
        localStorage.removeItem('userInfo');
        setUser(null);
        navigate('/');
    };

    return (
        // 3. Pass 'loading' to the provider so pages can use it
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);