// PaymentSuccessPopup.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccessPopup = ({ setIsSuccess }) => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const closePopup = () => {
    setIsOpen(false);
    setIsSuccess(false);
    navigate("/dashboard");
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <svg
              className="w-16 h-16 text-green-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2l4 -4"
              />
            </svg>
            <h2 className="text-2xl font-semibold mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">Thank you for your payment.</p>
            <button
              onClick={closePopup}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PaymentSuccessPopup;
