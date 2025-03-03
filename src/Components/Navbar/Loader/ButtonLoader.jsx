import React from 'react';
import 'boxicons'; // Make sure you import boxicons
import './Loader.css'; // Import the CSS file

const ButtonLoader = () => {
  return (
    <div className='loader-container'>
      {/* <box-icon name="loader" class="spin"></box-icon> */}
      <i className='bx bx-loader spin'></i>
    </div>
  );
}

export default ButtonLoader;
