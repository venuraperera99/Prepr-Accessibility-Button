// AccessibilityButton.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './AccessibilityButton.css'; // Import the CSS file

import { FaBoltLightning, FaEye, FaBoxArchive  } from "react-icons/fa6";
import { ImTarget } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiSoundWaves } from "react-icons/gi";

const AccessibilityButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [seizureSafeToggle, setSeizureSafeToggle] = useState(false); // Added state for toggle button


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleSeizureSafe = () => {
    setSeizureSafeToggle((prevToggle) => !prevToggle);
  };

  
  const resetSettings = () => {
    setSeizureSafeToggle(false); // Reset example state
  };

  return (
    <div className="button-container">
      <button className="accessibility-button" onClick={openModal}>
        <img src="wheelchair-icon.png" alt="Wheelchair Icon" style={{ width: '24px', height: '24px' }} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '40%',
            height: '80%',
            margin: 'auto',
            overflow: 'auto',
            position: 'relative',
            backgroundColor: '#ececf4', // Background color for the main div
          },
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <button className="close-button" onClick={closeModal}>
              X
            </button>
            <h2>Accessibility Adjustments</h2>
            <div className="header-buttons">
              <span className="header-button" onClick={resetSettings}>Reset Settings</span>
              <span className="header-button">Statement</span>
              <span className="header-button">Hide Interface</span>
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Unclear content? Search in dictionary..."
                className="custom-input"
              />
            </div>
          </div>
          <div className="card-container">
            {/* First Card */}
            <div className="card">
  <h4>Choose the right accessibility profile for you</h4>
  <ul className="profile-list">
  <li>
  <div className="profile-button-container">
                    <button
                      className={`profile-button ${seizureSafeToggle ? 'on selected' : 'off'}`}
                      onClick={toggleSeizureSafe}
                    >
                      On
                    </button>
                    <button
                      className={`profile-button ${!seizureSafeToggle ? 'off selected' : 'on'}`}
                      onClick={toggleSeizureSafe}
                    >
                      Off
                    </button>
                  </div>
      <div className="profile-content">
        <span className="profile-title">Seizure Safe Profile</span>
        <p>Clear flashes & reduces color</p>
      </div>
      <div className="gray-circle"> <FaBoltLightning /> </div>
    </li>
    <li>
    <div className="profile-button-container">
                    <button
                      className={`profile-button ${seizureSafeToggle ? 'on selected' : 'off'}`}
                      onClick={toggleSeizureSafe}
                    >
                      On
                    </button>
                    <button
                      className={`profile-button ${!seizureSafeToggle ? 'off selected' : 'on'}`}
                      onClick={toggleSeizureSafe}
                    >
                      Off
                    </button>
                  </div>
      <div className="profile-content">
        <span className="profile-title">Vision Impared Profile</span>
        <p>Enhances website's sisuals</p>
      </div>
      <div className="gray-circle"> <FaEye /></div>
    </li>
    <li>
    <div className="profile-button-container">
                    <button
                      className={`profile-button ${seizureSafeToggle ? 'on selected' : 'off'}`}
                      onClick={toggleSeizureSafe}
                    >
                      On
                    </button>
                    <button
                      className={`profile-button ${!seizureSafeToggle ? 'off selected' : 'on'}`}
                      onClick={toggleSeizureSafe}
                    >
                      Off
                    </button>
                  </div>
      <div className="profile-content">
        <span className="profile-title">ADHD Friendly Profile</span>
        <p>More focus & fewer distractions</p>
      </div>
      <div className="gray-circle"><FaBoxArchive /></div>
    </li>
    <li>
    <div className="profile-button-container">
                    <button
                      className={`profile-button ${seizureSafeToggle ? 'on selected' : 'off'}`}
                      onClick={toggleSeizureSafe}
                    >
                      On
                    </button>
                    <button
                      className={`profile-button ${!seizureSafeToggle ? 'off selected' : 'on'}`}
                      onClick={toggleSeizureSafe}
                    >
                      Off
                    </button>
                  </div>
      <div className="profile-content">
        <span className="profile-title">Cognitive Disability Profile</span>
        <p>Assists with reading & focusing</p>
      </div>
      <div className="gray-circle"><ImTarget /></div>
    </li>
    <li>
    <div className="profile-button-container">
                    <button
                      className={`profile-button ${seizureSafeToggle ? 'on selected' : 'off'}`}
                      onClick={toggleSeizureSafe}
                    >
                      On
                    </button>
                    <button
                      className={`profile-button ${!seizureSafeToggle ? 'off selected' : 'on'}`}
                      onClick={toggleSeizureSafe}
                    >
                      Off
                    </button>
                  </div>
      <div className="profile-content">
        <span className="profile-title">Keyboard Nativation Motor</span>
        <p>Use website with the keyboard</p>
      </div>
      <div className="gray-circle"><FaLongArrowAltRight /></div>
    </li>
    <li>
    <div className="profile-button-container">
                    <button
                      className={`profile-button ${seizureSafeToggle ? 'on selected' : 'off'}`}
                      onClick={toggleSeizureSafe}
                    >
                      On
                    </button>
                    <button
                      className={`profile-button ${!seizureSafeToggle ? 'off selected' : 'on'}`}
                      onClick={toggleSeizureSafe}
                    >
                      Off
                    </button>
                  </div>
      <div className="profile-content">
        <span className="profile-title">Blind Users Screen Reader</span>
        <p>Optimize website for screen readers</p>
      </div>
      <div className="gray-circle"><GiSoundWaves /></div>
    </li>
  </ul>
</div>
            {/* Second Card */}
            <div className="card">
  <h4>Content Adjustments</h4>
  <div className="box-container">
    <div className="box span2">
      <h5>Title 1</h5>
      <p>Content Scaling</p>
    </div>
    <div className="box">
      <h5>Title 2</h5>
      <p>Readable Font</p>
    </div>
    <div className="box">
      <h5>Title 3</h5>
      <p>Highlight Tiles</p>
    </div>
    <div className="box">
      <h5>Title 4</h5>
      <p>Highlight Links</p>
    </div>
    <div className="box">
      <h5>Title 1</h5>
      <p>Text Magnifier</p>
    </div>
    <div className="box span2">
      <h5>Title 2</h5>
      <p>Adjust Font Sizing</p>
    </div>
    <div className="box">
      <h5>Title 3</h5>
      <p>Align Center</p>
    </div>
    <div className="box span2">
      <h5>Title 4</h5>
      <p>Adjust Line Height</p>
    </div>
    <div className="box">
      <h5>Title 1</h5>
      <p>Align Left</p>
    </div>
    <div className="box span2">
      <h5>Title 2</h5>
      <p>Adjust Letter Spacing</p>
    </div>
    <div className="box">
      <h5>Title 3</h5>
      <p>Align Right</p>
    </div>
  </div>
</div>
            {/* Third Card */}
            <div className="card">
  <h4>Color Adjustments</h4>
  <div className="box-container color-adjustments">

    <div className="box">
      <h5>Title 2</h5>
      <p>Dark Contrast</p>
    </div>
    <div className="box">
      <h5>Title 3</h5>
      <p>Light Contrast</p>
    </div>
    <div className="box">
      <h5>Title 4</h5>
      <p>High Contrast</p>
    </div>
    <div className="box">
      <h5>Title 1</h5>
      <p>High Saturation</p>
    </div>
    <div className="box span2">
      <h5>Title 2</h5>
      <p>Adjust Text Colors</p>
    </div>
    <div className="box">
      <h5>Title 1</h5>
      <p>Monochome</p>
    </div>
    <div className="box span2">
      <h5>Title 3</h5>
      <p>Adjust Tile Colors</p>
    </div>
    <div className="box">
      <h5>Title 4</h5>
      <p>Low Saturation</p>
    </div>
    <div className="box span2">
      <h5>Title 4</h5>
      <p>Adjust Background Colors</p>
    </div>
  </div>
</div>
            {/* Fourth Card */}
            <div className="card">
  <h4>Orientation Adjustments</h4>
  <div className="box-container orientation-adjustments">
    <div className="box">
      <h5>Title 1</h5>
      <p>Mute sounds</p>
    </div>
    <div className="box">
      <h5>Title 2</h5>
      <p>Hide Images</p>
    </div>
    <div className="box">
      <h5>Title 3</h5>
      <p>Read Mode</p>
    </div>
    <div className="box">
      <h5>Title 4</h5>
      <p>Reading Guide</p>
    </div>
    <div className="box span2">
      <h5>Title 1</h5>
      <p>Useful Links</p>
    </div>
    <div className="box">
      <h5>Title 2</h5>
      <p>Stop Animations</p>
    </div>
    <div className="box">
      <h5>Title 3</h5>
      <p>Reading Mask</p>
    </div>
    <div className="box">
      <h5>Title 2</h5>
      <p>Highlight Hover</p>
    </div>
    <div className="box">
      <h5>Title 3</h5>
      <p>Highlight Focus</p>
    </div>
    <div className="box">
      <h5>Title 2</h5>
      <p>Big Black Cursor</p>
    </div>
    <div className="box">
      <h5>Title 3</h5>
      <p>Big White Cursor</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AccessibilityButton;
