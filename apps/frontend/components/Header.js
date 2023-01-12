import React from "react";
import hamburger from "../assets/menu.png";
import login from "../assets/login.png";
import Image from "next/image";
import Link from "next/link";

export default function header() {
  return (
    <div className="pt-10 flex justify-around gap-40">
      <Image src={hamburger} alt="hamburger" />

      <div className="">
        <Link className="mx-auto w-1/2" href="/login">
          <Image src={login} alt="login" />
        </Link>
      </div>
    </div>
  );
}
