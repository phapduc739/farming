import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CreateProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    categoryID: "",
  });
  const [images, setImages] = useState([]);
  const imageInputRef = useRef();
  const [categories, setCategories] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("categoryID", product.categoryID);

    images.forEach((image, index) => {
      formData.append("images", image, `image${index}.png`);
    });

    try {
      await axios.post("http://localhost:4000/create/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Sản phẩm đã được thêm thành công.");
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
    }
  };

  useEffect(() => {
    // Truy vấn danh sách danh mục từ cơ sở dữ liệu
    axios.get("http://localhost:4000/list/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Thêm Sản Phẩm Mới</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên Sản Phẩm:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="categoryID">Danh Mục:</label>
          <select
            id="categoryID"
            name="categoryID"
            value={product.categoryID}
            onChange={handleInputChange}
            required
          >
            <option value="">Chọn danh mục</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="description">Mô Tả:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Giá:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="images">Hình ảnh (tải lên nhiều hình):</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            ref={imageInputRef}
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Thêm Sản Phẩm</button>
      </form>
      <Link to="/list/product">Back to List Product</Link>
    </div>
  );
}

export default CreateProduct;
