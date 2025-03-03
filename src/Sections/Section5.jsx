
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Section5 = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1224);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

return (
  <section
    id="section1"
    style={{
      background: "linear-gradient(to bottom, #0A0A0A, #1E1E1E)",
      height: isMobile ? "auto" : isTablet ? "70vh" : "80vh",
      minHeight: isMobile ? "100svh" : isTablet ? "70vh" : "80vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      padding: isMobile ? "2rem 0" : isTablet ? "1.5rem 0" : 0,
    }}
  >
    {/* Blur effect for top and bottom */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3vh",
        background: "rgba(14, 0, 0, 0.93)",
        filter: "blur(5px)",
      }}
    ></div>
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "3vh",
        background: "rgba(18, 1, 2, 1)",
        filter: "blur(5px)",
      }}
    ></div>

    {/* Main Content Container */}
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: isMobile ? "95%" : isTablet ? "90%" : "90%",
        position: "relative",
        flexDirection: isMobile ? "column" : isTablet ? "column" : "row",
        gap: isMobile ? "2rem" : isTablet ? "1.5rem" : 0,
      }}
    >
      {/* Header: "Marvel vs DC Fest" */}
      <div
        style={{
          position: isMobile ? "relative" : isTablet ? "relative" : "absolute",
          top: isMobile ? 0 : isTablet ? 0 : "10px",
          textAlign: "center",
          width: "100%",
          fontSize: isMobile ? "1.8rem" : isTablet ? "2rem" : "2.5rem",
          color: "red",
          fontWeight: "bold",
          fontFamily: "'Bangers', cursive",
          letterSpacing: "2px",
          marginBottom: isMobile ? "1rem" : isTablet ? "3rem" : 0,
        }}
      >
        <h1 
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "red", // Updated text color to white
          fontWeight: "bold",
          fontSize: isMobile ? "2.5rem" : isTablet ? "3rem" : "55px",
          fontFamily: "'AvengersFont', sans-serif", // Use the custom font here
          textTransform: "uppercase",
          
          wordSpacing: "7px",
          letterSpacing: "2.5px",
        
          
        }}>MEDHA TEAM </h1>
      </div>

      {/* Main Content Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: isMobile ? "auto" : isTablet ? "50vh" : "55vh",
          gap: "15px",
          flexDirection: isMobile ? "column-reverse" : isTablet ? "column-reverse" : "row",
        }}
      >
        {/* Left Section: Tagline and Button */}
        <div
          style={{
            width: isMobile ? "100%" : isTablet ? "100%" : "40%",
            height: isMobile ? "auto" : isTablet ? "auto" : "25vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : isTablet ? "center" : "flex-start",
            textAlign: isMobile ? "center" : isTablet ? "center" : "left",
            gap: "20px",
          }}
        >
          {/* Tagline */}
          <p
            style={{
              fontSize: isMobile ? "1rem" : isTablet ? "1.1rem" : "1.2rem",
              color: "#FFFFFF",
              fontFamily: "'Poppins', sans-serif",
              fontStyle: "italic",
              lineHeight: "1.5",
              textShadow: "1px 1px 2px rgba(255, 255, 255, 0.3)",
              maxWidth: "600px",
            }}
          >
            Witness the ultimate clash of heroes and villains. Choose your side!
          </p>

          {/* Button with navigation */}
          <button
            style={{
              background: "linear-gradient(to right, #ED1D24, #000000)",
              color: "#FFFFFF",
              border: "1px solid #FFD700",
              borderRadius: "25px",
              padding: isMobile ? "8px 16px" : isTablet ? "10px 20px" : "10px 20px",
              fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1rem",
              fontFamily: "'Poppins', sans-serif",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: isMobile ? "100%" : isTablet ? "auto" : "auto",
            }}
            onClick={() => navigate('/team')}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(to right, #000000, #0047AB)";
              e.target.style.boxShadow = "0 0 10px rgba(0, 71, 171, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.background =
                "linear-gradient(to right, #ED1D24, #000000)";
              e.target.style.boxShadow = "none";
            }}
          >
            see our team
            <span style={{ fontSize: "1.2rem" }}>⚡</span>
          </button>
        </div>

        {/* Right Section: Framed Image */}
        <div
          style={{
            width: isMobile ? "100%" : isTablet ? "100%" : "43%",
            height: isMobile ? "35vh" : isTablet ? "40vh" : "35vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            border: "1px solid rgba(255, 215, 0, 0.3)",
            overflow: "hidden",
            position: "relative",
            transition: "all 0.3s ease",
            marginTop:"30px"
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.7)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = "rgba(255, 215, 0, 0.3)";
          }}
        >
          <img
            src="images/team2.jpg"
            alt="Marvel vs DC Characters"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        </div>
      </div>
    </div>
  </section>
);
};

export default Section5;