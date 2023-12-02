import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Plus } from "react-feather";
import { addToCart } from "../../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);
  const role = useSelector((state) => state.user.role);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/list/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      // Dispatch action to add product to cart
      dispatch(addToCart(selectedProduct));
    }
  };

  const formatPrice = (price) => {
    const formattedPrice = Number(price).toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });

    return formattedPrice;
  };

  return (
    <>
      {products.map((product) => (
        <Link
          to={`/product-detail/${product.id}`}
          key={product.id}
          className="item-product w-full flex flex-col items-center gap-3 p-3 border hover:border-primaryGreen transition"
        >
          <div className="w-[170px] h-[140px]">
            <img
              className="w-full h-full object-cover border"
              src={`http://localhost:4000/${
                product.images && product.images.length > 0
                  ? product.images[0]
                  : ""
              }`}
              alt={product.name}
            />
          </div>

          <h5 className="text-[16px] text-text2222 font-normal">
            {product.name.length > 18
              ? `${product.name.slice(0, 18)}...`
              : product.name}{" "}
          </h5>
          <div className="flex justify-between items-center gap-2">
            <h6 className="text-[15px] text-primaryGreen font-[600]">
              {formatPrice(product.price)}
            </h6>
          </div>
          <div className="flex justify-between items-center gap-2">
            <h6
              className={`text-[15px] font-[600] ${
                product.status === "Còn hàng"
                  ? "text-primaryGreen"
                  : "text-red-500"
              }`}
            >
              {product.status === "Còn hàng"
                ? `Còn hàng (${product.quantity} ${product.unit})`
                : "Hết hàng"}
            </h6>
          </div>
          <button
            className={`relative w-full bg-lineGray hover:bg-slate-200 rounded-[50px] p-[8px] flex justify-center items-center gap-2 text-[16px] font-[400] hover:text-text2222 transition ${
              product.status === "Hết hàng" || role === "Seller"
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              // Kiểm tra nếu role là Seller thì không thực hiện hành động
              if (role !== "Seller") {
                handleAddToCart(product.id);
              }
            }}
            disabled={product.status === "Hết hàng" || role === "Seller"}
          >
            Thêm
            <div className="absolute right-1 rounded-[50px] p-[7px] bg-white">
              <Plus size={18} color="#0DA487" />
            </div>
          </button>
        </Link>
      ))}
    </>
  );
};

export default ProductList;
