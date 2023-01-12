import React from "react";
import hamburger from "../assets/menu.png";
import login from "../assets/login.png";
import Image from "next/image";
import Menu from "./Menu";
import { useState, useEffect } from "react";

export default function header() {
  const [menu, setMenu] = useState(false);

  if (typeof window !== "undefined") {
    menu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }

  function handleOnClick() {
    setMenu(!menu);
  }

  return (
    <div
      className={
        menu
          ? "pt-0 gap-0 overflow-hidden"
          : "pt-10 flex justify-around gap-40 "
      }
    >
      {menu ? (
        ""
      ) : (
        <button onClick={handleOnClick}>
          <Image src={hamburger} alt="hamburger" />
        </button>
      )}
      {menu ? " " : <Image src={login} alt="login" />}
      {menu ? (
        <div className="overflow-hidden">
          <Menu menu={menu} setMenu={setMenu} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
