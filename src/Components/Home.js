import React, { useState } from "react";
import logo from "../Asserts/logo.svg";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import { CategoryData } from "./CategoryData";
import { CardData } from "./CardData";
import { BiSearch } from "react-icons/bi";
import Footer from "./Footer";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [navbar, setNavbar] = useState(false);

  const navbarColorChange = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navbarColorChange);

  return (
    <>
      <div className="home-container bg-black">
        <div className="category">
          <div className="flex items-center fixed ">
            {/* <img src={logo} alt='logo' style={{height:'100px',objectFit:'contain'}}/> */}
          </div>
          <div className=" md:flex md:mt-[95px] mt-8 md:pl-[52px] pl-4 md:pr-[26px]">
            <ul>
              {CategoryData.map((item, index) => {
                return (
                  <h3>
                    <li
                      className="cat-list leading-10 font-worksan text-white capitalize"
                      key={index}
                    >
                      <Link to="" className=" cat-title py-1  ">
                        {item.list}
                      </Link>
                    </li>
                  </h3>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="content h-[100vh] overflow-hidden ">
          <nav
            className={`navbar 
             md:flex justify-between bg-transparent md:items-center md:py-4 md:pl-9 pr-6 px-3 top-0 sticky`}
          >
            <div className="flex justify-between">
              <span className="text-md text-white">
                <p className="text-smoke-400 text-sm">Ask me Anything</p>
              </span>
              <span
                className="text-3xl cursor-pointer md:hidden block text-white"
                onClick={() => setOpen(!open)}
              >
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
              </span>
            </div>

            <div className="flex bg-smoke-100 rounded-2xl py-1 pl-4 w-[180px] ">
              <form action="">
                <div className="relative flex items-center w-full text-white">
                  <BiSearch className="w-[20px]  h-[20px] mt-1 ml-[1px] font-normal" />
                  <input
                    type="text"
                    placeholder="Search"
                    className=" px-2 py-2 font-xmd  w-full h-full placeholder-white text-white font-normal bg-transparent rounded-2xl bordder-none focus:outline-none"
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>

            <ul
              className={`md:flex md:items-center z-[-1] md:z-auto md:static w-full  left-0 md:w-auto md:py-0  ${
                open ? "" : "md:opacity-100 opacity-0"
              }
              `}
            >
              <li className="p-2 text-xl text-white text-worksan font-normal">
                <Link to="/">Design</Link>
              </li>
              <li className="p-2 text-xl text-white text-worksan font-normal">
                <Link to="/">Development</Link>
              </li>
              <li className="p-2 text-xl text-white text-worksan font-normal">
                <Link to="/">3D</Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-wrap gap-x-10  gap-y-[.5px] justify-center py-6 ">
            {CardData.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((item, index) => {
              return (
                <div
                  className="flex flex-col w-[209px] mt-3 overflow-visible"
                  key={index}
                >
                  <img
                    className="w-[209px] h-[209px] rounded-lg transition-all ease-in hover:translate-y-[-1.2%] hover:translate-x-0 duration-100 cursor-pointer"
                    src={item.image}
                    alt="Sunset in the mountains"
                  />
                  <div className="py-4">
                    <span className="card-title font-worksan text-xmd font-extrabold text-white  capitalize mb-2 cursor-pointer">
                      {item.title}
                    </span>
                    <p className="text-smoke-400 text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
