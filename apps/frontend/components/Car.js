import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BookingContext } from "../context/BookingContext";

const Car = ({ cars }) => {
  const { bookingStatus, setBookingStatus } = useContext(BookingContext);

  return (
    <ul>
      {cars.map((car) => {
        return (
          <li className="mx-7" key={car.id}>
            <div className="mt-10">
              <p className="text-sm font-medium text-white">{car.CarName}</p>
              <p className="text-xs font-normal text-white">
                or similar Economy
              </p>
            </div>
            <div className="flex">
              <div className="mr-10">
                <Image
                  className="ml-5"
                  src={car.CarImage}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-2 items-center">
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {car.TransmissionMode} Transmission
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {car.NbPassengers} Passengers
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {car.PowerSteering}
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {car.NbDoors} Doors
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full mt-4">
              <Link className="mx-auto w-1/2" href="/reviewOrder">
                <button onClick={() => setBookingStatus({...bookingStatus, selectedCar: car})} className=" bg-[#F3971F] text-white font-normal py-2 px-4 mt-5 mb-[42px] rounded-full w-full">
                  Choose
                </button>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Car;
