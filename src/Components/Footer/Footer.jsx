import React from "react";
import footerImg from "../../assets/logo-footer.png"

const Footer = () => {
  return (
    <div className="bg-black ">
      <footer className="max-w-7xl mx-auto p-4 relative mt-20">
        {/* image div */}
        <div className="flex justify-center items-center mt-40">
            <img src={footerImg} alt="" />
        </div>
        {/*  */}
        <div className="text-gray-400 flex justify-between items-center mx-8 mt-10">
            <div>
                <h3 className="text-white font-bold mb-3">About Us</h3>
                <p>We are a passionate team </p>
                <p>dedicated to providing the best</p>
                <p>services to our customers.</p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-white font-bold mb-3">Quick Links   </h3>
                <li>Home</li>
                <li>Servie</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Subscribe   </h3>
              <p>Subscribe to our newsletter for the </p>
              <p>latest updates.</p>
              <div>
                <input className="bg-amber-50 rounded-l-lg py-2 px-2 mt-3" type="email" placeholder="Enter your email" />
                <button className="btn text-black font-bold rounded-r-lg px-3 py-2 bg-gradient-to-r from-fuchsia-500 to-orange-300">Subscribe</button>
              </div>
            </div>
        </div>
        {/*  Newsletter Section  */}
        <div className="p-3 border-4 border-white bg-gray-500 rounded-xl w-3/4 absolute top-1/18 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col justify-center items-center rounded-xl  bg-gradient-to-r from-cyan-200 to-orange-300 space-y-3 py-10 ">
          <h1>Subscribe to our Newsletter</h1>
          <p>Get the latest updates and news right in your inbox!</p>
          <div>
                <input className="bg-amber-50 rounded-lg py-2 px-2 mt-3 mr-2" type="email" placeholder="Enter your email" />
                <button className="btn text-black font-bold rounded-lg px-3 py-2 bg-gradient-to-r from-fuchsia-500 to-orange-300">Subscribe</button>
              </div>
        </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
