import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const Section3 = () => {
  const cardsData = [
    {
      id: 1,
      title: "Flash Quiz: Speed of Innovation",
      image: "/images/quizz.png",
      button: "Learn More",
      marginTop: "50px",
      marginLeft: "870px",
      content: "IT Quiz",
      titlePosition: { top: "20px", left: "10px" },
      coordinators: [
        { name: "Prakyath", number: "8088639012" },
        { name: "Riyona", number: "8431350418" },
      ],
      rules: `
     1.Questions will be based on general knowledge, technical, and programming topics.\n
2.No electronic gadgets are allowed.\n
3.The quiz master's and event head's decision is final.\n  
4.Use of unfair means will lead to disqualification.\n  
5.Last 4 teams will be selected for the final round.
  `,
    },
    {
      id: 2,
      title: "Spidy-Weaving the web of logic",
      image: "/images/webd.png",
      button: "Learn More",
      marginTop: "50px",
      marginLeft: "370px",
      content: "Web Designing",
      titlePosition: { top: "20px", left: "10px" },
      coordinators: [
        { name: "Adithya kumar", number: "6361600211" },
        { name: "Dharini", number: "7829836938" },
      ],
      rules:
       ` 1. Number of participants :2.\n
         2.The participants will use HTML, CSS, and JavaScript for the Competition.\n Frameworks will be mentioned later if applicable.\n
         3.Use of Electronics Devices such as Phones, Gadgets, smartwatches etc.. \n are  prohibited during the competition.\n
         4.Theme will be announced on the spot`
        ,

    },
    {
      id: 3,
      title: "The code wars-infinity alogorithms",
      image: "/images/baymancode.png",
      button: "Learn More",
      marginTop: "400px",
      marginLeft: "620px",
      content: "Coding",
      fontFamily: "'AvengersFont', sans-serif",
      titlePosition: { top: "10px", left: "10px" },
      coordinators: [
        { name: "Sachin", number: "6361428036" },
        { name: "Rithish", number: "7829150482" },
      ],
      rules: ` 1. Number of participants :2.\n
       2.Participants are allowed to use one of the following programming languages:C , C++ , Java.\n
       3.Switching between tabs during the contest not allowed .\n
        4.Using Google or any other search engine to find solutions or references is not allowed .\n
      5.Violation of these rules will result in immediate disqualification`

    },
    {
      id: 4,
      title: "Shazam! Moments: Unleash Your Creativity",
      image: "/images/reels.png",
      button: "Learn More",
      marginTop: "400px",
      marginLeft: "170px",
      content: "Reels",
      titlePosition: { top: "10px", left: "10px" },
      coordinators: [
        { name: "Dainik", number: "8618306639" },
        { name: "Savin", number: "9902736870" },
      ],
      rules: `1.Video content must be original and to be captured within the SDIT campus.\n
2.The theme will be provided on the spot.\n  
3.It is forbidden to edit using AI websites and software.\n  
4.Participants should bring their own gears, laptops, etc.\n `,

    },
    {
      id: 5,
      title: "Project stark: The Next Big Launch ",
      image: "/images/productL.png",
      button: "Learn More",
      marginTop: "400px",
      marginLeft: "1070px",
      content: "Product Launch",
      titlePosition: { top: "30px", left: "10px" },
      coordinators: [
        { name: "Gurudath", number: "9901526291" },
        { name: "Mahalaxmi", number: "9526620803" },
      ],
      rules: `1.Number of partcipants :2 \n  
      2. Participants should not disclose their college name during their Presentation\n  
3. No Offensive or inappropriate content is allowed in the product\n  
4. Plagiarism in any form will lead to disqualification\n  
5. Judges decision will be final and binding\n  
6. The participants should bring their own laptops and phones\n  
`,

    },
    {
      id: 6,
      title: "The Man of Steel-The Raise Of Leader ",
      image: "/images/itmanager1.png",
      button: "Learn More",
      marginTop: "745px",
      marginLeft: "370px",
      content: "IT Manager",
      titlePosition: { top: "20px", left: "10px" },
      coordinators: [
        { name: "Sunil", number: "8197376168" },
        { name: "Pranamya", number: "9481212107" },
      ],
      rules: `1. Number of participants : 1\n  
    2.Participant must come in a formal attire.\n  
    3.Participants should not be participate in other events \n  
    4.From each college there should be one participant for IT Manager event. `,

    },
    {
      id: 7,
      title: "Battle For The Multiverse",
      image: "/images/gaming.png",
      button: "Learn More",
      marginTop: "745px",
      marginLeft: "870px",
      content: "Gaming",
      titlePosition: { top: "20px", left: "10px" },
      coordinators: [
        { name: "Jabez", number: "9482833472" },
        { name: "Sakibe", number: "9380340169" },
      ],
      rules: `1. Number of participants :4\n  
      2.Players must use their own mobile devices with BGMI installed. Emulators and third-party software are strictly prohibited.\n  
      3.Hacks, cheats, or exploits will result in the immediate disqualification of the entire team.\n  
      4.Unsportsmanlike behavior, offensive language, or toxic behavior will not be tolerated. Violators will be penalized or disqualified\n  
      5.Teams must join the lobby on time as per the schedule. Late entries will not be entertained.\n  
      6.Players must arrange their own internet, as organizers won’t provide it. No complaints or match restarts for connectivity issues; participation implies full responsibility. `
      ,

    },
    // ... (your card data remains the same)
  ];

  const [isInView, setIsInView] = useState(Array(cardsData.length).fill(false));
  const [activePopup, setActivePopup] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1300);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setIsInView((prevState) => {
              const newState = [...prevState];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="event-section"
      style={{
        backgroundImage: "url('/images/bgf.jpg')",
        color: "white",
        minHeight: isMobile ? "auto" : "190vh",
        padding: "40px 20px",
        position: "relative",
      }}
    >
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 10px rgba(14, 192, 236, 0.7), 0 0 20px rgba(9, 107, 236, 0.7), 0 0 30px rgba(12, 133, 238, 0.7);
            }
            100% {
              box-shadow: 0 0 10px rgba(241, 5, 201, 0.7), 0 0 20px rgba(238, 3, 238, 0.7), 0 0 30px rgba(222, 14, 187, 0.7);
            }
          }

          @media (max-width: 738px) {
            .popup-content {
              width: 90% !important;
              height: 80% !important;
              padding: 10px !important;
            }

            .popup-content h2 {
              font-size: 24px !important;
            }

            .popup-content p {
              font-size: 14px !important;
            }

            .popup-content button {
              padding: 8px 16px !important;
              font-size: 14px !important;
              bottom: 10px !important;
              right: 10px !important;
            }
          }

          /* Tablet-specific styles */
          @media (min-width: 739px) and (max-width: 1220px) {
            .card {
              position: relative !important;
              top: auto !important;
              left: auto !important;
              width: 40% !important;
              height: 270px !important;
              margin: 10px !important;
              transform: none !important;
            }

            #event-section {
              min-height: auto !important;
              padding-bottom: 100px !important;
            }

            .popup-content {
              width: 80% !important;
              height: 70% !important;
            }

            .popup-content h2 {
              font-size: 32px !important;
            }

            .popup-content p {
              font-size: 16px !important;
            }

            .popup-content button {
              padding: 10px 20px !important;
              font-size: 16px !important;
            }
          }
        `}
      </style>

      <h1
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "red",
          fontWeight: "bold",
          fontSize: "55px",
          fontFamily: "'AvengersFont', sans-serif",
          textTransform: "uppercase",
          marginBottom: "50px", // Add marginBottom to create space
        }}
      >
        Events
      </h1>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          ...(isMobile && {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }),
          ...(isTablet && {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginTop:"20px",
            marginBottom: "100px",
          }),
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            data-index={index}
            className="card"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "5px solid grey",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              animation: "glow 1.5s infinite alternate",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              opacity: isInView[index] ? 1 : 0,
              transform: isInView[index]
                ? "rotateY(0deg)"
                : isMobile
                ? "translateY(20px)"
                : "rotateY(90deg)",
              transition: "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
              ...(!isMobile &&
                !isTablet && {
                  position: "absolute",
                  top: card.marginTop,
                  left: card.marginLeft,
                  height: "335px",
                  width: "220px",
                }),
              ...(isMobile && {
                position: "relative",
                width: "85%",
                height: "250px",
                margin: "10px 0",
                transform: isInView[index]
                  ? "translateY(0)"
                  : "translateY(20px)",
              }),
              ...(isTablet && {
                position: "relative",
                width: "45%",
                height: "300px",
                margin: "10px",
                transform: isInView[index] ? "translateY(0)" : "translateY(20px)",
                backgroundSize: "cover",
              }),
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 15px rgba(0, 0, 0, 0.5)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 10px rgba(0, 0, 0, 0.3)";
              }
            }}
          >
            <h2
              style={{
                position: "absolute",
                top: card.titlePosition.top,
                left: card.titlePosition.left,
                fontSize: "1.0rem",
                color: "#E9E083",
                fontFamily: "'DcFandom', sans-serif",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "5px 10px",
                borderRadius: "5px",
                top: "0px",
                left: "0px",
              }}
            >
              {card.title}
            </h2>
            <button
              style={{
                position: "absolute",
                bottom: "10px",
                border: "1px solid white",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "transparent",
                color: "white",
                cursor: "pointer",
                width: "100px",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => setActivePopup(card.id)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>

      {/* Popup */}
      {activePopup && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
          onClick={() => setActivePopup(null)}
        >
          <div
            className="popup-content"
            style={{
              backgroundImage: "url(/images/bgf.jpg)",
              padding: isMobile ? "10px" : "20px",
              borderRadius: "10px",
              width: isMobile ? "90%" : isTablet ? "80%" : "70%",
              height: isMobile ? "80%" : isTablet ? "70%" : "70%",
              color: "white",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontSize: isMobile ? "20px" : "30px",
                cursor: "pointer",
                color: "white",
              }}
              onClick={() => setActivePopup(null)}
            >
              &times;
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <h2
                style={{
                  marginBottom: "10px",
                  color: "white",
                  fontFamily: "'AvengersFont', sans-serif",
                  fontSize: isMobile ? "24px" : isTablet ? "32px" : "40px",
                  wordSpacing: "7px",
                  letterSpacing: "2.5px",
                }}
              >
                {cardsData.find((card) => card.id === activePopup).title}
              </h2>
              <p style={{ color: "white", fontSize: isMobile ? "14px" : "16px" }}>
                {cardsData.find((card) => card.id === activePopup).content}
              </p>
              <h3 style={{ color: "white", fontSize: isMobile ? "18px" : "24px" }}>
                Rules:
              </h3>
              <p
                style={{
                  whiteSpace: "pre-line",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  color: "white",
                  textAlign: "start",
                  fontSize: isMobile ? "12px" : "14px",
                  padding: isMobile ? "0 10px" : "0 20px",
                }}
              >
                {cardsData.find((card) => card.id === activePopup).rules}
              </p>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <h3
                style={{
                  color: "white",
                  marginTop: "0px",
                  fontSize: isMobile ? "18px" : "24px",
                }}
              >
                Event Coordinators:
              </h3>
              {cardsData
                .find((card) => card.id === activePopup)
                .coordinators.map((coordinator, index) => (
                  <div key={index}>
                    <p
                      style={{
                        color: "white",
                        fontSize: isMobile ? "12px" : "14px",
                      }}
                    >
                      {coordinator.name} - {coordinator.number}
                    </p>
                  </div>
                ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                marginTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Link to="/register" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#2B3044",
                    color: "#ff7576",
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    fontSize: isMobile ? "14px" : "16px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    borderRadius: "9px",
                    boxShadow: "0px 1px 2px #2B3044, 0px 4px 16px #2B3044",
                    transformStyle: "preserve-3d",
                    transform: "scale(var(--s, 1)) perspective(600px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
                    perspective: "600px",
                    transition: "transform 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                  onMouseDown={(e) => {
                    e.target.style.transform = "scale(0.93)";
                  }}
                  onMouseUp={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <span
                    style={{
                      background: "linear-gradient(90deg, #866ee7, #ea60da, #ed8f57, #fbd41d, #2cca91)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                      display: "block",
                    }}
                  >
                    Register
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Updated "Click here for cultural Events" button */}
       <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          width: isMobile ? "90%" : "600px",
          cursor: "pointer",
          ...(isMobile && {
            position: "relative",
            bottom: "auto",
            left: "auto",
            transform: "none",
            marginTop: "20px",
            width: "100%",
            padding: "20px",
          }),
        }}
      >
        <Link
          to="/Cultural"
          style={{
            display: "block",
            textDecoration: "none",
            color: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            position: "relative",
            overflow: "hidden",
            backgroundImage: "url('/images/sec2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "1.8rem",
              color: "red",
              fontWeight: "bold",
              marginBottom: "10px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              fontFamily: "'AvengersFont', sans-serif",
              wordSpacing: "7px",
              letterSpacing: "1.9px",
            }}
          >
            Cultural Events
          </h2>
          <p
            style={{
              fontSize: isMobile ? "0.7rem" : "0.8rem",
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            }}
          >
            Click here and explore our exciting cultural events!
          </p>
        </Link>
      </div> 
    </section>
  );
};

export default Section3;