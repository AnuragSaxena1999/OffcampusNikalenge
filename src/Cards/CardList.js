// CardList.js

import React from 'react';
import { useState } from 'react';
import "./Card.css";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";



const CardList = ({ data }) => {
    const [currentItem, setCurrentItem] = useState(null);

    const handleButtonClick = (sourceLink) => {
      window.open(sourceLink, '_blank');
    };
  return (
    <div  className="card-list"  >
      {data.map((item) => (
        <div key={item.id} className="card"  >
          
          <div className="card-details">
            <h2 id='companyName'>{item.companyName}</h2>
            <h3 id='profile' >{item.profile}</h3>

            <div className='details'>
            
            <p>Location<IoLocationOutline />: {item.location}</p>
            <p>Salary: {item.salary}</p>
            <p>Job posted on:{item.date}</p>
            </div>
            
          </div>
          <button className="classic-button" onClick={() => handleButtonClick(item.sourceLink)}>Apply<HiOutlineExternalLink /></button>
            
          
        </div>
      ))}
    </div>
  );
};

const handleButtonClick = (itemId) => {
  console.log(`Button clicked for item with id: ${itemId}`);
};

export default CardList;
