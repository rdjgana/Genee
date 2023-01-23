import React, { useState } from "react";
import logo from "../Asserts/logo.svg";
import NotFound from "../Asserts/not-Found.svg";
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

  const filtered = CardData.filter((val) =>
    val.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  window.addEventListener("scroll", navbarColorChange);

  return (
    <>
      <div className="container h-[100vh] w-full bg-black">
        <div className="category  w-max h-full relative">
          <div className="image w-full px-2 py-5 bg-black top-0 sticky flex justify-center">
            <img
              src={logo}
              alt="logo"
              style={{ width: "120px", objectFit: "contain" }}
            />
          </div>
          <div className=" md:flex flex-col  w-[223px]  md:pl-[45px] pl-4 ">
            <ul className="w-max">
              {CategoryData.map((item, index) => {
                return (
                  <p>
                    <li
                      className="cat-list leading-10  font-worksan  text-white capitalize"
                      key={index}
                    >
                      <Link to="" className="cat-title py-1">
                        {item.list}
                      </Link>
                    </li>
                  </p>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="content w-full h-full overflow-hidden">
          <nav
            className={`navbar 
             md:flex justify-between h-max bg-transparent md:items-center md:py-4 md:pl-9 pr-6 px-3 top-0 sticky`}
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
              className={`md:flex md:items-center z-[-1] gap-2 md:z-auto md:static w-full  left-0 md:w-auto md:py-0  ${
                open ? "" : "md:opacity-100 opacity-0"
              }
              `}
            >
              <li className="px-3 text-lg text-white text-worksan font-normal">
                <Link to="/" className="navlink py-1 px-1.5">
                  Design
                </Link>
              </li>
              <li className=" p-2 text-lg text-white text-worksan font-normal">
                <Link to="/" className="navlink py-1 px-1.5">
                  Development
                </Link>
              </li>
              <li className="p-2 text-lg text-white text-worksan font-normal">
                <Link to="/" className="navlink py-1 px-1.5">
                  3D
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-wrap gap-x-10  gap-y-[.5px] justify-center py-6 ">
            {filtered.length > 0 ? (
              CardData.filter((val) =>
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ).map((item, index) => (
                <div
                  className="flex flex-col w-[209px] mt-3 overflow-visible "
                  key={index}
                >
                  <img
                    className="w-[209px] h-[209px] bg-white rounded-lg transition-all ease-in hover:translate-y-[-1.5%] hover:translate-x-0 duration-50 cursor-pointer"
                    src={item.image}
                    alt="Sunset in the mountains"
                  />
                  <div className="py-4">
                    <span className="card-title font-worksan text-xmd font-extrabold text-white  capitalize mb-2 cursor-pointer">
                      {item.title}
                    </span>
                    <p className="text-smoke-400 text-sm font-worksan tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full flex justify-center">
                <div className="w-[600px] h-[400px]">
                  <img src={NotFound} alt="notFoundImage" />
                </div>
              </div>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
