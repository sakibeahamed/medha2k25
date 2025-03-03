// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Team = () => {
//   const navigate = useNavigate();
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // Actual data for the cards
//   const teamMembers = [
//     {
//       id: 1,
//       backgroundImage: 'url(/images/sabikecarddd.png)', // Replace with actual image URL
//     },
//     {
//       id: 2,
//       backgroundImage: 'url(/images/.jpg)', // Replace with actual image URL
//     },
//     {
//       id: 3,
//       backgroundImage: 'url(/images/background3.jpg)', // Replace with actual image URL
//     },
//     {
//       id: 4,
//       backgroundImage: 'url(/images/background4.jpg)', // Replace with actual image URL
//     },
//     {
//       id: 5,
//       backgroundImage: 'url(/images/background5.jpg)', // Replace with actual image URL
//     },
//     {
//       id: 6,
//       backgroundImage: 'url(/images/background6.jpg)', // Replace with actual image URL
//     },
//     {
//       id: 7,
//       backgroundImage: 'url(/images/background7.jpg)', // Replace with actual image URL
//     },
//     {
//       id: 8,
//       backgroundImage: 'url(/images/background8.jpg)', // Replace with actual image URL
//     },
//     {
//       id: 9,
//       backgroundImage: 'url(/images/background9.jpg)', // Replace with actual image URL
//     }
//   ];

//   return (
//     <div style={{ padding: '2rem', textAlign: 'center', paddingBottom: '80px' }}>
//       <h1 style={{ fontFamily: "'Bangers', cursive", color: '#ED1D24' }}>
//         Meet Our Team
//       </h1>

//       {/* Card Section */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '20px',
//           margin: '2rem auto', // Center the grid with equal margins
//           maxWidth: '1200px', // Limit the maximum width of the grid
//           alignItems: 'center',
//         }}
//       >
//         {teamMembers.map((member) => (
//           <div
//             key={member.id}
//             style={{
//               height: '400px',
//               width: '300px',
//               backgroundImage: member.backgroundImage, // Unique background image for each card
//               backgroundSize: 'cover', // Ensure the image covers the card
//               backgroundPosition: 'center', // Center the background image
//               borderRadius: '10px',
//               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               padding: '1rem',
//               color: 'white', // Adjust text color for better visibility
//               textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better readability
//               transform: hoveredCard === member.id ? 'scale(1.05)' : 'scale(1)', // Scale up on hover
//               transition: 'transform 0.3s ease', // Smooth transition
//             }}
//             onMouseEnter={() => setHoveredCard(member.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* No content inside the card */}
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           @media (max-width: 768px) {
//             /* Shift the cards to the right in mobile view */
//             .card-container {
//             margin-left:25px/* Adjust this value to shift the cards to the right */
//             }

//             /* Adjust the button position if needed */
//             .cultural-event-button {
//               position: relative;
//               bottom: auto;
//               left: 40px;
//               transform: none;
//               margin-top: 20px;
//               width: 100%;
//               padding: 20px;
//             }
//           }
//         `}
//       </style>

//       {/* Go Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         style={{
//           padding: '10px 20px',
//           background: '#0047AB',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         Go Back
//       </button>
//     </div>
//   );
// };

// export default Team;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Team = () => {
//   const navigate = useNavigate();
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // Array of background images for the cards
//   const cardImages = [
//     '/images/sabikecarddd.png',
//     '/images/background2.jpg',
//     '/images/background3.jpg',
//     '/images/background4.jpg',
//     '/images/background5.jpg',
//     '/images/background6.jpg',
//     '/images/background7.jpg',
//     '/images/background8.jpg',
//     '/images/background9.jpg',
//     '/images/background10.jpg',
//     '/images/background11.jpg',
//     '/images/background12.jpg',
//   ];

//   return (
//     <div style={{ padding: '2rem', textAlign: 'center', paddingBottom: '80px' }}>
//       <h1 style={{ fontFamily: "'Bangers', cursive", color: '#ED1D24',margin:"60px" }}>
//         Medha Team
//       </h1>

//       {/* Card Section */}
//       <div
//         style={{
//           display: 'flex',
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           gap: '20px',
//           margin: '2rem auto',
//           maxWidth: '1200px',
//         }}
//       >
//         {cardImages.map((image, index) => (
//           <div
//             key={index}
//             style={{
//               height: '300px',
//               width: '250px',
//               backgroundImage: `url(${image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               borderRadius: '10px',
//               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//               transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
//               transition: 'transform 0.3s ease',
//             }}
//             onMouseEnter={() => setHoveredCard(index)}
//             onMouseLeave={() => setHoveredCard(null)}
//           ></div>
//         ))}
//       </div>

//       {/* Media Query for Mobile Responsiveness */}
//       <style>
//         {`
//           @media (max-width: 768px) {
//             .card-container {
//               margin-left: 25px; /* Adjust this value to shift the cards to the right */
//             }

//             .cultural-event-button {
//               position: relative;
//               bottom: auto;
//               left: 40px;
//               transform: none;
//               margin-top: 20px;
//               width: 100%;
//               padding: 20px;
//             }
//           }
//         `}
//       </style>

//       {/* Go Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         style={{
//           padding: '10px 20px',
//           background: '#0047AB',
//           color: 'white',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         Go Back
//       </button>
//     </div>
//   );
// };

// export default Team;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "font-awesome/css/font-awesome.min.css";

const Team = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Array of background images for the cards
  const cardImages = [
    '/images/c1.PNG',
    '/images/c2.PNG',
    '/images/c4.PNG',
    '/images/c5.PNG',
    '/images/c7.PNG',
    '/images/c6.PNG',
    '/images/c3.PNG',
    '/images/c12.PNG',
    '/images/c9.PNG',
    '/images/c18.PNG',
    '/images/c8.PNG',
    '/images/c17.PNG',
    '/images/c13.PNG',
    '/images/c14.PNG',
    '/images/c15.PNG',
    '/images/c16.PNG',
    '/images/c11.PNG',
    '/images/c10.PNG',
  ];

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', paddingBottom: '80px' }}>
      <h1 style={{ fontFamily: "'AvengersFont', sans-serif", fontSize: "36px", color: 'grey', marginTop: "60px" }}>
        .
      </h1>

      {/* Card Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          margin: '2rem auto',
          maxWidth: '1200px',
        }}
      >
        {cardImages.map((image, index) => (
          <div
            key={index}
            style={{
              height: '300px',
              width: '250px',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              transform: hoveredCard === index ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          ></div>
        ))}
      </div>

      {/* Media Query for Mobile and Tablet Responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            .card-container {
              margin-left: 25px; /* Adjust this value to shift the cards to the right */
            }

            .cultural-event-button {
              position: relative;
              bottom: auto;
              left: 40px;
              transform: none;
              margin-top: 20px;
              width: 100%;
              padding: 20px;
            }

            /* Adjust card size for mobile screens */
            div[style*="height: 300px; width: 250px;"] {
              height: 400px !important; /* Increase height */
              width: 400px !important; /* Increase width */
              background-size: 120% !important; 
              background-repeat:no-repeat;/* Zoom in the image */
            }
          }

          /* Tablet Responsiveness */
          @media (min-width: 769px) and (max-width: 1024px) {
            div[style*="height: 300px; width: 250px;"] {
              height: 400px !important; /* Slightly larger height for tablets */
              width: 300px !important; /* Slightly larger width for tablets */
              
              margin-top:16px; /* Ensure the image covers the card */
            }

            .card-container {
              gap: 25px; /* Reduce gap between cards for tablets */
            }
          }
        `}
      </style>

      {/* Go Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '10px 20px',
          background: '#0047AB',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Team;