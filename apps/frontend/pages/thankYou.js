import React from "react";
import Image from "next/image";
import Tick from "../assets/tick.png";

const thankYou = () => {
 return(
    <div className="bg-[#121A25]">
        <div className="flex flex-col h-screen mx-9 justify-center items-center">
        <div className="my-10">
        <Image className="w-14" src={Tick} alt="Tick" />
        </div>
        <div>
        <h1 className="text-3xl font-extrabold text-[#F3971F]">Thanks!</h1>
        </div>
        <div className="my-10">
            <p className="text-sm font-normal text-white text-center">
            You will find the details of your order in your account and in the email.
            </p>
        </div>
        </div>
    </div>
 );
}

export default thankYou;
