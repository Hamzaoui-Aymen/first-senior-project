import React, { useState, useEffect } from 'react';
import { Link, useNavigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Products from './components/Products';
import Category from './component/category';
import Search from './componentssFayrouz/Search';
import Cart from './componentssFayrouz/Cart';
import { VscHeart } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import { CiLogout } from 'react-icons/ci';
import Contact from './componentssFayrouz/Contact';
import Button from '@mui/material/Button';
import { RiRedPacketLine, RiShoppingCart2Line } from 'react-icons/ri';
AddProduct
import './App.css';
import AddProduct from './components/AddProduct';

const App = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState('');
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [one, setOne] = useState({});

  const getAllProducts = () => {
    axios.get('http://localhost:4000/apii/getAll')
      .then((res) => {
        console.log("test:", res.data);
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

  const fetchCart = () => {
    axios.get('http://localhost:4000/api/cart/get')
      .then((response) => setCart(response.data))
      .catch((error) => console.error('Error fetching cart:', error));
  }

  useEffect(() => {
    fetchCart();
  }, [view]);

  const deleteCart = (id) => {
    axios.delete(`http://localhost:4000/api/cart/${id}`)
      .then(() => {
        console.log('Item deleted from cart');
        fetchCart();
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
       
       <li className="navbar-item"><Link to="/" prod={data} >Home</Link></li>
       <li className="navbar-item"><Link to="/Contact">Contact</Link></li>
       <li className="navbar-item"><Link to="/About">About</Link></li>
       <li className="navbar-item"><Link to="/Signup">Sign Up</Link></li>
   <div>
    <Button
             
             
             onClick={()=>{handleClickOpen()}}
             sx={{ my: 2, color: 'black', display: 'block' }}
           >         add product
           </Button>
             <AddProduct  open={open} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
             </div>  
       
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
          <span className="menu-item" onClick={() => navigate("/EditProfile")}><CgProfile /> Manage Account</span>
          <span className="menu-item" onClick={() => navigate("/Cart")}><RiRedPacketLine /> My Order</span>
          <span className="menu-item" onClick={() => navigate("/signup")}><CiLogout /> Logout</span>
        </div>
      )}
      {view === 'cart' && <Cart deleteCart={deleteCart} cart={cart} />}
     
      
      
     
      <img className='img' src='https://d2ki7eiqd260sq.cloudfront.net/JBL-Authentics-DES-1-3520dc57-cc52-4d7e-86d8-229c69b69b22.jpg'/>
      <Products prod={data} switchView={switchView} addToCart={(item) => setCart([...cart, item])} />
      
      {/* <Footer /> */}
    </div>
  );
};

export default App;
