import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './component/category';
import Camera from './component/Camera';
import Computers from './component/Computers';
import Gaming from './component/Gaming';
import Headphones from './component/Headphones';
import Phones from './component/Phones';
import Smartwatch from './component/SmartWatch';
import SignIn from './componenet/SignIn';
import SignUp from './componenet/SignUp';
// import Contact from '../src/Contact';
import About from '../src/About';
import Cart from '../src/Cart';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Footer from './Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/smartwatch" element={<Smartwatch />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);



// <Router>
// <div>
//   <Routes>
//     <Route
//       path="/"
//       element={
//         <Products
//           data={data}
//         />
//       }
//     />
//     <Route path="/oneProduct/:id" element={<SingleProduct />} />
//   </Routes>
// </div>
// </Router>
