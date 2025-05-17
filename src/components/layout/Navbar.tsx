
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConnectWallet from '../wallet/ConnectWallet';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-afrimove-purple to-afrimove-blue flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-2xl font-bold gradient-text">AfriMove</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <Link to="/" className="text-gray-700 hover:text-afrimove-purple font-medium">Home</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-afrimove-purple font-medium">Dashboard</Link>
              <Link to="/learn" className="text-gray-700 hover:text-afrimove-purple font-medium">Learn</Link>
              <Link to="/travel" className="text-gray-700 hover:text-afrimove-purple font-medium">Travel</Link>
            </div>
            <ConnectWallet />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-gray-700 hover:text-afrimove-purple font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-afrimove-purple font-medium"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/learn" 
                className="text-gray-700 hover:text-afrimove-purple font-medium"
                onClick={() => setIsOpen(false)}
              >
                Learn
              </Link>
              <Link 
                to="/travel" 
                className="text-gray-700 hover:text-afrimove-purple font-medium"
                onClick={() => setIsOpen(false)}
              >
                Travel
              </Link>
              <div className="pt-2">
                <ConnectWallet />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
