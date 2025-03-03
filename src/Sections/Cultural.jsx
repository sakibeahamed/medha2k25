import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; // Import useEffect
import "font-awesome/css/font-awesome.min.css";

const CulturalEvents = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardStyle = (backgroundImage) => ({
    border: '2px solid transparent',
    borderRadius: '8px',
    padding: '16px',
    margin: '18px',
    width: '300px',
    border: '2px solid white',
    height: '300px',
    textAlign: 'center',
    fontSize: '14px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    animation: "glow 1.5s infinite alternate",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
    position: 'relative', // Added to position the button absolutely within the card
  });

  const hoverEffect = {
    transform: 'translateY(-10px)',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
    border: '2px solid rgba(255, 255, 255, 0.7)',
  };

  const imageStyle = {
    borderRadius: '8px',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const pageTitleStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    fontFamily: "'Avengers', sans-serif",
    paddingTop: '130px',
    color: "red",
  };

  const events = [
    {
      title: '', 
      backgroundImage: "url('/images/advengers.jpg')", 
      rules: [ 'MCA Event','Participants: 5 ','Time: 3+1 min','For the theme teams should contact the team heads one day prior',
        "Student coordinators:", 'Shruthi-8431742695', 'Nismitha-7619531629'
      ],
    },
    {
      title: '',
      backgroundImage: "url('/images/zenblaze.jpg')",
      rules: ['MBA Event',
       'Participants: 6-8 make a team',
        'Duration: 10 Minutes',
        'Student coordinators:', 'Prajna Kundar: 9110464528',
                                    ' Raksha T: 99451 38003'
      ],
    },
    {
      title: '',
      backgroundImage: "url('/images/aura.jpg')",
      rules: ['MBA Event',
        'Participants: 1',
        'Duration: 3+ 1 Minutes',
        'Student coordinator:' ,' Prakrithiji: 8277091324',
      ],
    },
    {
      title: '',
      backgroundImage: "url('/images/hiddenTrail.jpg')",
      rules: ['MBA Event',
        'Participants: 2 make a team',
      'Student coordinators:' ,'Akhilesh: 8105456871',
        'Puneeth G Mallaya: 8792009632'
      ],
    },
    {
      title: '',
      backgroundImage: "url('/images/iris.jpg')",
      rules: ['MBA Event',
        'Participants: 2',
        'Student coordinators:', 
        'Vishnu Ashok- 7034069185',
        'Naijin Johny- 9380727878',
      ],
    },
    {
      title: '',
      backgroundImage: "url('/images/moviequizz.jpg')",
      rules: ['MBA Event',
        'Participants: 2',
        'Student coordinators:',
        'Hisham Hussain- 7338549200',
        'Abhin- 9731445371.',
      ],
    },
    {
      title: '',
      backgroundImage: "url('/images/spectra.jpg')",
      rules: ['MBA Event',
        'Participants: 2 make a team',
        'Duration: 1 hour',
        'Student coordinators: ',
        'Shreevatsa: 86600 49762',
        'Sushmitha Amin: 9834063924',
      ],
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <div>
      <h1 style={pageTitleStyle}>Cultural Events</h1>
      <div style={containerStyle}>
        {events.map((event, index) => {
          const originalStyles = cardStyle(event.backgroundImage);

          return (
            <div
              key={index}
              style={originalStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = hoverEffect.transform;
                e.currentTarget.style.boxShadow = hoverEffect.boxShadow;
                e.currentTarget.style.border = hoverEffect.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = originalStyles.transform;
                e.currentTarget.style.boxShadow = originalStyles.boxShadow;
                e.currentTarget.style.border = originalStyles.border;
              }}
            >
              <img src={event.image} alt={event.title} style={imageStyle} />
              <h3>{event.title}</h3>
              <button
                onClick={() => handleEventClick(event)}
                style={{
                  padding: '10px 20px',
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  position: 'absolute', // Position the button absolutely
                  top: '10px', // Position at the top
                  right: '10px', // Position at the right
                  transition: 'all 0.3s ease', // Smooth transition for all properties
                  transform: 'scale(1)', // Default scale
                  boxShadow: '0 0 0 rgba(255, 255, 255, 0)', // Default shadow
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'black';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1.1)'; // Slightly scale up
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.8)'; // Glow effect
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'scale(1)'; // Reset scale
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 255, 255, 0)'; // Reset shadow
                }}
              >
                View Rules
              </button>
            </div>
          );
        })}
      </div>
      {selectedEvent && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: '#1e1e1e',
            padding: '30px',
            borderRadius: '12px',
            width: '400px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
          }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#ff6f61' }}>{selectedEvent.title}</h2>
            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#ff6f61' }}>Rules</h3>
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
              {selectedEvent.rules.map((rule, index) => (
                <div key={index} style={{ marginBottom: '8px', fontSize: '16px' }}>
                  {rule.startsWith('Student coordinators:') ? (
                    <strong style={{ display: 'block', textAlign: 'center', fontSize: '18px', marginTop: '10px' }}>
                      {rule}
                    </strong>
                  ) : (
                    rule
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <button
                onClick={handleClosePopup}
                style={{
                  padding: '10px 20px',
                  background: '#ff6f61',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ff3b2f';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ff6f61';
                }}
              >
                Close
              </button>
              <button
                onClick={handleRegisterClick}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#2B3044',
                  color: '#ff7576',
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '24px',
                  borderRadius: '9px',
                  boxShadow: '0px 1px 2px #2B3044, 0px 4px 16px #2B3044',
                  transformStyle: 'preserve-3d',
                  transform: 'scale(var(--s, 1)) perspective(600px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
                  perspective: '600px',
                  transition: 'transform 0.1s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
                onMouseDown={(e) => {
                  e.target.style.transform = 'scale(0.93)';
                }}
                onMouseUp={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <span
                  style={{
                    background: 'linear-gradient(90deg, #866ee7, #ea60da, #ed8f57, #fbd41d, #2cca91)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    display: 'block',
                  }}
                >
                  Register
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
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
        `}
      </style>
      <div style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        paddingBottom: "100px"
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: '10px 20px',
            background: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            margin: '20px',
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CulturalEvents;