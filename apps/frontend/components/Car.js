const Car = ({ cars }) => {
  return (
    <ul>
      {cars.map((cars) => {
        return (
          <li className="mt-20" key={cars.id}>
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
            </div>
            <button className="mt-10 bg-[#F3971F] text-white font-normal py-2 px-4 mx-10 rounded-full w-4/5">
              Choose Car
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Car;
