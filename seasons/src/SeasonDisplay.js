import './SeasonDisplay.css'
import React from 'react';


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const seasonConfig = {
  winter : {
    text : 'Burr, It\'s cold!',
    cssName : 'snowflake teal'
  },
  summer : {
    text : 'Let\'s hit the beach',
    cssName : 'sun red'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth())
  
  return (
    <div className = {`season-display ${season}`}>
      <i className={`${seasonConfig[season].cssName} icon-left icon disabled massive circular`}></i>
      <h1>{seasonConfig[season].text}</h1>
      <i className={`${seasonConfig[season].cssName} icon-right icon disabled massive circular`}></i>
    </div>
  );
};



export default SeasonDisplay
