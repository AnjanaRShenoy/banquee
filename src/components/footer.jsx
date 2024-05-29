import React from "react";

const Footer = () => {
  return (
    <div className="bg-white border-b">
      <div className="flex flex-row mt-20 mb-20">
        <div className="mr-40 ml-20">
          <a href="#" className="text-3xl text-green-500 font-bold">
            banquee.
          </a>
        </div>
        <div className="flex ">
          <div className="flex flex-col space-y-2 mr-60">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Features
            </a>
            <a href="#" className="hover:underline">
              Pricing
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
          </div>
          <div className="flex flex-col space-y-2 mr-60">
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Products
            </a>
            <a href="#" className="hover:underline">
              Technology
            </a>
            <a href="#" className="hover:underline">
              Crypto
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">
              Webflow
            </a>
            <a href="#" className="hover:underline">
              Styleguide
            </a>
            <a href="#" className="hover:underline">
              Licensing
            </a>
            <a href="#" className="hover:underline">
              Changelog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
