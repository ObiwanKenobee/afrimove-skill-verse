
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-afrimove-purple to-afrimove-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold gradient-text">AfriMove</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Empowering skills development and mobility across Africa through blockchain technology.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Platform</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/dashboard" className="hover:text-afrimove-purple">Dashboard</Link></li>
              <li><Link to="/learn" className="hover:text-afrimove-purple">Learn</Link></li>
              <li><Link to="/travel" className="hover:text-afrimove-purple">Travel</Link></li>
              <li><Link to="/profile" className="hover:text-afrimove-purple">Profile</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-afrimove-purple">Documentation</a></li>
              <li><a href="#" className="hover:text-afrimove-purple">Token Economics</a></li>
              <li><a href="#" className="hover:text-afrimove-purple">FAQs</a></li>
              <li><a href="#" className="hover:text-afrimove-purple">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-afrimove-purple">Twitter</a></li>
              <li><a href="#" className="hover:text-afrimove-purple">Discord</a></li>
              <li><a href="#" className="hover:text-afrimove-purple">Telegram</a></li>
              <li><a href="#" className="hover:text-afrimove-purple">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} AfriMove. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-afrimove-purple text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-afrimove-purple text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
