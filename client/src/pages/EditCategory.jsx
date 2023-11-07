import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditCategory() {
  const { categoryId } = useParams();

  const [category, setCategory] = useState({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    // Lấy thông tin hiện tại của danh mục từ cơ sở dữ liệu
    axios
      .get(`http://localhost:4000/category/${categoryId}`)
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Tải ảnh mới lên máy chủ và lấy tên hình ảnh từ máy chủ
      const response = await axios.post(
        "http://localhost:4000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Xóa ảnh cũ trên máy chủ nếu bạn muốn
      if (category.image) {
        await axios.delete(
          `http://localhost:4000/deleteImage/${category.image}`
        );
      }

      // Cập nhật đường dẫn hình ảnh trong trạng thái category
      setCategory({
        ...category,
        image: response.data.imageName,
      });

      console.log("Chỉnh sửa ảnh thành công.");

      console.log(category);
    } catch (error) {
      console.error("Lỗi khi chỉnh sửa ảnh:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, description, image } = category;

    try {
      // Gửi yêu cầu cập nhật thông tin danh mục
      const response2 = await axios.put(
        `http://localhost:4000/edit/category/${categoryId}`,
        {
          name,
          description,
          image,
        }
      );

      console.log("Chỉnh sửa danh mục thành công.");
      console.log(category);
    } catch (error) {
      console.error("Lỗi khi chỉnh sửa danh mục:", error);
    }
  };

  return (
    <div>
      <h1>Chỉnh Sửa Danh Mục</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="name">Tên Danh Mục:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={category.name}
            onChange={(e) => setCategory({ ...category, name: e.target.value })}
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
            onChange={(e) =>
              setCategory({ ...category, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="image">Hình ảnh:</label>
          {category.image && (
            <img
              style={{ width: "100px" }}
              src={`http://localhost:4000/${category.image}`}
              alt=""
            />
          )}
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Chỉnh Sửa Danh Mục</button>
      </form>
    </div>
  );
}

export default EditCategory;
