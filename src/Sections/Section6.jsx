import React from "react";
import { Link } from "react-router-dom";


const Section1 = () => {
  return (
    <section
    id="contact-section"
      style={{
        backgroundColor: "#000", // Fully black background
        color: "white",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom:"80px"
      }}
    >
      {/* Content Wrapper with Padding */}
      <div
        style={{
          width: "90%", // Leaves space on the sides
          maxWidth: "1200px", // Caps the max width
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Contact Section */}
        <div
          style={{
            flex: "1",
            textAlign: "left",
            padding: "10px 20px",
            minWidth: "250px",
            
          }}
        >
          <h3 style={{ fontSize: "1.5rem", color: "#01f9c6" }}>Contact</h3>
          <p style={{color:'white', margin: "12px 0" }}>Shree Devi Institute Of Technology</p>
          <p style={{color:'white', margin: "12px 0" }}>Airport Road, Kenjar,</p>
          <p style={{color:'white', margin: "12px 0" }}>Mangaluru - 575003,</p>
          <p style={{color:'white', margin: "12px 0" }}>Dakshina Kannada District, Karnataka</p>
          {/* <p style={{color:'white'}}>+91 6361600211</p> */}
          <p style={{color:'white', margin: "12px 0"  }}>sditmcadept2022@gmail.com</p>
          <p style={{ color: 'white', margin: '12px 0', display: 'flex', alignItems: 'center' }}>
  <i className='bx bxl-instagram' style={{ color: '#01f9c6', fontSize: '24px', marginRight: '5px' }}></i>
  <a href="https://www.instagram.com/mca_valee?igsh=dG1lNmgycG1rdzN3" target="_blank" style={{ color: "white", textDecoration: "none" }}>
    @mca_valee
  </a>
</p>

<p style={{ color: 'white', margin: '12px 0', display: 'flex', alignItems: 'center' }}>
  <i className='bx bxl-instagram' style={{ color: '#01f9c6', fontSize: '24px', marginRight: '5px' }}></i>
  <a href="https://www.instagram.com/medha_sdit?igsh=cTk2Y2RtbTI0MTlx" target="_blank" style={{ color: "white", textDecoration: "none" }}>
    @medha_sdit
  </a>
</p>


        </div>

        {/* Quick Links Section */}
        <div
          style={{
            flex: "1",
            textAlign: "left",
            padding: "10px 20px",
            minWidth: "250px",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", color: "#01f9c6" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ margin: "10px 0" }}>
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </a>
            </li>
            <li style={{ margin: "10px 0" }}>
              <a href="#about-section" style={{ textDecoration: "none", color: "white" }}>
                About
              </a>
            </li>
            <li style={{ margin: "10px 0" }}>
              <a href="#event-section" style={{ textDecoration: "none", color: "white" }}>
                Events
              </a>
            </li>
            
            <li style={{ margin: "10px 0" }}>
              <a href="/pdf/Brochure.pdf" download style={{ textDecoration: "none", color: "white" }}>
                Download Brochure
              </a>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div
          style={{
            flex: "1",
            padding: "10px 20px",
            minWidth: "250px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.308454073988!2d74.86545581871196!3d12.952103559035821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350d45819abf1%3A0xec9cf13e2e0ad60c!2sShree%20Devi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1737915439088!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: "12px",
            }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
      

      {/* Social Media Icons */}
      <div
        style={{
           // Fixing to the bottom of the screen
          bottom: "20px",      // Distance from the bottom of the viewport
          left: "50%",         // Centering the div horizontally
          // Ensure it stays centered
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          zIndex: "10", 
          color:"white",
                 // Ensuring the icons are above other content
        }}
      >
        <div >
        <Link to="/terms" style={{textDecoration:"none",color:"white"}}>Terms and Conditions</Link> &nbsp;|&nbsp;
        <Link to="/privacy" style={{textDecoration:"none",color:"white"}}>Privacy Policy</Link>
      </div>
        
         </div>
    </section>
  );
};

export default Section1;





