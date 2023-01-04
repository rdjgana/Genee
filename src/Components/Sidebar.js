import React from "react";
import { CategoryData } from "./CategoryData";
import "../Styles/Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="category w-max bg-black">
        <div className="md:flex md:mt-[82px] mt-8 md:pl-[52px] pl-4 md:pr-[10px] pr-1 ">
          <h2 className="text-white">hello</h2>
          <ul>
            {CategoryData.map((item, index) => {
              return (
                <li
                  className="leading-10 font-worksan text-base text-white capitalize"
                  key={index}
                >
                  {item.list}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
