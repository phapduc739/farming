import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/list/products") // Thay đổi đường dẫn API của bạn tại đây
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Hàm để xử lý sự kiện khi nút chỉnh sửa được nhấn
  const handleEditClick = (productId) => {
    navigate(`/edit/product/${productId}`);
  };
  const handleDeleteClick = (productId) => {
    navigate(`/delete/product/${productId}`);
  };

  return (
    <div>
      <Link to="/create/product">Create Product</Link>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map((product) => (
          <li key={`${product.name}-${product.description}-${product.price}`}>
            <h1>Mã sản phẩm: {product.id}</h1>
            <h2>Tên sản phẩm: {product.name}</h2>
            <h2>Danh mục: {product.category_name}</h2>
            <p>Mô tả sản phẩm: {product.description}</p>
            <p>Giá: {product.price}</p>
            <div>
              {product.images.map((image, index) => (
                <img
                  style={{ width: "100px", marginRight: "20px" }}
                  key={`${product.name}-${product.description}-${product.price}-${index}`}
                  src={`http://localhost:4000/${image}`}
                  alt={`Hình ảnh sản phẩm ${product.name}`}
                />
              ))}
            </div>
            <button onClick={() => handleEditClick(product.id)}>
              Chỉnh sửa
            </button>
            <button onClick={() => handleDeleteClick(product.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
