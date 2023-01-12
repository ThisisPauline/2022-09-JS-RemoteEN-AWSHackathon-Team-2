import Image from "next/image";

const Car = ({ cars }) => {
  return (
    <ul>
      {cars.map((cars) => {
        return (
          <li className="mt-20" key={cars.id}>
            <div className="mt-10">
              <p className="text-sm font-medium text-white">{cars.CarName}</p>
              <p className="text-xs font-normal text-white">
                or similar Economy
              </p>
            </div>
            <div className="flex">
              <div className="mr-10">
                <Image className="ml-5"
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
                    {cars.PowerSteering} Steering
                  </p>
                </div>
                <div className="border-l-2 border-[#F3971F] h-8">
                  <p className="carFontDetail font-normal text-white ml-2">
                    {cars.NbDoors} Doors
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-10 bg-[#F3971F] text-white font-normal py-2 px-4 mx-10 rounded-full w-4/5">
              Choose Car
            </button>

            {/* THIS IS FOR TESTING PURPOSES */}
{/* 
            <div>
              <b>id:</b> {cars.CarId}
            </div>
            <div>
              <b>BrandId:</b> {cars.BrandId}
            </div>
            <div>
              <b>Name:</b> {cars.CarName}
            </div>
            <div>
              <b>CarImage:</b> {cars.CarImage}
            </div>
            <div>
              <b>PowerSteering:</b> {cars.PowerSteering}
            </div>
            <div>
              <b>TransmissionMode:</b> {cars.TransmissionMode}
            </div>
            <div>
              <b>NbDoors:</b> {cars.NbDoors}
            </div>
            <div>
              <b>NbPassengers:</b> {cars.NbPassengers}
            </div>
            <div>
              <b>DailyPrice:</b> {cars.DailyPrice}
            </div> */}

          </li>
        );
      })}
    </ul>
  );
};

export default Car;
