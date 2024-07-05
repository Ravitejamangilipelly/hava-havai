import {useState} from 'react';
import { useParams } from 'react-router-dom';
import ServiceForm from './ServiceForm';

const AirportDetail = () => {
  const { id } = useParams();
  const [airports, setAirports] = useState([
    { name: "Indira Gandhi International Airport", country: "India", code: "DEL", terminals: 3 },
    { name: "Dubai International Airport", country: "UAE", code: "DXB", terminals: 5 },
    { name: "Heathrow Airport", country: "England", code: "LHR", terminals: 6 },
    { name: "Istanbul Airport", country: "Turkey", code: "IST", terminals: 3 },
    { name: "Rajiv Gandhi International Airport", country: "Texas", code: "DFW", terminals: 14 }
  ]);

  const airport = airports[id];

  return (
    <div>
      <h2>{airport.name}</h2>
      <div>
        <h3>Terminals</h3>
        {Array.from({ length: airport.terminals }).map((_, index) => (
          <div key={index}>Terminal {index + 1}</div>
        ))}
        <button>Add Terminal</button>
      </div>
      <div>
        <h3>Services</h3>
        <ServiceForm />
      </div>
    </div>
  );
};

export default AirportDetail;
