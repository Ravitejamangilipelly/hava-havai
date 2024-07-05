import {useState } from 'react';
import { Link } from 'react-router-dom';

const AirportList = () => {
  const [airports, setAirports] = useState([
    { name: "Indira Gandhi International Airport", country: "India", code: "DEL", terminals: 3 },
    { name: "Dubai International Airport", country: "UAE", code: "DXB", terminals: 5 },
    { name: "Heathrow Airport", country: "England", code: "LHR", terminals: 6 },
    { name: "Istanbul Airport", country: "Turkey", code: "IST", terminals: 3 },
    { name: "Rajiv Gandhi International Airport", country: "Texas", code: "DFW", terminals: 14 }
  ]);

  return (
    <div>
      <h2>Airports</h2>
      <table>
        <thead>
          <tr>
            <th>All Airports</th>
            <th>Country</th>
            <th>Code</th>
            <th>Terminals</th>
          </tr>
        </thead>
        <tbody>
          {airports.map((airport, index) => (
            <tr key={index}>
              <td><Link to={`/airports/${index}`}>{airport.name}</Link></td>
              <td>{airport.country}</td>
              <td>{airport.code}</td>
              <td>{airport.terminals}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setAirports([...airports, { name: "New Airport", country: "New Country", code: "NEW", terminals: 1 }])}>Add new</button>
    </div>
  );
};

export default AirportList;
