import React from "react";
import { CardData } from "./CardData";
const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-[.5px] justify-center px-[42px] py-6 ">
        {CardData.map((item, index) => {
          return (
            <div
              className="flex flex-col w-[209px] mt-3 overflow-visible"
              key={index}
            >
              <img
                className="w-[209px] h-[209px] rounded-lg transition-all ease-in hover:translate-y-[-1.2%] hover:translate-x-0 duration-100"
                src={item.image}
                alt="Sunset in the mountains"
              />
              <div className="py-4">
                <div className="font-black text-xmd text-base text-white font-worksan capitalize mb-2">
                  {item.title}
                </div>
                <p className="text-smoke-400 text-xs ">{item.description}d</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
