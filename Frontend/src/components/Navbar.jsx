import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

const Navbar = () => {
  const { user, logout } = useAuth();

  
  if (!user) return null;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand/Logo Area */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-xl font-bold text-indigo-600 tracking-tight">
              User Management
            </Link>
            <div className="hidden md:flex items-center px-3 py-1 bg-gray-100 rounded-full">
              <span className="text-xs font-medium text-gray-600">
                {user.fullName} 
                <span className="ml-1 text-indigo-500 uppercase tracking-widest text-[10px]">
                  ({user.role})
                </span>
              </span>
            </div>
          </div>

          {/* Navigation Links & Logout */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/profile" 
              className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Profile
            </Link>

            {user.role === "admin" && (
              <Link 
                to="/admin" 
                className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Admin Panel
              </Link>
            )}

            <div className="h-6 w-px bg-gray-200 mx-2"></div>

            <button
              onClick={logout}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;