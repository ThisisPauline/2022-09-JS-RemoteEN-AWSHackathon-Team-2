import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import close from "../assets/close.svg";
import Image from "next/image";

const myBookings = () => {
  return (
    <div className=" bg-[#121A25] h-screen">
      <div className="flex flex-row pt-10 mb-[42px] justify-end pr-5 items-end">
        <button>
          <Image src={close} />
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-[#F3971F]">
            My Vehicules
          </h1>
        </div>

        <p className="my-40 text-white text-xl uppercase text-center">
          You don't have any vehicules registered yet
        </p>

        <div className="flex flex-col justify-center items-center">
          <AiOutlinePlusCircle className="text-5xl text-[#F3971F] text-center my-2" />
          <p className="text-[#F3971F]">Add a vehicule</p>
        </div>
      </div>
    </div>
  );
};

export default myBookings;
