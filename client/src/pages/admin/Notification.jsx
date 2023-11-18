import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSuccess = () => {
    setIsLoading(true);

    setTimeout(() => {
      toast.success("Thành công!", {
        autoClose: 4000,
        hideProgressBar: true,
        onClose: () => setIsLoading(false),
      });
    }, 2000);
  };

  const handleFailure = () => {
    setIsLoading(true);

    setTimeout(() => {
      toast.error("Thất bại!", {
        autoClose: 4000,
        hideProgressBar: true,
        onClose: () => setIsLoading(false),
      });
    }, 2000);
  };

  return (
    <>
      <button onClick={handleSuccess}>Thành công</button>
      <button onClick={handleFailure}>Thất bại</button>
      {isLoading && <div className="loader">Loading...</div>}
      <ToastContainer position="top-right" />
    </>
  );
};

export default Notification;
