import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/index.module.scss";
import carPicture from "../assets/carMain.png";
import awsLogo from "../assets/1280px-Amazon_Web_Services_Logo 1.png";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#242F3E] h-screen">
      <Header />
      <Image className="mx-auto mt-10 w-30 h-30" src={awsLogo} />
      <h1 className="flex justify-center mt-5">RENT A CAR</h1>
      <Image className="w-90 h-90" src={carPicture} />
    </div>
  );
}
