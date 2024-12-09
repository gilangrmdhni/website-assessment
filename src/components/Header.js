import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../redux/userSlice';

function Header() {
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Reset user state dan redirect ke halaman login
    dispatch(clearUser());
    navigate('/');
  };

  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
      <nav>
        
      </nav>
      <div>
        <span className="mr-4">Hello, {userName}</span>
        <button onClick={handleLogout} className="bg-red-500 p-2 rounded">Logout</button>
      </div>
    </header>
  );
}

export default Header;
