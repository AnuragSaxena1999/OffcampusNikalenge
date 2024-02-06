import React from 'react';
import "./Whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Whatsapp = () => {
  const groupLink = "https://chat.whatsapp.com/EmKSu9MFmOF3nGcCVyIbus";
  const instaLink = "https://www.instagram.com/offcampusnikalenge?igsh=MTRwNHkxYnRrZXR6aQ=="
  return (
    <div className="whatsapp-card">
      <h2>Join Our WhatsApp Group</h2>
      <p>Stay connected with us on WhatsApp for daily job updates.</p>
      <a href={groupLink} target="_blank" rel="noopener noreferrer">
        <button>WhatsApp <BsWhatsapp /></button>
      </a>
      <h2>
        Follow Us on Instagram
      </h2>
      <a className='instagram' href={instaLink} target="_blank" rel="noopener noreferrer">
        <button >Instagram <FaInstagram /></button>
      </a>
      <p>Follow Karke Dekho </p>
        <p>maja ayega 😂</p>
    </div>
  );
};

export default Whatsapp;
