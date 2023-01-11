import React from 'react'
import hamburger from "../assets/menu.png"
import login from "../assets/login.png"
import Image from 'next/image'


export default function header() {
  return (
    <div className="pt-10 flex justify-around gap-40">
      <Image src={hamburger} alt="hamburger"/>
      <Image src={login} alt="login"/>
    </div>
  )
}
