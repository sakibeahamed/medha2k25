import { useState } from 'react';
import './Modal.css';

export const Modal = ({ toggleModal, setToggleModal, transId, setTransId, paymentHandler }) => {
    const [screenshot, setScreenshot] = useState(null);

    const handleScreenshotChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setScreenshot(file);
        }
    };

    const handleProceed = () => {
        paymentHandler();
        setToggleModal(false);
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScNqvwY-5jkkskrQSg_FqaH95CXnedNovF78HME-pdJ6cluYw/viewform?usp=dialog", "_blank");
    };

    return (
        <>
            {toggleModal && <div className="modalOverlay"></div>}
            <div className={`modalMain ${toggleModal ? 'open' : ''}`}>
                <div className='modalInner'>
                    <span className="closeIcon" onClick={() => setToggleModal(false)}>×</span>
                    <img src="./qrcode.png" alt="QR Code" />
                    <button onClick={handleProceed}>
                        PROCEED
                    </button>
                </div>
            </div>
        </>
    );
};
