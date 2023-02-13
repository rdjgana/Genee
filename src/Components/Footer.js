import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="flex py-4  justify-center bg-black"
        style={{
          borderTop: "1px solid #7773",
          // borderImage: "linear-gradient(90deg, #DC4B9C,#4B6EB5)",
          // borderImageSlice: "1",
        }}
      >
        <p className="text-smoke-500 text-xsm font-worksan">
          All screenshots &copy; of their respective owners.
        </p>
      </div>
    </>
  );
};

export default Footer;
