-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 03, 2023 lúc 07:54 AM
-- Phiên bản máy phục vụ: 10.4.28-MariaDB
-- Phiên bản PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `farmers_market`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `image`, `quantity`, `create_at`) VALUES
(96, 'Lúa gạo và ngũ cốc', 'Lúa gạo và ngũ cốc Đồng bằng sông Cửu Long', 'uploads\\image-1700471264611.png', '0', '2023-11-20 03:00:00'),
(97, 'Rau củ quả', 'Rau củ quả Đồng bằng sông Cửu Long', 'uploads\\image-1700471292329.png', '2', '2023-11-20 02:33:11'),
(98, 'Sản phẩm chế biến', 'Sản phẩm chế biến Đồng bằng sông Cửu Long', 'uploads\\image-1700471322458.png', '0', '2023-11-20 04:40:55'),
(99, 'Sản phẩm khác', 'Sản phẩm khác Đồng bằng sông Cửu Long', 'uploads\\image-1700471352075.png', '0', '2023-11-19 23:33:05'),
(100, 'Trái cây', 'Trái cây Đồng bằng sông Cửu Long', 'uploads\\image-1700736484555.png', '2', '2023-11-23 02:17:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `customer_name` varchar(255) NOT NULL,
  `shipping_address` varchar(255) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `status` varchar(255) NOT NULL,
  `order_code` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `customer_name`, `shipping_address`, `payment_method`, `total_price`, `status`, `order_code`, `created_at`) VALUES
(70, 39, 'Ngô Văn Đông', 'Mậu Thân, Phường An Phú, Quận Ninh Kiều, Thành phố Cần Thơ.', 'Thanh toán khi nhận hàng', 370560.00, 'Đang xử lý', '143876', '2023-12-02 19:30:52');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `unit` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `name`, `quantity`, `price`, `unit`) VALUES
(76, 70, 52, 'Dưa hấu An Giang', 2, 20000.00, 'Kg'),
(77, 70, 53, 'Thơm An Giang', 1, 25000.00, 'Kg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `categoryID` int(11) NOT NULL,
  `quantity` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `request` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `categoryID`, `quantity`, `status`, `request`, `unit`, `discount`, `user_id`, `created_at`) VALUES
(52, 'Dưa hấu An Giang', 'Dưa hấu An Giang là một biểu tượng của vị ngọt mát và tươi mới, được chọn lựa từ vùng đất màu mỡ An Giang, nơi có nguồn nước trong lành và khí hậu ấm áp. Những quả dưa hấu này không chỉ mang lại trải nghiệm ngon miệng mà còn là một nguồn nước tinh khiết đ', 10000.00, 100, '98', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 43, '2023-12-02 18:56:44'),
(53, 'Thơm An Giang', 'Thơm là một trạng thái nguyên vật liệu hoặc không khí phát ra mùi hương dễ chịu và dễ nhận biết. Nó là trải nghiệm giác quan mà nhiều người liên kết với sự sảng khoái và kích thích. Mỗi loại mùi hương thơm mang lại một cảm giác độc đáo, từ những hương hoa', 25000.00, 100, '49', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 43, '2023-12-02 19:08:24'),
(54, 'Chuối xanh', 'Chuối xanh, hay còn được gọi là chuối chín non, là một loại trái cây phổ biến và giàu chất dinh dưỡng. Với vỏ màu xanh, thịt chuối xanh có cấu trúc mềm mại và hương vị ngọt ngào. Trái chuối xanh thường được sử dụng trong nhiều món ăn tráng miệng, salad ho', 40000.00, 97, '45', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 40, '2023-12-03 05:30:55'),
(55, 'Cải thìa', 'Cải thìa, tên khoa học là Brassica rapa subsp. chinensis, là một loại rau xanh phổ biến và giàu dinh dưỡng. Rau cải thìa có những lá mềm mại, hình dáng mảnh mai và có thể nhận biết dễ dàng qua những bông hoa màu vàng nhỏ. Thường được trồng và sử dụng rộng', 7000.00, 97, '70', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 40, '2023-12-03 05:36:09');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image_url`) VALUES
(122, 53, 'uploads/images-1701544775370.png'),
(123, 53, 'uploads/images-1701544775374.png'),
(124, 53, 'uploads/images-1701544775375.png'),
(125, 53, 'uploads/images-1701544775379.png'),
(130, 52, 'uploads/images-1701544798770.png'),
(131, 52, 'uploads/images-1701544798773.png'),
(132, 52, 'uploads/images-1701544798774.png'),
(133, 52, 'uploads/images-1701544798775.png'),
(150, 54, 'uploads/images-1701581816263.png'),
(151, 54, 'uploads/images-1701581816264.png'),
(152, 54, 'uploads/images-1701581816265.png'),
(153, 54, 'uploads/images-1701581816266.png'),
(158, 55, 'uploads/images-1701584709294.png'),
(159, 55, 'uploads/images-1701584709296.png'),
(160, 55, 'uploads/images-1701584709298.png'),
(161, 55, 'uploads/images-1701584709299.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'user',
  `image` varchar(255) NOT NULL,
  `dateJoin` date DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `coordinates` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `image`, `dateJoin`, `status`, `payment_method`, `shipping_address`, `phone`, `coordinates`, `created_at`) VALUES
(39, 'Ngô Văn Đông', 'nvdong@gmail.com', '$2a$10$9zCwNw2Af6n5Tk3VWZ9kseEZZUxE5bHJfPWfpuYnGt9xfnap9cQfS', 'User', 'uploads\\image-1701192138852.png', '2023-11-20', 'Enable', 'Thanh toán khi nhận hàng', 'Mậu Thân, Phường An Phú, Quận Ninh Kiều, Thành phố Cần Thơ.', '0375627889', '{\"latitude\":10.0271854,\"longitude\":105.7769533}', '2023-11-24 07:35:17'),
(40, 'Nguyễn Thị Hân', 'nthan@gmail.com', '$2a$10$kAtV6HGJRNB/79etDq/pNOD1otpsY2ZCnBwCv3iumlii/9bTR.ToK', 'Seller', 'uploads\\image-1701542533490.png', '2023-11-20', 'Enable', 'Thanh toán khi nhận hàng', 'Trần Chiên, Phường Lê Bình, Quận Cái Răng, Thành phố Cần Thơ', '0376839667', '{\"latitude\":10.0046793,\"longitude\":105.7534159}', '2023-11-24 07:35:17'),
(41, 'Trần Văn Bằng', 'tvbang@gmail.com', '$2a$10$FXkE3OMjFCWPwxODgZXn8OUGoM.iTnXIynFzSMawkeoCpIKaaklyK', 'User', 'uploads\\image-1700471795782.png', '2023-11-20', 'Enable', '', NULL, NULL, '', '2023-11-24 07:35:17'),
(43, 'Lê Văn Dũng', 'lvdung@gmail.com', '$2a$10$hmfP77tKg2.iEfsD1StJPOeJMhjSxsxBDIJZKxEPC9WHcyBZdCIOO', 'Seller', 'uploads\\image-1700471850811.png', '2023-11-20', 'Enable', '', 'Phạm Văn Đồng, Phường Mỹ Phước, Thành phố Long Xuyên, Tỉnh An Giang', '0374777625', '{\"latitude\":10.36857,\"longitude\":105.4234}', '2023-11-24 07:35:17'),
(44, 'Admin Trần Khánh Huy', 'admintkhuy@gmail.com', '$2a$10$uAY/8DSd7rXghEDYmiSrO.tURsKmtmWH8QNRTZzergAxsO5X1re0i', 'Admin', 'uploads\\image-1700471909759.png', '2023-11-20', 'Enable', '', NULL, NULL, '', '2023-11-24 07:35:17'),
(45, 'Admin Nguyễn Trường Giang', 'adminntgiang@gmail.com', '$2b$10$hIp9FTF6dyyokXOEL9PFPuWVW4w3toqWCNptuUPGc52FrA/9CcTSG', 'Admin', 'uploads\\image-1701542155692.png', '2023-11-23', 'Enable', '', NULL, NULL, '', '2023-11-25 12:00:17');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_category` (`categoryID`),
  ADD KEY `fk_user` (`user_id`);

--
-- Chỉ mục cho bảng `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT cho bảng `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT cho bảng `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_category` FOREIGN KEY (`categoryID`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
