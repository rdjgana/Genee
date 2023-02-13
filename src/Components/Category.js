import React, { useState, useEffect } from "react";
import logo from "../Asserts/logo.svg";
import NotFound from "../Asserts/not-Found.svg";
import { NavLink, Link } from "react-router-dom";
import "../Styles/Home.css";
// import { CategoryData } from "./CategoryData";
// import { CardData } from "./CardData";
import { BiSearch } from "react-icons/bi";
import Footer from "./Footer";
import axios from "axios";
import { useParams } from "react-router";

const Category = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [openCat, setCatOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [size, setSize] = useState();
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    console.log(size);
  }, [size]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/user/view/getCategory`)
      .then((res) => {
        setCategory(res.data.data);
      });
  }, []);
  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_URL}/user/view/categoryProducts`, {
        categoryId: id,
      })
      .then((res) => {
        // console.log(res.data.data);
        setProduct(res.data.data);
      });
  }, [id]);

  const filtered = product.filter((val) =>
    val.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cattitleActive = "text-dark-200 font-bold py-1 w-full";
  const cattitle = "text-white font-bold py-1 ";

  return (
    <>
      <nav className="navbar lg:flex justify-between items-center lg:px-[45px] lg:py-5 py-5 px-4 w-full top-0 sticky">
        <div className="flex justify-between ">
          <div className="image px-0 py-0 bg-black  top-0 sticky flex justify-center">
            <Link to="/">
              {" "}
              <img
                src={logo}
                alt="logo"
                style={{ width: "120px", objectFit: "contain" }}
              />{" "}
            </Link>
          </div>
          <span
            className="text-3xl cursor-pointer lg:hidden block text-white mr-[-2px]"
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </span>
        </div>
        <div className="flex bg-smoke-100  rounded-md lg:py-1 py-0 lg:pl-4 pl-5 lg:w-[300px] w-full  mt-2 ">
          <form action="">
            <div className="relative flex items-center w-full text-white bg-smoke-100 ">
              <BiSearch className="w-[20px]  h-[20px] mt-1 ml-[1px] font-normal bg-smoke-100 " />
              <input
                type="text"
                placeholder="Ask Me Anything"
                className=" px-2 py-2 font-xmd  w-full h-full placeholder-white text-white font-normal bg-smoke-100 rounded-2xl bordder-none focus:outline-none"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <ul
          className={`lg:flex  lg:items-center lg:h-max  gap-2 lg:z-auto w-full lg:w-auto lg:py-0 lg:mt-0 mt-4 ${
            !open ? "hidden transition-all ease-in-out duration-300" : ""
          }`}
        >
          <li className="text-lg text-white text-worksan font-normal  leading-8">
            <Link to="/" className="navlink py-1 lg:px-1.5">
              Design
            </Link>
          </li>
          <li className=" text-lg text-white text-worksan font-normal  leading-8">
            <Link to="/" className="navlink py-1 lg:px-1.5">
              Development
            </Link>
          </li>
          <li className=" text-lg text-white text-worksan font-normal  leading-8">
            <Link to="/" className="navlink py-1 lg:px-1.5">
              3D
            </Link>
          </li>
          <hr />
        </ul>
      </nav>

      <div className="container grid h-[100vh] w-full bg-black  ">
        <div className="category  lg:w-[230px] md:w-[230px] w-0 md:h-full lg:h-full h-0 relative ">
          {/* <div className="image md:w-full w-0 md:px-2  px-0 md:py-5  py-0 bg-black top-0 sticky flex justify-center">
            <Link to="/">
              {" "}
              <img
                src={logo}
                alt="logo"
                style={{ width: "120px", objectFit: "contain" }}
              />{" "}
            </Link>
          </div> */}
          <div className=" md:flex flex-col  w-[230px] md:pl-[40px] lg:pl-[40px]  px-5 ">
            <ul className="w-max">
              {category.map((item, index) => {
                return (
                  <p>
                    <li
                      className="cat-list leading-10  font-worksan w-full text-white capitalize hover:text-dark-200 hover:border-b-2 border-light"
                      key={index}
                    >
                      <NavLink
                        to={/category/ + item.id}
                        className={({ isActive }) =>
                          isActive ? cattitleActive : cattitle
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  </p>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="content  w-full h-full overflow-hidden">
          {/* <nav className="navbar  lg:flex  justify-between items-center w-full  md:py-3 py-3 pb-4 md:px-[43px] px-4  top-0 sticky">
            <div className="flex justify-between ">
              <span
                className="text-3xl cursor-pointer lg:hidden block text-white mr-[-2px]"
                onClick={() => setOpen(!open)}
              >
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
              </span>
            </div>

            <div className="flex bg-smoke-100  rounded-md lg:py-1 py-0 lg:pl-4 pl-5 lg:w-[250px] w-full  mt-2 ">
              <form action="">
                <div className="relative flex items-center w-full text-white ">
                  <BiSearch className="w-[20px]  h-[20px] mt-1 ml-[1px] font-normal" />
                  <input
                    type="text"
                    placeholder="Ask Me Anything"
                    className=" px-2 py-2 font-xmd  w-full h-full placeholder-white text-white font-normal bg-transparent rounded-2xl bordder-none focus:outline-none"
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>

            <ul
              className={`lg:flex  lg:items-center lg:h-max z-[-1] gap-2 lg:z-auto w-full lg:w-auto lg:py-0 mt-4 ${
                !open ? "hidden transition-all ease-in-out duration-300" : ""
              }`}
            >
              <li className="text-lg text-white text-worksan font-normal  leading-8">
                <Link to="/" className="navlink py-1 lg:px-1.5">
                  Design
                </Link>
              </li>
              <li className=" text-lg text-white text-worksan font-normal  leading-8">
                <Link to="/" className="navlink py-1 lg:px-1.5">
                  Development
                </Link>
              </li>
              <li className=" text-lg text-white text-worksan font-normal  leading-8">
                <Link to="/" className="navlink py-1 lg:px-1.5">
                  3D
                </Link>
              </li>
              <hr />
            </ul>
          </nav> */}

          {size <= 480 ? (
            <div className="mobile-category mt-1 left-0 px-4">
              <div className="flex justify-between items-center">
                <span className="font-normal text-2xl text-white  mb-3">
                  Category
                </span>

                <span
                  className="text-2xl cursor-pointer md:hidden block text-white "
                  onClick={() => setCatOpen(!openCat)}
                >
                  <ion-icon
                    name={openCat ? "caret-down-outline" : "caret-up-outline"}
                  ></ion-icon>
                </span>
                {/* <span className="text-3xl cursor-pointer text-white"><ion-icon name="caret-up-outline" style=""></ion-icon></span>  */}
              </div>

              <ul className={`w-max ${openCat ? "duration-200 " : "hidden"} `}>
                {category.map((item, index) => {
                  return (
                    
                      <li
                        className="cat-list leading-10  font-worksan  text-white capitalize"
                        key={index}
                      >
                        <NavLink
                        to={/category/ + item.id}
                        className={({ isActive }) =>
                          isActive ? cattitleActive : cattitle
                        }
                      >
                        {item.name}
                      </NavLink>
                      </li>
                    
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )}

          <div className="flex flex-wrap gap-x-10  gap-y-[.5px] justify-center py-6 ">
            {filtered.length > 0 ? (
              product
                .filter((val) =>
                  val.productName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    className="flex flex-col w-[209px] mt-3 overflow-visible "
                    key={index}
                  >
                    <img
                      className="w-[209px] h-[209px] bg-white rounded-lg transition-all ease-in hover:translate-y-[-1.5%] hover:translate-x-0 duration-50 cursor-pointer"
                      src={process.env.REACT_APP_URL + item.productImage}
                      alt="Sunset in the mountains"
                    />
                    <div className="py-4">
                      <span className="card-title font-worksan text-xmd font-extrabold text-white  capitalize mb-2 cursor-pointer">
                        {item.productName}
                      </span>
                      <p className="text-smoke-400 text-sm font-worksan tracking-wide">
                        {item.productDescription}
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
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Category;
