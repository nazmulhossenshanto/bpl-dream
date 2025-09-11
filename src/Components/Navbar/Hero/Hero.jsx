import React from "react";
import bgShadow from "../../../assets/bg-shadow.png";
import bannerMain from "../../../assets/banner-main.png"
const Hero = ({handleCoin}) => {
  return (
    <div className=" max-w-7xl mx-auto p-4">
      <div
        className="hero bg-[rgba(19,19,19,1)] py-18 "
        style={{
          backgroundImage: `url(${bgShadow})`,
          backgroundRepeat: "no-repeat"
        }}
      >
        <div ></div>
        <div className="hero-content   text-center">
          <div >
            <div className="flex justify-center mt-16">
              <img src={bannerMain} alt="" />
            </div>
            <h1 className="mb-5 text-2xl text-white font-bold mt-6">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 text-gray-400">Beyond Boundaries Beyond Limits</p>
            <button onClick={() => handleCoin(20000)} className="btn font-bold rounded-xl bg-[#E7FE29] shadow-[inset_4px_4px_20px_rgba(19,19,19,0.3)] py-3 px-5">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
