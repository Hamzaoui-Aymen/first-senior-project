import React,{useEffect,useState} from 'react';
import Products from '../components/Products';
// import { SiPcgamingwiki } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";
import { GiPhotoCamera } from "react-icons/gi";
import { CgAppleWatch } from "react-icons/cg";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import "./style/category.css";
import { ajax } from "jquery";

const Category = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("smartphone");

  const fetchOne = () =>
    ajax({
      url: `http://localhost:4000/apii/getAll`,
      success: (result) => {
        console.log("fetchOne", result);
        setData(result);
        setFilteredData(result);
      },
      error: (err) => {
        console.log("err", err);
      },
    });

  useEffect(() => {
    fetchOne();
  }, []);
  const handleImageClick = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };
  console.log('hello');
  return (
    <section className="categories">
      <h2 className='graph'>Browse By Category </h2>
      {/* <button className='left'>&#129120;</button> */}
      {/* <button className='right'>&#129122;</button> */}
      <div className="category-list">
        <span className="category-item" onClick={() => handleImageClick("phones")}>
          <MdOutlinePhoneIphone /> Phones{""}
        </span>
        <span className="category-item" onClick={() => handleImageClick("computers")}>
          <FaComputer /> Computers {""}
        </span>
        <span className="category-item" onClick={() => handleImageClick('smartwatch')}>
          <CgAppleWatch /> SmartWatch{""}
        </span>
        <span className="category-item" onClick={() =>handleImageClick("camera")}>
          <GiPhotoCamera /> Camera{""}
        </span>
        <span className="category-item" onClick={() => handleImageClick('headphones')}>
          <SlEarphonesAlt /> Headphones {''}
        </span>
        <span className="category-item" onClick={() => handleImageClick('gaming')}>
          <SiYoutubegaming /> gaming{''}
        </span>
      </div>
      {filteredData
        .filter((el) => el.category === selectedCategory)
        .map((item, index) => (
          <div className="" key={index}>
            <Products
              item={item}
             
            />
          </div>
        ))}
    </section>
  );
};

export default Category;