import React, { useEffect, useState } from "react";
import "./Register.css";
import axios from "axios";
import ButtonLoader from "../Components/Navbar/Loader/ButtonLoader";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { Modal } from "../Components/Modal";

const Register = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [registeredDetails, setRegisteredDetails] = useState();
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentLoading, setPaymentLoading] = useState(true);
  const [showOtherCollege, setShowOtherCollege] = useState(false);
  const [otherCollegeName, setOtherCollegeName] = useState("");

  const [toggleModal, setToggleModal] = useState(false);
  const[transId, setTransId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for existing events
  const [events, setEvents] = useState({
    coding: false,
    webDesigning: false,
    gaming: false,
    quiz: false,
    productLaunch: false,
    itManager: false,
    reels: false,
  });

  // State for cultural events
  const [culturalEvents, setCulturalEvents] = useState({
    adVengers: false,
    zenblaze: false,
    aura: false,
    hiddenTrail: false,
    iris: false,
    movieQuiz: false,
    spectra: false,
  });

  // State for event details
  const [eventDetails, setEventDetails] = useState({
    coding: { participant1: "", participant2: "" },
    webDesigning: { participant1: "", participant2: "" },
    quiz: { participant1: "", participant2: "" },
    gaming: {
      participant1: "",
      participant2: "",
      participant3: "",
      participant4: "",
    },
    productLaunch: { participant1: "", participant2: "" },
    itManager: { participant1: "" }, // Only one participant for IT Manager
    reels: { participant1: "", participant2: "" },
    adVengers: {
      participant1: "",
      participant2: "",
      participant3: "",
      participant4: "",
      participant5: "",
    },
    zenblaze: {
      participant1: "",
      participant2: "",
      participant3: "",
      participant4: "",
      participant5: "",
      participant6: "",
      participant7: "",
      participant8: "",
    },
    aura: { participant1: "" },
    hiddenTrail: { participant1: "", participant2: "" },
    iris: { participant1: "", participant2: "" },
    movieQuiz: { participant1: "", participant2: "" },
    spectra: { participant1: "", participant2: "" },
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    collegeName: "College",
    course: "BCA",
    transactionId: "",
    otherCollegeName: "", // New field for "Others" college name
  });

  const [errors, setErrors] = useState({});

  // State to manage which section is visible
  const [activeSection, setActiveSection] = useState("technical"); // 'technical' or 'cultural'

  const calculateTotalAmount = () => {
    let technicalParticipants = 0;
    let culturalParticipants = 0;

    // Count participants for selected technical events
    Object.keys(events).forEach((event) => {
      if (events[event]) {
        const participants = eventDetails[event];
        technicalParticipants += Object.values(participants).filter(
          (p) => p.trim() !== ""
        ).length;
      }
    });

    // Count participants for selected cultural events
    Object.keys(culturalEvents).forEach((event) => {
      if (culturalEvents[event]) {
        const participants = eventDetails[event];
        culturalParticipants += Object.values(participants).filter(
          (p) => p.trim() !== ""
        ).length;
      }
    });

    let calculatedAmount =
      technicalParticipants * 150 + culturalParticipants * 100;

    // Apply cap if all technical events are selected
    let selectedTechnicalEventsCount = Object.values(events).filter(
      (event) => event
    ).length;
    if (selectedTechnicalEventsCount === Object.keys(events).length) {
      calculatedAmount = Math.min(
        calculatedAmount,
        1500 + culturalParticipants * 100
      );
    }

    setTotalAmount(calculatedAmount);
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [events, culturalEvents, eventDetails]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setEvents({ ...events, [name]: checked });
  };

  const handleCulturalCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCulturalEvents({ ...culturalEvents, [name]: checked });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEventDetailChange = (event, eventName) => {
    const { name, value } = event.target;
    setEventDetails({
      ...eventDetails,
      [eventName]: {
        ...eventDetails[eventName],
        [name]: value,
      },
    });
  };



  const handleCollegeChange = (e) => {
    const selectedCollege = e.target.value;

    if (selectedCollege === "Others") {
      setShowOtherCollege(true);
      setFormData({ ...formData, collegeName: "" }); // Clear the main form field
    } else {
      setShowOtherCollege(false);
      setOtherCollegeName(""); // Reset the otherCollegeName field
      setFormData({ ...formData, collegeName: selectedCollege });
    }
  };

  const handleOtherCollegeChange = (e) => {
    setOtherCollegeName(e.target.value);
    setFormData({ ...formData, collegeName: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate basic form fields
    if (!formData.name) newErrors.name = "Head Name is required";
    if (!formData.phone) newErrors.phone = "Head Phone no is required";
    if (!formData.collegeName)
      newErrors.collegeName = "College Name is required";

    // Validate at least one event is selected
    const isAnyTechnicalEventSelected = Object.values(events).some(
      (event) => event
    );
    const isAnyCulturalEventSelected = Object.values(culturalEvents).some(
      (event) => event
    );

    if (!isAnyTechnicalEventSelected && !isAnyCulturalEventSelected) {
      newErrors.events = "At least one event must be selected";
    }

    // Validate participant details for selected technical events
    Object.keys(events).forEach((event) => {
      if (events[event]) {
        const participants = eventDetails[event];
        if (event === "gaming") {
          // Gaming requires 4 participants
          if (!participants.participant1)
            newErrors[`${event}-participant1`] = "Participant 1 is required";
          if (!participants.participant2)
            newErrors[`${event}-participant2`] = "Participant 2 is required";
          if (!participants.participant3)
            newErrors[`${event}-participant3`] = "Participant 3 is required";
          if (!participants.participant4)
            newErrors[`${event}-participant4`] = "Participant 4 is required";
        } else if (event === "itManager") {
          // IT Manager requires only 1 participant
          if (!participants.participant1)
            newErrors[`${event}-participant1`] = "Participant 1 is required";
        } else {
          // Other events require 2 participants
          if (!participants.participant1)
            newErrors[`${event}-participant1`] = "Participant 1 is required";
          if (!participants.participant2)
            newErrors[`${event}-participant2`] = "Participant 2 is required";
        }
      }
    });

    // Validate participant details for cultural events
    Object.keys(culturalEvents).forEach((event) => {
      if (culturalEvents[event]) {
        const participants = eventDetails[event];
        if (event === "adVengers") {
          // AD-VENGERS requires 5 participants
          if (!participants.participant1)
            newErrors[`${event}-participant1`] = "Participant 1 is required";
          if (!participants.participant2)
            newErrors[`${event}-participant2`] = "Participant 2 is required";
          if (!participants.participant3)
            newErrors[`${event}-participant3`] = "Participant 3 is required";
          if (!participants.participant4)
            newErrors[`${event}-participant4`] = "Participant 4 is required";
          if (!participants.participant5)
            newErrors[`${event}-participant5`] = "Participant 5 is required";
        } else if (event === "zenblaze") {
          // ZENBLAZE requires 8 participants
          if (!participants.participant1)
            newErrors[`${event}-participant1`] = "Participant 1 is required";
          if (!participants.participant2)
            newErrors[`${event}-participant2`] = "Participant 2 is required";
          if (!participants.participant3)
            newErrors[`${event}-participant3`] = "Participant 3 is required";
          if (!participants.participant4)
            newErrors[`${event}-participant4`] = "Participant 4 is required";
          if (!participants.participant5)
            newErrors[`${event}-participant5`] = "Participant 5 is required";
          if (!participants.participant6)
            newErrors[`${event}-participant6`] = "Participant 6 is required";
          if (!participants.participant7)
            newErrors[`${event}-participant7`] = "Participant 7 is required";
          if (!participants.participant8)
            newErrors[`${event}-participant8`] = "Participant 8 is required";
        } else if (event === "aura") {
          // AURA requires only 1 participant
          if (!participants.participant1)
            newErrors[`${event}-participant1`] = "Participant 1 is required";
        } else if (
          event === "hiddenTrail" ||
          event === "iris" ||
          event === "movieQuiz" ||
          event === "spectra"
        ) {
          // These events require 2 participants
          if (!participants.participant1)
            newErrors[`${event}-participant1`] = "Participant 1 is required";
          if (!participants.participant2)
            newErrors[`${event}-participant2`] = "Participant 2 is required";
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //Payment button logic
  const paymentHandler = async (e) => {
    setPaymentLoading(true);
    // e.preventDefault();

    // Validate the form before proceeding
    if (!validateForm()) {
      alert(
        "Please fill in all required fields and select at least one event."
      );
      setPaymentLoading(false);
      return;
    }

    const calculatedAmount = totalAmount * 100;
    const amount = calculatedAmount;
    const currency = "INR";
    const receiptId = "receiptId1";

    try {
      const registrationData = {
        name: formData.name,
        phone: formData.phone,
        collegeName: formData.collegeName,
        course: formData.course,
        hodName: formData.hodName,
        hodPhone: formData.hodPhone,
        transactionId: transId,
        events: [
          ...Object.keys(events).filter((event) => events[event]),
          ...Object.keys(culturalEvents).filter((event) => culturalEvents[event]),
        ],
        eventDetails: Object.fromEntries(
          Object.entries(eventDetails).filter(([event, participants]) =>
            Object.values(participants).some(
              (participant) => participant.trim() !== ""
            )
          )
        ),
        totalAmount: calculatedAmount / 100,
      };

      // Sending data to backend for validation and registration
      const result = await axios.post("http://localhost:5088/register", registrationData);

      console.log("Registration Successful:", JSON.stringify(result.data));
      setPaymentSuccess(!paymentSuccess);
      setRegisteredDetails(result.data);
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setPaymentLoading(false);
    }
  };

   // Function to download payment details as PDF
   const downloadPaymentDetails = () => {
    const input = document.getElementById("payment-success-popup");

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("payment_details.pdf");
    });
  };

  // Payment success popup
  if (paymentSuccess) {
    return (
      <div
        className="register-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
          backgroundColor: "#f9f9f9",
          padding: "40px",
          backgroundImage: "url(images/bgf.jpg)",
        }}
      >
        <div
          id="payment-success-popup" // Add this ID for the download function
          className="register-card"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "3px 4px 3px 3px gray",
            padding: "20px",
            maxWidth: "500px",
            width: "100%",
            backgroundImage: "url(images/bgf.jpg)",
          }}
        >
          <h1
            className="register-title"
            style={{
              textAlign: "center",
              fontSize: "28px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "20px",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Registration
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "lightgreen",
              marginBottom: "20px",
              fontFamily: "'Open Sans', sans-serif",
            }}
          >
            Payment Successful!
          </p> 

          <div style={{ padding: "10px", color: "white" }}>
            <p><strong style={{ color: "red" }}>Amount Paid:</strong> ₹{registeredDetails.user.totalAmount}</p>
            <p><strong style={{ color: "red" }}>Name:</strong> {registeredDetails.user.name}</p>
            <p><strong style={{ color: "red" }}>Phone:</strong> {registeredDetails.user.phone}</p>
            <p><strong style={{ color: "red" }}>College:</strong> {registeredDetails.user.collegeName}</p>
            <p><strong style={{ color: "red" }}>Course:</strong> {registeredDetails.user.course}</p>
            <p><strong style={{ color: "red" }}>HOD Name:</strong> {registeredDetails.user.hodName}</p>
            <p><strong style={{ color: "red" }}>HOD Phone:</strong> {registeredDetails.user.hodPhone}</p>
            <p><strong style={{ color: "red" }}>Transaction ID:</strong> {registeredDetails.user.transactionId}</p>
            <p><strong style={{ color: "red" }}>Registered Events:</strong> {registeredDetails.user.events.join(", ")}</p>

            {registeredDetails.user.eventDetails && (
              <div style={{ marginTop: "10px" }}>
                <strong style={{ color: "red" }}>Event Details:</strong>
                {Object.entries(registeredDetails.user.eventDetails).map(([event, details]) => (
                  <div key={event} style={{ marginLeft: "10px", marginTop: "5px" }}>
                    <p><strong>{event}:</strong></p>
                    {Object.entries(details).map(([key, value]) => (
                      <p key={key} style={{ marginLeft: "10px" }}>
                        <strong>{key}:</strong> {value}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Download Button */}
          <button
            onClick={downloadPaymentDetails}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Download Payment Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="register-container">
      {toggleModal && (<Modal toggleModal={toggleModal} setToggleModal={setToggleModal} transId={transId} setTransId={setTransId} paymentHandler={paymentHandler}/>)}
      <div className="register-card">
        <h1 className="register-title">Registration</h1>
        <form className="register-form">
          {/* Basic Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Head Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Head Phone no:</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          {/* More Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="collegeName">College Name:</label>
              <select
                id="collegeName"
                name="collegeName"
                value={showOtherCollege ? "Others" : formData.collegeName}
                onChange={handleCollegeChange}
                required
              >
                <option value="">Select College</option>
                <option value="AIMIT - ST ALOYSIUS INSTITUTE OF MANAGEMENT AND IT">
                  AIMIT - ST ALOYSIUS INSTITUTE OF MANAGEMENT AND IT
                </option>
                <option value="AJ COLLEGE">AJ COLLEGE</option>
                <option value="ALVA'S DEGREE COLLEGE (UG)">
                  ALVA'S DEGREE COLLEGE (UG)
                </option>
                <option value="BESANT COLLEGE MANGALORE">
                  BESANT COLLEGE MANGALORE
                </option>
                <option value="BHUVANENDRA COLLEGE">BHUVANENDRA COLLEGE</option>
                <option value="CANARA COLLEGE BALLALBAGH">
                  CANARA COLLEGE BALLALBAGH
                </option>
                <option value="CARSTREET COLLEGE">CARSTREET COLLEGE</option>
                <option value="DAVALA MOODABIDRI">DAVALA MOODABIDRI</option>
                <option value="GOVINDAS COLLEGE">GOVINDAS COLLEGE</option>
                <option value="GOVT WOMEN COLLEGE">GOVT WOMEN COLLEGE</option>
                <option value="MAHAVEERA COLLEGE MOODABIDRI">
                  MAHAVEERA COLLEGE MOODABIDRI
                </option>
                <option value="MAHATHMA GANDHI MEMORIAL (MGM) COLLEGE UDUPI">
                  MAHATHMA GANDHI MEMORIAL (MGM) COLLEGE UDUPI
                </option>
                <option value="MAPS COLLEGE (BUNTS HOSTEL)">
                  MAPS COLLEGE (BUNTS HOSTEL)
                </option>
                <option value="MANGALORE INSTITUTE OF TECHNOLOGY AND ENGINEERING (MITE)">
                  MANGALORE INSTITUTE OF TECHNOLOGY AND ENGINEERING (MITE)
                </option>
                <option value="MANGALORE UNIVERSITY">
                  MANGALORE UNIVERSITY
                </option>
                <option value="NEHRU MEMORIAL COLLEGE, SULLIA">
                  NEHRU MEMORIAL COLLEGE, SULLIA
                </option>
                <option value="NITK SURATHKAL">NITK SURATHKAL</option>
                <option value="NITTE MAHALINGA ADYANTAYA MEMORIAL INSTITUTION (NITTE)">
                  NITTE MAHALINGA ADYANTAYA MEMORIAL INSTITUTION (NITTE)
                </option>
                <option value="PADUA COLLEGE (MANGALORE)">
                  PADUA COLLEGE (MANGALORE)
                </option>
                <option value="POORNAPRAJNA COLLEGE (AUTONOMOUS) UDUPI">
                  POORNAPRAJNA COLLEGE (AUTONOMOUS) UDUPI
                </option>
                <option value="SACRED HEART COLLEGE MADANTHYAR">
                  SACRED HEART COLLEGE MADANTHYAR
                </option>
                <option value="SDIT BALLALBAGH">SDIT BALLALBAGH</option>
                <option value="SDM UG BALLALBAGH">SDM UG BALLALBAGH</option>
                <option value="SDM UJIRE">SDM UJIRE</option>
                <option value="SRI BHUVANENDRA COLLEGE KARKALLA">
                  SRI BHUVANENDRA COLLEGE KARKALLA
                </option>
                <option value="SRI DHAVALA COLLEGE MOODBIDRI">
                  SRI DHAVALA COLLEGE MOODBIDRI
                </option>
                <option value="SRI RAMAKRISHNA COLLEGE MANGALORE">
                  SRI RAMAKRISHNA COLLEGE MANGALORE
                </option>
                <option value="SRINIVAS INSTITUTE OF TECHNOLOGY (S.I.T) VALACHIL">
                  SRINIVAS INSTITUTE OF TECHNOLOGY (S.I.T) VALACHIL
                </option>
                <option value="SRINIVAS UNIVERSITY PANDESHWAR">
                  SRINIVAS UNIVERSITY PANDESHWAR
                </option>
                <option value="ST JOSEPH COLLEGE VAMANJOOR">
                  ST JOSEPH COLLEGE VAMANJOOR
                </option>
                <option value="ST PHILOMENA COLLEGE (AUTONOMOUS), PUTTUR">
                  ST PHILOMENA COLLEGE (AUTONOMOUS), PUTTUR
                </option>
                <option value="ST RAYMONDS">ST RAYMONDS</option>
                <option value="ST. AGNES COLLEGE (AUTONOMOUS) MANGALORE">
                  ST. AGNES COLLEGE (AUTONOMOUS) MANGALORE
                </option>
                <option value="TRISHA COLLEGE">TRISHA COLLEGE</option>
                <option value="UNIVERSITY COLLEGE, MANGALORE">
                  UNIVERSITY COLLEGE, MANGALORE
                </option>
                <option value="VIVEKANANDA COLLEGE OF ENGINEERING & TECHNOLOGY, PUTTUR">
                  VIVEKANANDA COLLEGE OF ENGINEERING & TECHNOLOGY, PUTTUR
                </option>
                <option value="VIVEKANANDA DEGREE COLLEGE PUTTUR">
                  VIVEKANANDA DEGREE COLLEGE PUTTUR
                </option>
                <option value="YENEPOYA (DEEMED TO BE UNIVERSITY) MANGALORE">
                  YENEPOYA (DEEMED TO BE UNIVERSITY) MANGALORE
                </option>
                <option>Others</option>
              </select>
              {errors.collegeName && (
                <span className="error">{errors.collegeName}</span>
              )}
              {/* Show the input field only if "Others" is selected */}
              {showOtherCollege && (
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="otherCollege">Enter College Name:</label>
                    <input
                      type="text"
                      id="otherCollege"
                      name="otherCollege"
                      placeholder="Please enter your college name"
                      value={otherCollegeName}
                      onChange={handleOtherCollegeChange}
                      required
                    />
                  </div>
                </div>
              )}

            </div>
            <div className="form-group">
              <label htmlFor="course">Course:</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
              >
                <option>UG</option>
                <option>PG</option>
              </select>
            </div>
          </div>


          <div className="form-row">
            <div className="form-group">
              <label htmlFor="hodName">HOD Name:</label>
              <input
                type="text"
                id="hodName"
                name="hodName"
                value={formData.hodName}
                onChange={handleInputChange}
                required
              />
              {errors.hodName && <span className="error">{errors.hodName}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="hodPhone">HOD Phone no:</label>
              <input
                type="number"
                id="hodPhone"
                name="hodPhone"
                value={formData.hodPhone}
                onChange={handleInputChange}
                required
              />
              {errors.hodPhone && <span className="error">{errors.hodPhone}</span>}
            </div>
          </div>


          {/* Show text input for "Others" college name */}

          {/* Events Section */}
          <h2 style={{ fontFamily: 'Avengers', textAlign: 'center', marginBottom: 10 }}>Events</h2>
          {errors.events && <span className="error">{errors.events}</span>}

          {/* Toggle Buttons for Technical and Cultural Events */}
          <div className="event-toggle-buttons">
            <button
              type="button"
              className={`toggle-button ${activeSection === "technical" ? "active" : ""
                }`}
              onClick={() => setActiveSection("technical")}
            >
              Technical Events
            </button>
            <button
              type="button"
              className={`toggle-button ${activeSection === "cultural" ? "active" : ""
                }`}
              onClick={() => setActiveSection("cultural")}
            >
              Cultural Events
            </button>
          </div>

          {/* Technical Events Section */}
          {activeSection === "technical" && (
            <div className="events-grid">
              <div className="event-section">
                <h3 style={{ marginTop: 15, textAlign: 'center', fontFamily: 'Avengers' }}>Technical Events</h3>
                {Object.keys(events).map((event) => (
                  <div className="event-group" key={event}>
                    <label>
                      <input
                        type="checkbox"
                        name={event}
                        checked={events[event]}
                        onChange={handleCheckboxChange}
                      />
                      
                      {event === "coding" ||
                        event === "webDesigning" ||
                        event === "gaming"
                        ? `${event
                          .replace(/([A-Z])/g, " $1")
                          .toUpperCase()} (UG + PG)`
                        : `${event
                          .replace(/([A-Z])/g, " $1")
                          .toUpperCase()} (PG only)`}
                    </label>
                    {events[event] && (
                      <div className="event-details">
                        {event === "gaming" ? (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                              className={
                                errors[`${event}-participant1`] ? "error" : ""
                              }
                            />
                            {errors[`${event}-participant1`] && (
                              <span className="error">
                                {errors[`${event}-participant1`]}
                              </span>
                            )}
                            <input
                              type="text"
                              placeholder="Participant 2"
                              name="participant2"
                              value={eventDetails[event].participant2}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                              className={
                                errors[`${event}-participant2`] ? "error" : ""
                              }
                            />
                            {errors[`${event}-participant2`] && (
                              <span className="error">
                                {errors[`${event}-participant2`]}
                              </span>
                            )}
                            <input
                              type="text"
                              placeholder="Participant 3"
                              name="participant3"
                              value={eventDetails[event].participant3}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                              className={
                                errors[`${event}-participant3`] ? "error" : ""
                              }
                            />
                            {errors[`${event}-participant3`] && (
                              <span className="error">
                                {errors[`${event}-participant3`]}
                              </span>
                            )}
                            <input
                              type="text"
                              placeholder="Participant 4"
                              name="participant4"
                              value={eventDetails[event].participant4}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                              className={
                                errors[`${event}-participant4`] ? "error" : ""
                              }
                            />
                            {errors[`${event}-participant4`] && (
                              <span className="error">
                                {errors[`${event}-participant4`]}
                              </span>
                            )}
                          </>
                        ) : event === "itManager" ? (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                              className={
                                errors[`${event}-participant1`] ? "error" : ""
                              }
                            />
                            {errors[`${event}-participant1`] && (
                              <span className="error">
                                {errors[`${event}-participant1`]}
                              </span>
                            )}
                          </>
                        ) : (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                              className={
                                errors[`${event}-participant1`] ? "error" : ""
                              }
                            />
                            {errors[`${event}-participant1`] && (
                              <span className="error">
                                {errors[`${event}-participant1`]}
                              </span>
                            )}
                            <input
                              type="text"
                              placeholder="Participant 2"
                              name="participant2"
                              value={eventDetails[event].participant2}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                              className={
                                errors[`${event}-participant2`] ? "error" : ""
                              }
                            />
                            {errors[`${event}-participant2`] && (
                              <span className="error">
                                {errors[`${event}-participant2`]}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cultural Events Section */}
          {activeSection === "cultural" && (
            <div className="events-grid">
              <div className="event-section">
                <h3 style={{ marginTop: 15, textAlign: 'center', fontFamily: 'Avengers' }}>Cultural Events</h3>
                {Object.keys(culturalEvents).map((event) => (
                  <div className="event-group" key={event}>
                    <label>
                      <input
                        type="checkbox"
                        name={event}
                        checked={culturalEvents[event]}
                        onChange={handleCulturalCheckboxChange}
                      />
                      {/* Add (UG + PG) to the checkbox label */}
                      {event === "adVengers" ||
                        event === "zenblaze" ||
                        event === "aura" ||
                        event === "hiddenTrail" ||
                        event === "iris" ||
                        event === "movieQuiz" ||
                        event === "spectra"
                        ? `${event
                          .replace(/([A-Z])/g, " $1")
                          .toUpperCase()} (UG + PG)`
                        : event.replace(/([A-Z])/g, " $1").toUpperCase()}
                    </label>
                    {culturalEvents[event] && (
                      <div className="event-details">
                        {event === "adVengers" ? (
                          <>
                            {[...Array(5)].map((_, i) => (
                              <input
                                key={`participant${i + 1}`}
                                type="text"
                                placeholder={`Participant ${i + 1}`}
                                name={`participant${i + 1}`}
                                value={
                                  eventDetails[event][`participant${i + 1}`]
                                }
                                onChange={(e) =>
                                  handleEventDetailChange(e, event)
                                }
                                required
                                className={
                                  errors[`${event}-participant${i + 1}`]
                                    ? "error"
                                    : ""
                                }
                              />
                            ))}
                          </>
                        ) : event === "zenblaze" ? (
                          <>
                            {[...Array(8)].map((_, i) => (
                              <input
                                key={`participant${i + 1}`}
                                type="text"
                                placeholder={`Participant ${i + 1}`}
                                name={`participant${i + 1}`}
                                value={
                                  eventDetails[event][`participant${i + 1}`]
                                }
                                onChange={(e) =>
                                  handleEventDetailChange(e, event)
                                }
                                required
                                className={
                                  errors[`${event}-participant${i + 1}`]
                                    ? "error"
                                    : ""
                                }
                              />
                            ))}
                          </>
                        ) : event === "aura" ? (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                              className={
                                errors[`${event}-participant1`] ? "error" : ""
                              }
                            />
                          </>
                        ) : (
                          <>
                            <input
                              type="text"
                              placeholder="Participant 1"
                              name="participant1"
                              value={eventDetails[event].participant1}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                              className={
                                errors[`${event}-participant1`] ? "error" : ""
                              }
                            />
                            <input
                              type="text"
                              placeholder="Participant 2"
                              name="participant2"
                              value={eventDetails[event].participant2}
                              onChange={(e) =>
                                handleEventDetailChange(e, event)
                              }
                              required
                            />
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 style={{ fontFamily: 'Avengers', fontSize: 22 }}>Total Payment : ₹{totalAmount}</h3>
          </div>

          {/* Pay Button */}
          <button type="button" className="pay-button" onClick={() => {
            if (validateForm()) {
              setToggleModal(true);
            } else {
              alert("Please fill out the form correctly.");
            }
          }}><p>Proceed</p></button>

          {/* Query Section */}
          <div className="query-section">
            <p style={{ fontWeight: "bold", fontFamily: 'roboto', marginTop: 10 }}>
              If any query, call: &nbsp; Bharathesh : 6360724901  /  7483727634
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;