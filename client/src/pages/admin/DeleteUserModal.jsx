import Modal from "react-modal";
import axios from "axios";

const DeleteCategoryModal = ({
  isOpen,
  onClose,
  categoryId,
  onUpdateCategories,
}) => {
  const handleDelete = () => {
    // Perform the deletion logic here
    axios
      .delete(`http://localhost:4000/delete/category/${categoryId}`)
      .then((response) => {
        console.log("Danh mục đã được xóa:", response.data);
        onUpdateCategories(); // You may or may not need to update categories after deletion
        onClose();
      })
      .catch((error) => {
        console.error("Lỗi khi xóa danh mục:", error);
      });
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Xác nhận xóa danh mục"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 text-center shadow-md w-auto max-w-full"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div className="m-auto w-[70px] h-[70px] rounded-[50%] border-[3px] border-yellow flex justify-center items-center mb-[20px]">
        <i className="text-[40px] text-yellow fa-solid fa-exclamation"></i>
      </div>
      <h2 className="text-[18px] font-bold mb-4">Xác nhận xóa danh mục</h2>
      <p className="mb-6 text-[14px]">
        Bạn có chắc chắn muốn xóa danh mục này?
      </p>
      <div className="flex justify-center items-center">
        <button
          className="bg-red-500 hover:bg-red-700 transition text-white py-2 px-5 rounded mr-2"
          onClick={handleDelete}
        >
          Xóa
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 transition text-black py-2 px-4 rounded"
          onClick={onClose}
        >
          Hủy
        </button>
      </div>
    </Modal>
  );
};

export default DeleteCategoryModal;
