import React from "react";
import Image from "next/image";
import logo from "../assets/1280px-Amazon_Web_Services_Logo 1.png";
import cars from "../assets/CARS.png";

const login = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-[#242F3E]">
        <div className=" mx-9">
      <div className="flex justify-center">
        <Image src={logo} alt="AWS Logo" />
      </div>
      <div className="flex text-sm uppercase justify-center mt-2">
        <p className="text-white">rent a car </p>
      </div>
      <div className="mt-16">
        <form>
          <div className="flex w-full mt-4">
            <input
              type="email"
              id="email"
              className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
              placeholder="email"
              required
            />
          </div>
          <div className="flex w-full mt-4">
            <input
              type="password"
              id="password"
              className="border border-[#F3971F] bg-[#242F3E] text-white text-sm rounded-full block w-full p-2.5 "
              placeholder="password"
              required
            />
          </div>
          <div className="my-2">
          <p className="text-white carFontDetail">I forgot my password</p>
        </div>
          <div className="flex w-full my-10">
            <button className=" bg-[#F3971F] text-white font-normal py-2 px-4 rounded-full w-full">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="text-sm uppercase">
        <p className="text-white">don't have an account? <span className="text-[#F3971F]">sign up</span></p>
      </div>
    </div>
    <div className="w-full">
    <Image src={cars} alt="cars" />
  </div>
    </div>
  );
};

export default login;
