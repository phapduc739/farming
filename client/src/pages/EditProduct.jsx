import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
  });
  const [newImage, setNewImage] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/product/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [productId]);

  const handleDeleteImage = (imageId) => {
    axios
      .delete(`http://localhost:4000/delete/image/${productId}/${imageId}`)
      .then(() => {
        const updatedImages = product.images.filter(
          (image) => image.id !== imageId
        );
        setProduct({ ...product, images: updatedImages });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleAddNewImage = () => {
    if (newImage) {
      const formData = new FormData();
      formData.append("newImage", newImage);

      axios
        .post(`http://localhost:4000/product/${productId}/image`, formData)
        .then((response) => {
          // Cập nhật danh sách hình ảnh và đặt newImage thành null
          const updatedImages = [
            ...product.images,
            { id: response.data.id, url: response.data.image_url },
          ];
          setProduct({ ...product, images: updatedImages });
          setNewImage(null); // Đặt newImage thành null để chuẩn bị cho việc thêm ảnh tiếp theo
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("Please select a new image to add.");
    }
  };

  const handleNewImageUpload = (event) => {
    const file = event.target.files[0];
    setNewImage(file);
  };

  const handleFinishEditing = () => {
    navigate("/list/product");
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <div>
        {product.images.map((image, index) => (
          <div key={index}>
            <img
              key={image.id}
              style={{ width: "100px" }}
              src={`http://localhost:4000/${image.image_url}`}
              alt={`Product Image ${index}`}
            />
            <button onClick={() => handleDeleteImage(image.id)}>Delete</button>
            <br />
          </div>
        ))}
        <div>
          <input type="file" onChange={handleNewImageUpload} />
          <button onClick={handleAddNewImage}>Add New Image</button>
        </div>
        <button onClick={handleFinishEditing}>
          Hoàn thành chỉnh sửa sản phẩm
        </button>
      </div>
    </div>
  );
}

export default EditProduct;
