import React from 'react';
import { FaComputer } from "react-icons/fa6";
import { SiPcgamingwiki } from "react-icons/si";
import { SlEarphonesAlt } from "react-icons/sl";
import { GiPhotoCamera } from "react-icons/gi";
import { CgAppleWatch } from "react-icons/cg";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import "./style/category.css";

const Category = () => {
  const navigate = useNavigate();
  console.log('hello');
  return (
    <section className="categories">
      <h2 className='graph'>Browse By Category </h2>
      <button className='left'>&#129120;</button><button className='right'>&#129122;</button>
      <div className="category-list">
        <span className="category-item" onClick={() => navigate("/phones")}>
          <MdOutlinePhoneIphone /> Phones
        </span>
        <span className="category-item" onClick={() => navigate("/computers")}>
          <FaComputer /> Computers
        </span>
        <span className="category-item" onClick={() => navigate("/smartwatch")}>
          <CgAppleWatch /> SmartWatch
        </span>
        <span className="category-item" onClick={() => navigate("/camera")}>
          <GiPhotoCamera /> Camera
        </span>
        <span className="category-item" onClick={() => navigate("/headphones")}>
          <SlEarphonesAlt /> Headphones
        </span>
        <span className="category-item" onClick={() => navigate("/gaming")}>
          <SiYoutubegaming /> Gaming
        </span>
      </div>
    </section>
  );
};

export default Category;
