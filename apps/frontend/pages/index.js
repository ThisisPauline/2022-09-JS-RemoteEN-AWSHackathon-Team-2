import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#242F3E] h-screen">
      <Header />
      <Image className="mx-auto mt-10 w-30 h-30" src={awsLogo} />
      <h1 className="flex justify-center mt-5 mb-10 text-white">RENT A CAR</h1>
      <Image className="w-90 h-90" src={carPicture} />
      <div className="border ml-30">Rent a Car</div>
      <div className="">Book a car with AWS Rent a Car</div>
      <div className="">
        Welcome to AWS Rent a Car, a global leader in car rental and you can
        hire a car or a commercial van from any one of our 3835 rental locations
        worldwide. Testn2
      </div>
    </div>

  );
}
