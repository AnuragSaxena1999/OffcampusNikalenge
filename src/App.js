import './App.css';
import CardList from './Cards/CardList';
import NavBar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const App = () => {
  const groupLink = "https://chat.whatsapp.com/EmKSu9MFmOF3nGcCVyIbus";
  const instaLink = "https://www.instagram.com/offcampusnikalenge?igsh=MTRwNHkxYnRrZXR6aQ=="

  const data = [
    { id: 2, companyName: 'Microsoft'
    , profile:'React developer' 
    ,location: 'New Delhi' 
    , salary:'40k-50k'
    , sourceLink: 'https://www.google.com'
    , date:'20/12/2023'
  },
   
    { id: 1, companyName: 'Google'
    , profile:'Software developer' 
    ,location: 'Banglore' 
    , salary:'40k-50k'
    , sourceLink: 'https://www.google.com'
    , date:'20/12/2023'
  },

  ];
  

  return (
    
    <div className="App">

      <NavBar/>
      <Sidebar/>
      <h3>"Stay Linked, Stay Ahead: Daily Job Updates for Tech Careers"</h3>
      <h4>OffcampusNikalenge Dosto. Code Karte raho!</h4>
      <a href={groupLink} target="_blank" rel="noopener noreferrer">
        <button id='wtsp'>WhatsApp <BsWhatsapp /></button>
      </a>
      <a href={instaLink} target="_blank" rel="noopener noreferrer">
        <button id='insta'>Instagram <FaInstagram /></button>
      </a>
      
      <CardList data={data} />
     
    </div>
  );
}

export default App;
