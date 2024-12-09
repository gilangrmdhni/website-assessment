// components/Sidebar.js
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="h-full">
      <div className="p-4 text-2xl font-bold">KLEDO TEST ADMIN</div>
      <ul className="mt-6">
        <li className="mb-2">
          <Link to="/dashboard" className="block p-4 hover:bg-gray-700">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/shipping-comps" className="block p-4 hover:bg-gray-700">Shipping Comps</Link>
        </li>
        {/* Tambahkan lebih banyak item menu sesuai kebutuhan */}
      </ul>
    </div>
  );
}

export default Sidebar;
