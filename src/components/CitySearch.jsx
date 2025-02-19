// src/components/CitySearch.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState} from 'react';
import PropTypes from 'prop-types';




const CitySearch = ({ allLocations }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
          return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];
    
    
        setQuery(value);
        setSuggestions(filteredLocations);
      };
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    return (
        <div id="city-search">
        <input
          type="text"
          className="city"
          placeholder="Search for a city"
          value={query}
          onFocus={() => setShowSuggestions(true)}
          onChange={handleInputChanged}
        />
              {showSuggestions ?
        <ul className="suggestions">
          {suggestions.map((suggestion) => {
            return <li key={suggestion}>{suggestion}</li>
          })}
          <li key='See all cities'>
            <b>See all cities</b>
          </li>
        </ul>
        : null
      }
      </div>
    )
    
  }
  
  
  
  CitySearch.propTypes = {
    allLocations: PropTypes.array.isRequired,
  };
  
  export default CitySearch;

  