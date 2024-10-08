import React from "react";
import { X } from "@phosphor-icons/react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 z-20">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X size={32} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
