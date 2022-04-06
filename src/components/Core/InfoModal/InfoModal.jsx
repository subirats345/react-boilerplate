import React from "react";

// TODO: try to implement this info modal function!

const InfoModal = ({ show }) => {
  const [displayModal, setDisplayModal] = React.useState(true);

  const modalToggler = () => {
    setTimeout(() => setDisplayModal(false), 2000);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 transition ease-in-out ${
        !displayModal ? "opacity-0" : "opacity-100"
      }`}
      onClick={modalToggler}>
      <div className="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>12 unread messages. Tap to see.</span>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
