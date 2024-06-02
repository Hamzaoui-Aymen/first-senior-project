import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './componentssFayrouz/Search';
import axios from 'axios';
import Cart from './componentssFayrouz/Cart';
import Footer from './componentssFayrouz/Footer';
import './App.css';
import { VscHeart } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import { RiRedPacketLine, RiShoppingCart2Line } from 'react-icons/ri';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';


const App = () => {
  const navigate=useNavigate()
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('');
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [one, setOne] = useState({});

  const getAllProducts = () => {
    axios.get('http://localhost:4000/apii/getAll')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const toggleMenu = () => {
    setMenuView(!menuView);
  };

  const switchView = (option, one) => {
    setView(option);
    setOne(one);
  };

  const fetchData = () => {
    axios.get('http://localhost:4000/api/product/get')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const fetchCart = () => {
    axios.get('http://localhost:4000/api/cart/get')
      .then((response) => setCart(response.data))
      .catch((error) => console.error('Error fetching cart:', error));
  };

  useEffect(() => {
    fetchData();
    fetchCart();
  }, [view]);

  const deleteCart = (id) => {
    axios.delete(`http://localhost:4000/api/cart/${id}`)
      .then(() => {
        console.log('Item deleted from cart');
        fetchCart(); // Refresh the cart data
      })
      .catch((error) => console.error('Error deleting item from cart:', error));
  };

  const filterEdit = (key) => {
    const filteredData = data.filter((item) => item.edit === key);
    setData(filteredData);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item"><Link to="/Contact">Contact</Link></li>
          <li className="navbar-item"><Link to="/About">About</Link></li>
          <li className="navbar-item"><Link to="/Signup">Sign Up</Link></li>
        </ul>
        <div className="navbar-search">
          <Search data={data} setData={setData} />
        </div>
        <div className="navbar-icons">
          <VscHeart className="icon" />
          <div className="cart-icon">
            <Link to="/cart"><RiShoppingCart2Line /></Link>
            <span className="cart-count">{cart.length}</span>
          </div>
          <CgProfile className="icon" onClick={toggleMenu} />
        </div>
      </nav>

      {menuView && (
        <div className="menu">
          <span className="menu-item" onClick={() =>navigate("/EditProfile") }><CgProfile /> Manage Account</span>
          <span className="menu-item" onClick={() =>navigate("/Cart") }><RiRedPacketLine /> My Order</span>
          <span className="menu-item" onClick={() =>navigate("/signup") }><CiLogout /> Logout</span>
        </div>
      )}
      {view === 'cart' && <Cart deleteCart={deleteCart} cart={cart} />}
    </div>
  );
};

export default App;



