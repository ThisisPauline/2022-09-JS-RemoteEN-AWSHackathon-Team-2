import Image from "next/image";

const Car = ({ cars }) => {
  return (
    <ul>
      {cars.map((cars) => {
        return (
          <li className="mx-7" key={cars.id}>
            <div className="mt-10">
              <p className="text-sm font-medium text-white">{cars.CarName}</p>
              <p className="text-xs font-normal text-white">
                or similar Economy
              </p>
            </div>
            <div className="flex">
              <div className="mr-10">
                <Image
                  className="ml-5"
                  src={cars.CarImage}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className="grid grid-rows-2 grid-flow-col gap-2 items-center">
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {cars.TransmissionMode} Transmission
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {cars.NbPassengers} Passengers
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                   {cars.PowerSteering}
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {cars.NbDoors} Doors
                  </p>
                </div>
              </div>
            </div>
            <button className="mb-20 mt-10 bg-[#F3971F] text-white font-normal py-2 px-4 mx-10 rounded-full w-4/5">
              Choose Car
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Car;
