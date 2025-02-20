// eslint-disable-next-line no-unused-vars
import React from "react";
import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from './components/NumberOfEvents';

import "./App.css";
const App = () =>{
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");

  return (
    <>
    <div className="App">
      <CitySearch
      allLocations={allLocations} 
      setCurrentCity={setCurrentCity}
      />
      <EventList events={events} />
      <NumberOfEvents 
      numberOfEvents={numberOfEvents} 
      setNumberOfEvents={setNumberOfEvents}
      /> 
    </div>
    </>
  );
}

export default App;
