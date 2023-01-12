import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const myBookings = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-[#121A25] h-screen">
            <div>
            <h1 className="text-3xl font-extrabold text-[#F3971F]">My Bookings</h1>
            </div>
            <div>
            <p className="my-40 text-white text-xl uppercase">no reservation</p>
            </div>
            <div className="flex flex-col justify-center items-center">
            <AiOutlinePlusCircle className="text-5xl text-[#F3971F] text-center my-2" />
            <p className="text-[#F3971F]">make reservation</p>
            </div>
        </div>
    );
};

export default myBookings;