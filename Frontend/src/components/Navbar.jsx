import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi'; // Imported Cart Icon
import { useAuth } from '../context/AuthContext'; // Import Auth
import { useCart } from '../context/CartContext'; // Import Cart
import eyesLogo from '../assets/eyes.webp';
import '../Navbar.css';

const navLinks = [
  { id: 'features', title: 'Features' },
  { id: 'howitworks', title: 'How it works' },
  { id: 'pricing', title: 'Pricing' },
  { id: 'faq', title: 'FAQ' },
];

const Navbar = ({ onDownloadClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  const { user, logout } = useAuth();
  const { cartItems } = useCart(); // Get cart items to show count
  const navigate = useNavigate();
  const location = useLocation();
  const isPrivacyPage = location.pathname === '/privacypolicy';

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthAction = () => {
    if (user) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className={`navbar ${isSolid ? 'solid' : 'faded'}`}>
      <div className="navbar-content-wrapper">

        {/* Logo */}
        <RouterLink to="/" className="navbar-logo">
          <img src={eyesLogo} alt="One89 Logo" className="logo-image" />
        </RouterLink>

        {/* Desktop Menu */}
        {!isPrivacyPage && (
          <div className="desktop-menu">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                className="nav-link"
                activeClass="active"
              >
                {link.title}
              </ScrollLink>
            ))}
          </div>
        )}

        {/* Right Side Actions */}
        <div className="navbar-actions flex items-center gap-4">

          {/* Cart Icon - Only show if user is logged in */}
          {user && (
            <RouterLink to="/cart" className="relative text-gray-300 hover:text-white transition mr-2">
              <FiShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </RouterLink>
          )}

          {/* User Avatar & Dashboard Link */}
          {user && (
            <RouterLink to="/dashboard" className="hidden md:block" title="Go to Dashboard">
              <img
                src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=BB86FC&color=000`}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-[#BB86FC] hover:opacity-80 transition"
              />
            </RouterLink>
          )}

          {/* Login / Logout Button */}
          <button
            className="cta-button-desktop"
            onClick={handleAuthAction}
          >
            {user ? 'Logout' : 'Login / Sign Up'}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-button md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX className="mobile-menu-icon" /> : <FiMenu className="mobile-menu-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="mobile-menu-container"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </ScrollLink>
            ))}

            {user && (
              <RouterLink
                to="/cart"
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                My Cart ({cartItems.length})
              </RouterLink>
            )}

            {user && (
              <RouterLink
                to="/dashboard"
                className="mobile-nav-link text-[#BB86FC]"
                onClick={() => setMenuOpen(false)}
              >
                My Dashboard
              </RouterLink>
            )}

            <button
              className="mobile-cta-button"
              onClick={() => {
                setMenuOpen(false);
                handleAuthAction();
              }}
            >
              {user ? 'Logout' : 'Login / Sign Up'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;