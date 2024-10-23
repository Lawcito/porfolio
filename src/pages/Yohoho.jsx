import React from "react";
import trolling from "../assets/brookYohoho.gif";

function Yohoho() {
  return (
    <div
      style={{
        backgroundImage: `url(${trolling})`,
        backgroundSize: "50%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex h-screen w-screen justify-center"
    >
      <p className="flex mt-5 text-2xl text-[#ffff00]">YOHOHOOOOO</p>
    </div>
  );
}

export default Yohoho;
