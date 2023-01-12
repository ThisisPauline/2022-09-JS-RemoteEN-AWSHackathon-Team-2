import React from "react";
import Image from "next/image";
import logo from "../assets/1280px-Amazon_Web_Services_Logo 1.png";

const signUp = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className=" mx-9">
        <div className="flex justify-center">
          <Image src={logo} alt="AWS Logo" />
        </div>
        <div className="flex text-sm uppercase justify-center mt-2">
          <p className="text-white">rent a car </p>
        </div>
        <div className="mt-16">
          <form>
            <div className="flex justify-center mt-8">
              <h1 className="text-2xl font-extrabold uppercase text-[#F3971F]">
                i want to rent a car
              </h1>
            </div>
            <div className="flex w-full my-10">
              <button className=" border border-[#F3971F] text-white font-normal py-2 px-4 rounded-full w-full">
                Sign Up
              </button>
            </div>
            <div className="flex justify-center mt-32">
              <h1 className="text-2xl font-extrabold uppercase text-white">
                i want to offer a car
              </h1>
            </div>

            <div className="flex w-full my-10">
              <button className=" border border-white text-white font-normal py-2 px-4 rounded-full w-full">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signUp;
