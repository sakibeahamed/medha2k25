import React from 'react';

const PrivacyPolicy = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      backgroundColor: 'white',
      margin: '0 auto',
      padding: '20px',
      lineHeight: '1.6',
      color: '#333',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#2c3e50',
      marginTop: '100px',
    },
    section: {
      marginBottom: '30px',
    },
    sectionHeader: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
      color: '#34495e',
    },
    text: {
      fontSize: '16px',
      marginBottom: '15px',
    },
    list: {
      marginLeft: '20px',
      marginBottom: '15px',
    },
    link: {
      color: '#3498db',
      textDecoration: 'none',
    },
    contactInfo: {
      marginTop: '20px',
      padding: '15px',
      backgroundColor: '#ecf0f1',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Privacy Policy</h1>
      <p style={styles.text}>Last updated: February 18, 2025</p>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Welcome to Medha!</h2>
        <p style={styles.text}>
          At Medha, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you access or use our website located at{' '}
          <a href="https://Medha2k25.com" style={styles.link}>
            https://Medha2k25.com
          </a>{' '}
          (the "Service"). By using the Service, you agree to the practices described in this Privacy Policy.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>1. Information We Collect</h2>
        <p style={styles.text}>We collect different types of information when you use our Service, including:</p>
        <h3 style={styles.sectionHeader}>Personal Information</h3>
        <p style={styles.text}>
          When you register for events, make payments, or contact us, we may collect personal information such as:
        </p>
        <ul style={styles.list}>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>College/Institution</li>
          <li>Payment details (via Razorpay)</li>
        </ul>
        <h3 style={styles.sectionHeader}>Non-Personal Information</h3>
        <p style={styles.text}>We may also collect non-personal information such as:</p>
        <ul style={styles.list}>
          <li>Browser type</li>
          <li>IP address</li>
          <li>Device information</li>
          <li>Usage data (such as pages visited and time spent on the website)</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>2. How We Use Your Information</h2>
        <p style={styles.text}>We use the collected information to:</p>
        <ul style={styles.list}>
          <li>Process event registrations and payments.</li>
          <li>Provide you with necessary updates and event-related information.</li>
          <li>Improve our website and services.</li>
          <li>Communicate with you for customer support and feedback.</li>
          <li>Comply with legal obligations and protect our rights.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>3. Event Registration and Pricing</h2>
        <h3 style={styles.sectionHeader}>Event Registration Fees</h3>
        <p style={styles.text}>
          The registration fees for events on our website range from ₹100 to ₹150 per person. The exact fee will depend on the specific event category, and the fee will be clearly displayed at the time of registration.
        </p>
        <p style={styles.text}>
          By registering for an event, you agree to pay the applicable fee based on the event you are registering for.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>4. Payment Information</h2>
        <p style={styles.text}>
          We use Razorpay for payment processing. When you make a payment, Razorpay collects your payment details (credit/debit card information, etc.) to process the transaction. We do not store or process your payment information directly.
        </p>
        <p style={styles.text}>
          For more details on how Razorpay handles your payment information, please refer to their privacy policy and terms.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>5. Refunds and Cancellations</h2>
        <h3 style={styles.sectionHeader}>Refund Policy</h3>
        <p style={styles.text}>We offer refunds in the following circumstances:</p>
        <ul style={styles.list}>
          <li>
            <strong>Failed Payments:</strong> If a payment fails from your end, refunds will be processed within 2 to 3 business days by the bank.
          </li>
          <li>
            <strong>Canceled Registrations:</strong> If a registration is canceled before the event or due to issues with payment processing, refunds will be processed within 4 to 7 working days.
          </li>
        </ul>
        <p style={styles.text}>
          If your payment was not successfully completed, your registration will not be confirmed, and no event-related services will be provided.
        </p>
        <p style={styles.text}>
          To request a refund or in case of any issues with payments, please contact us at{' '}
          <a href="mailto:sditmcadept2022@gmail.com" style={styles.link}>
            sditmcadept2022@gmail.com
          </a>
          .
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>6. Data Retention</h2>
        <p style={styles.text}>
          We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. After this period, we will securely delete or anonymize your information.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>7. Cookies and Tracking Technologies</h2>
        <p style={styles.text}>
          Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and improve our services. Cookies are small text files placed on your device that allow us to recognize your browser and track your activity on the website.
        </p>
        <p style={styles.text}>
          You can control cookie settings through your browser settings. However, disabling cookies may affect your experience on our website.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>8. Sharing of Information</h2>
        <p style={styles.text}>
          We do not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your information with:
        </p>
        <ul style={styles.list}>
          <li>Service providers (such as Razorpay) to process payments and provide necessary services.</li>
          <li>Legal authorities if required to comply with applicable laws or legal processes.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>9. Security</h2>
        <p style={styles.text}>
          We take reasonable precautions to protect your personal information. We use SSL encryption for data transmission and store information in secure environments. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>10. Your Rights</h2>
        <p style={styles.text}>You have the right to:</p>
        <ul style={styles.list}>
          <li>Access, update, or correct your personal information.</li>
          <li>Request the deletion of your personal information.</li>
          <li>Object to or restrict the processing of your personal information.</li>
        </ul>
        <p style={styles.text}>To exercise your rights, please contact us at the details provided below.</p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>11. Third-Party Links</h2>
        <p style={styles.text}>
          Our website may contain links to third-party websites. These websites have their own privacy policies, and we do not control their content or practices. We encourage you to review their privacy policies before providing any personal information.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>12. Children’s Privacy</h2>
        <p style={styles.text}>
          Our Service is not intended for individuals under the age of 13, and we do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>13. Changes to This Privacy Policy</h2>
        <p style={styles.text}>
          We may update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last updated" date. Continued use of the Service after modifications implies acceptance of the updated Privacy Policy.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>14. Contact Us</h2>
        <div style={styles.contactInfo}>
          <p style={styles.text}>If you have any questions or concerns regarding this Privacy Policy, please contact us at:</p>
          <p style={styles.text}>
            Shree Devi Institute of Technology
            <br />
            Kenjar, Near Mangaluru International Airport, Karnataka - 574142
            <br />
            Email:{' '}
            <a href="mailto:sditmcadept2022@gmail.com" style={styles.link}>
              sditmcadept2022@gmail.com
            </a>
            <br />
            Phone: <a href="tel:+916360724901" style={styles.link}>+91 6360724901</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;