const Car = ({ cars }) => {
  return (
    <ul>
      {cars.map((cars) => {
        return (
          <li key={cars.id}>
            <div>Name: {cars.CarName}</div>
          <div>PowerSteering? {cars.PowerSteering}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default Car;
