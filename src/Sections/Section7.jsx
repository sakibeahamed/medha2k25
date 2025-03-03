

import React, { useState, useRef } from 'react';

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const audioRef = useRef(null); // Reference to the audio element

  // Function to handle page flip and play sound
  const handlePageFlip = (newPage) => {
    setCurrentPage(newPage);
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Rewind to the start
      audioRef.current.play(); // Play the sound
    }
  };

  return (
    <>
      {/* Audio element for the flip sound */}
      <audio ref={audioRef} src="/sounds/page-flip.mp3" preload="auto"></audio>

      {/* Title */}
      <h1
        style={{
          textAlign: 'center',
          color: '#fff',
          marginBottom: '-100px',
          marginTop: '20px',
          fontFamily: "'AvengersFont', sans-serif",
          textTransform: 'uppercase',
          color: 'red',
          fontWeight: 'bold',
          wordSpacing: '7px',
          letterSpacing: '2.5px',
          fontSize: '55px',
        }}
      >
        E-brochure
      </h1>

      {/* Flipbook Container */}
      <div className="flipbook-container">
        <div className="book" style={{ '--c': currentPage }}>
          {/* Page 1 */}
          <div className="page" style={{ '--i': 0 }}>
            <div className="front" onClick={() => handlePageFlip(1)}></div>
            <div className="back" onClick={() => handlePageFlip(0)}></div>
          </div>

          {/* Page 2 */}
          <div className="page" style={{ '--i': 1 }}>
            <div className="front" onClick={() => handlePageFlip(2)}></div>
            <div className="back" onClick={() => handlePageFlip(1)}></div>
          </div>

          {/* Page 3 */}
          <div className="page" style={{ '--i': 2 }}>
            <div className="front" onClick={() => handlePageFlip(3)}></div>
            <div className="back" onClick={() => handlePageFlip(2)}></div>
          </div>

          {/* Page 4 */}
          <div className="page" style={{ '--i': 3 }}>
            <div className="front" onClick={() => handlePageFlip(4)}></div>
            <div className="back" onClick={() => handlePageFlip(3)}></div>
          </div>

          {/* Page 5 */}
          <div className="page" style={{ '--i': 4 }}>
            <div className="front" onClick={() => handlePageFlip(5)}></div>
            <div className="back" onClick={() => handlePageFlip(4)}></div>
          </div>

          {/* Page 6 */}
          <div className="page" style={{ '--i': 5 }}>
            <div className="front" onClick={() => handlePageFlip(6)}></div>
            <div className="back" onClick={() => handlePageFlip(5)}></div>
          </div>

          {/* Page 7 */}
          <div className="page" style={{ '--i': 6 }}>
            <div className="front" onClick={() => handlePageFlip(7)}></div>
            <div className="back" onClick={() => handlePageFlip(6)}></div>
          </div>

          {/* Page 8 */}
          <div className="page" style={{ '--i': 7 }}>
            <div className="front" onClick={() => handlePageFlip(8)}></div>
            <div className="back" onClick={() => handlePageFlip(7)}></div>
</div>
        </div>
      </div>

      {/* Download Button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a
          href="/pdf/Brochure.pdf"
          download
          style={{
            textDecoration: 'none',
            color: 'white',
            backgroundColor: 'transparent',
            border: '2px solid red',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: '-50px',
            marginBottom: '50px',
            gap: '10px',
          }}
        >
          <span>Download E-Brochure</span>
          <span style={{ fontSize: '20px' }}></span> {/* Download icon */}
        </a>
      </div>

      {/* Styles */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font: 16px/1.4 sans-serif;
          background-color: #232425;
          background-image: url('/images/bg5.png');
          background-size: cover;
          background-position: center;
        }

        .flipbook-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .book {
          display: flex;
          width: 700px;
          height: 550px;
          pointer-events: none;
          transform-style: preserve-3d;
          transition: translate 1s;
          translate: calc(min(var(--c), 1) * 50%) 0%;
          rotate: 1 0 0 30deg;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .page {
          --z: 5px;

          flex: none;
          display: flex;
          width: 100%;
          pointer-events: all;
          user-select: none;
          transform-style: preserve-3d;
          border: 1px solid #0008;
          transform-origin: left center;
          transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1),
              rotate 1s cubic-bezier(0.4, 0, 0.2, 1) calc((min(var(--i), var(--c)) - max(var(--i), var(--c))) * 50ms);
          translate: calc(var(--i) * -100%) 0px 0px;
          transform: translateZ(calc((var(--c) - var(--i) - 0.5) * var(--z)));
          rotate: 0 1 0 calc(clamp(0, var(--c) - var(--i), 1) * -180deg);
        }

        .front,
        .back {
          flex: none;
          width: 100%;
          height: 100%;
          padding: 3rem;
          backface-visibility: hidden;
          background-size: cover;
          background-position: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .back {
          translate: -100% 0;
          rotate: 0 1 0 180deg;
        }

        /* Desktop Background Images (Landscape) */
        .page:nth-child(1) .front { background-image: url('/images/1.jpg'); }
        .page:nth-child(1) .back { background-image: url('/images/2.jpg'); }
        .page:nth-child(2) .front { background-image: url('/images/3.jpg'); }
        .page:nth-child(2) .back { background-image: url('/images/4.jpg'); }
        .page:nth-child(3) .front { background-image: url('/images/5.jpg'); }
        .page:nth-child(3) .back { background-image: url('/images/6.jpg'); }
        .page:nth-child(4) .front { background-image: url('/images/7.jpg'); }
        .page:nth-child(4) .back { background-image: url('/images/8.jpg'); }
        .page:nth-child(5) .front { background-image: url('/images/9.jpg'); }
        .page:nth-child(5) .back { background-image: url('/images/10.jpg'); }
        .page:nth-child(6) .front { background-image: url('/images/11.jpg'); }
        .page:nth-child(6) .back { background-image: url('/images/12.jpg'); }
        .page:nth-child(7) .front { background-image: url('/images/13.jpg'); }
        .page:nth-child(7) .back { background-image: url('/images/14.jpg'); }
        .page:nth-child(8) .front { background-image: url('/images/15.jpg'); }
        
        
        





        @media (min-width:750px) and (max-width:1300px){

.flipbook-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 65vh;
        }

        .book {
          display: flex;
          width: 700px;
          height: 550px;
          pointer-events: none;
          transform-style: preserve-3d;
          transition: translate 1s;
          translate: calc(min(var(--c), 1) * 50%) 0%;
          rotate: 1 0 0 30deg;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .page {
          --z: 5px;

          flex: none;
          display: flex;
          width: 100%;
          pointer-events: all;
          user-select: none;
          transform-style: preserve-3d;
          border: 1px solid #0008;
          transform-origin: left center;
          transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1),
              rotate 1s cubic-bezier(0.4, 0, 0.2, 1) calc((min(var(--i), var(--c)) - max(var(--i), var(--c))) * 50ms);
          translate: calc(var(--i) * -100%) 0px 0px;
          transform: translateZ(calc((var(--c) - var(--i) - 0.5) * var(--z)));
          rotate: 0 1 0 calc(clamp(0, var(--c) - var(--i), 1) * -180deg);
        }

        .front,
        .back {
          flex: none;
          width: 100%;
          height: 100%;
          padding: 5rem;
          backface-visibility: hidden;
          background-size: cover;
          background-position: center;
          
        }

        .back {
          translate: -100% 0;
          rotate: 0 1 0 180deg;
        }

        /* Desktop Background Images (Landscape) */
        .page:nth-child(1) .front { background-image: url('/images/1.jpg'); }
        .page:nth-child(1) .back { background-image: url('/images/2.jpg'); }
        .page:nth-child(2) .front { background-image: url('/images/3.jpg'); }
        .page:nth-child(2) .back { background-image: url('/images/4.jpg'); }
        .page:nth-child(3) .front { background-image: url('/images/5.jpg'); }
        .page:nth-child(3) .back { background-image: url('/images/6.jpg'); }
        .page:nth-child(4) .front { background-image: url('/images/7.jpg'); }
        .page:nth-child(4) .back { background-image: url('/images/8.jpg'); }
        .page:nth-child(5) .front { background-image: url('/images/9.jpg'); }
        .page:nth-child(5) .back { background-image: url('/images/10.jpg'); }
        .page:nth-child(6) .front { background-image: url('/images/11.jpg'); }
        .page:nth-child(6) .back { background-image: url('/images/12.jpg'); }
        .page:nth-child(7) .front { background-image: url('/images/13.jpg'); }
        .page:nth-child(7) .back { background-image: url('/images/14.jpg'); }
        .page:nth-child(8) .front { background-image: url('/images/15.jpg'); }
        
        .page {
      width: 100%; 
      height:90% ; 
    
  }

  .front,
  .back {
    background-size: cover; /* Ensure images fit properly */
    background-position: center; /* Center the images */
    
  }


  }
          @media (min-width: 768px) and (max-width: 1024px) {
          .book {
            width: 400px; /* Reduce the size for tablets */
            height: 350px; /* Reduce the size for tablets */
            rotate: 1 0 0 30deg; /* Keep the same rotation as desktop */
          }
        }


        /* Mobile Background Images (Portrait) */
        @media (max-width: 750px) {
          .page:nth-child(1) .front { background-image: url('/images/pp1.jpg'); }
          .page:nth-child(1) .back { background-image: url('/images/pp2.jpg'); }
          .page:nth-child(2) .front { background-image: url('/images/pp3.jpg'); }
          .page:nth-child(2) .back { background-image: url('/images/pp4.jpg'); }
          .page:nth-child(3) .front { background-image: url('/images/pp5.jpg'); }
          .page:nth-child(3) .back { background-image: url('/images/pp6.jpg'); }
          .page:nth-child(4) .front { background-image: url('/images/pp7.jpg'); }
          .page:nth-child(4) .back { background-image: url('/images/pp8.jpg'); }
          .page:nth-child(5) .front { background-image: url('/images/pp9.jpg'); }
          .page:nth-child(5) .back { background-image: url('/images/pp10.jpg'); }
          .page:nth-child(6) .front { background-image: url('/images/pp11.jpg'); }
          .page:nth-child(6) .back { background-image: url('/images/pp12.jpg'); }
          .page:nth-child(7) .front { background-image: url('/images/pp13.jpg'); }
          .page:nth-child(7) .back { background-image: url('/images/pp14.jpg'); } 
          .page:nth-child(8) .front { background-image: url('/images/pp15.jpg'); }
          
          

          /* Adjust background size and position for mobile */
          .book {
    transform: rotate(90deg); /* Rotate the book by 90 degrees */
    width: 100vh; /* Adjust width to fit the rotated view */
    height: 100vw; /* Adjust height to fit the rotated view */
    margin: 20px auto; /* Add some margin for better spacing */
    translate:0 0;
    margin-top:70px;
  }

  .page {
    width: 117%; /* Ensure pages take full width */
    height: 100%; /* Ensure pages take full height */
    
  }

  .front,
  .back {
    background-size: cover; /* Ensure images fit properly */
    background-position: center; /* Center the images */
    
  }
        }

        /* Responsive adjustments */
        @media (max-width: 750px) {
          .book {
            width: 520px;
            height: 220px;
          }
        }

        @media (max-width: 600px) {
          .book {
            width: 44vw;
            height: 29vh;
            rotate: 1 0 0 20deg;
          }
        }

        @media (max-width: 480px) {
          .book {
            height: 31vh;
            rotate: 1 0 0 15deg;
          }
        }
      `}</style>
    </>
  );
};

export default FlipBook;



