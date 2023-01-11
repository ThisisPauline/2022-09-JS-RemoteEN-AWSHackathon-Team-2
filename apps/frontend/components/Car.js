import axios from "axios";
import { useState, useEffect } from "React";

const Car = () => {
  const [cars, setCars] = useState([]);

  const backendURL = "http://localhost:5055";

  useEffect(() => {
    axios
      .get(`${backendURL}`)
      .then((response) => response.data)
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <div>{cars.CarName}</div>
    </div>
  );
};

export default Car;
