// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ShippingComps from './pages/ShippingComps';
import Layout from './components/Layout'; // Layout yang berisi header
import PrivateRoute from './components/PrivateRoute'; // Untuk routing privat
import './App.css'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shipping-comps" element={<ShippingComps />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

