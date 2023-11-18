import React from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    maxWidth: "300px",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
  },
};

const SuccessModal = ({ isOpen, message, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup Thành công"
      style={customStyles}
    >
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">Thêm danh mục thành công!</h2>
        <p className="text-gray-700">{message}</p>
        <button onClick={onRequestClose}>OK</button>
      </div>
    </Modal>
  );
};

export default SuccessModal;
