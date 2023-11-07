import { useState, useRef } from "react";
import axios from "axios";

function CreateCategory() {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    image: "",
  });
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", category.name);
    formData.append("description", category.description);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:4000/create/category",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Lỗi khi thêm danh mục:", error);
    }
  };

  return (
    <div>
      <h1>Thêm Danh Mục Mới</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên Danh Mục:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={category.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Mô Tả:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={category.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Hình ảnh:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            ref={imageInputRef}
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Thêm Danh Mục</button>
      </form>
    </div>
  );
}

export default CreateCategory;
