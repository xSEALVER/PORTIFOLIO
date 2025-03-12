import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <ul className="flex justify-between items-center px-8 py-4">
        {/* Left-aligned logo or brand name */}
        <li className="text-gray-800 text-lg">
          <Link to="/" className=" text-3xl">Miezan</Link>
        </li>
        
        {/* Right-aligned navigation links */}
        <div className="flex space-x-6">
          
          <li>
            <Link to="/sio" className="text-gray-800 hover:text-blue-600 transition">BTS SIO</Link>
          </li>
          <li>
            <Link to="/signin" className="text-gray-800 hover:text-blue-600 transition">Ecole & Entreprise</Link>
          </li>
          <li>
            <Link to="/signin" className="text-gray-800 hover:text-blue-600 transition">Réalisations</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition">À Propos</Link>
          </li>
          <li>
            <Link to="/signin" className="text-gray-800 hover:text-blue-600 transition">Projets</Link>
          </li>
          <li>
            <Link to="/signin" className="text-gray-800 hover:text-blue-600 transition">Veille technologique</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition">Contact</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;

