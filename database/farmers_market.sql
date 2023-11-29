-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 29, 2023 lúc 05:04 AM
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
(96, 'Lúa gạo và ngũ cốc', 'Lúa gạo và ngũ cốc Đồng bằng sông Cửu Long', 'uploads\\image-1700471264611.png', '2', '2023-11-20 03:00:00'),
(97, 'Rau củ quả', 'Rau củ quả Đồng bằng sông Cửu Long', 'uploads\\image-1700471292329.png', '5', '2023-11-20 02:33:11'),
(98, 'Sản phẩm chế biến', 'Sản phẩm chế biến Đồng bằng sông Cửu Long', 'uploads\\image-1700471322458.png', '4', '2023-11-20 04:40:55'),
(99, 'Sản phẩm khác', 'Sản phẩm khác Đồng bằng sông Cửu Long', 'uploads\\image-1700471352075.png', '0', '2023-11-19 23:33:05'),
(100, 'Trái cây', 'Trái cây Đồng bằng sông Cửu Long', 'uploads\\image-1700736484555.png', '0', '2023-11-23 02:17:00');

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
(54, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 70000.00, 'Đang xử lý', '', '2023-11-25 06:20:38'),
(55, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 70000.00, 'Đang xử lý', '', '2023-11-25 06:21:45'),
(56, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 160000.00, 'Đang xử lý', '', '2023-11-25 07:36:03'),
(57, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 1375000.00, 'Đang xử lý', '', '2023-11-25 07:43:35'),
(58, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 1305000.00, 'Đang xử lý', '', '2023-11-25 07:48:11'),
(59, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 1740000.00, 'Đang xử lý', '', '2023-11-25 08:07:47'),
(60, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 285000.00, 'Đang xử lý', '', '2023-11-26 03:51:36'),
(61, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 790000.00, 'Đang xử lý', '', '2023-11-26 03:59:31'),
(62, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 305000.00, 'Đang xử lý', '', '2023-11-26 04:10:26'),
(63, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 160000.00, 'Đang xử lý', '', '2023-11-26 07:24:24'),
(64, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 1465000.00, 'Đang xử lý', '', '2023-11-26 07:37:59'),
(65, 40, 'Max', 'Địa chỉ: 3/2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ. Số điện thoại: 0374890472', 'Thanh toán khi nhận hàng', 1730000.00, 'Đang xử lý', '', '2023-11-26 08:52:05'),
(66, 40, 'Max', '3 tháng 2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ.', 'Thanh toán khi nhận hàng', 50933727.00, 'Đang xử lý', '', '2023-11-29 03:44:05'),
(67, 40, 'Max', '3 tháng 2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ.', 'Thanh toán khi nhận hàng', 34587942.00, 'Đang xử lý', '282369', '2023-11-29 03:50:11'),
(68, 40, 'Max', '3 tháng 2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ.', 'Thanh toán khi nhận hàng', 16344551.00, 'Đang xử lý', '115272', '2023-11-29 03:52:10');

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
(40, 54, 39, 'Cam sành', 2, 70000.00, ''),
(41, 55, 39, 'Cam sành', 2, 70000.00, ''),
(42, 56, 40, 'Nho nhập khẩu', 4, 160000.00, ''),
(43, 57, 43, 'Gạo ST25 Ông Cua', 5, 900000.00, ''),
(44, 57, 42, 'Hạt Điều Rang Bơ 500G', 5, 475000.00, ''),
(45, 58, 44, 'Gạo Thơm Vua Gạo Hương Việt', 3, 480000.00, ''),
(46, 58, 43, 'Gạo ST25 Ông Cua', 3, 540000.00, ''),
(47, 58, 42, 'Hạt Điều Rang Bơ 500G', 3, 285000.00, ''),
(48, 59, 41, 'Dưa hấu không hạt', 1, 30000.00, 'Kg'),
(49, 59, 42, 'Hạt Điều Rang Bơ 500G', 2, 190000.00, 'Túi'),
(50, 59, 43, 'Gạo ST25 Ông Cua', 4, 720000.00, 'Túi'),
(51, 59, 44, 'Gạo Thơm Vua Gạo Hương Việt', 5, 800000.00, 'Túi'),
(52, 60, 42, 'Hạt Điều Rang Bơ 500G', 3, 285000.00, 'Túi'),
(53, 61, 41, 'Dưa hấu không hạt', 2, 60000.00, 'Kg'),
(54, 61, 43, 'Gạo ST25 Ông Cua', 3, 540000.00, 'Túi'),
(55, 61, 44, 'Gạo Thơm Vua Gạo Hương Việt', 1, 160000.00, 'Túi'),
(56, 61, 45, 'Ngô xuất khẩu', 1, 30000.00, 'Kg'),
(57, 62, 43, 'Gạo ST25 Ông Cua', 1, 180000.00, 'Túi'),
(58, 62, 42, 'Hạt Điều Rang Bơ 500G', 1, 95000.00, 'Túi'),
(59, 62, 45, 'Ngô xuất khẩu', 1, 30000.00, 'Kg'),
(60, 63, 44, 'Gạo Thơm Vua Gạo Hương Việt', 1, 160000.00, 'Túi'),
(61, 64, 40, 'Nho nhập khẩu', 1, 40000.00, 'Kg'),
(62, 64, 41, 'Dưa hấu không hạt', 2, 60000.00, 'Kg'),
(63, 64, 42, 'Hạt Điều Rang Bơ 500G', 3, 285000.00, 'Túi'),
(64, 64, 43, 'Gạo ST25 Ông Cua', 6, 1080000.00, 'Túi'),
(65, 65, 42, 'Hạt Điều Rang Bơ 500G', 16, 1520000.00, 'Túi'),
(66, 65, 41, 'Dưa hấu không hạt', 1, 30000.00, 'Kg'),
(67, 65, 43, 'Gạo ST25 Ông Cua', 1, 180000.00, 'Túi'),
(68, 66, 51, 'Hoa', 1, 1111111.00, 'Kg'),
(69, 66, 50, 'cỏ', 1, 11111.00, 'Kg'),
(70, 66, 49, 'đá', 1, 12345.00, 'Kg'),
(71, 67, 51, 'Hoa', 1, 1111111.00, 'Kg'),
(72, 67, 50, 'cỏ', 1, 11111.00, 'Kg'),
(73, 68, 50, 'cỏ', 1, 11111.00, 'Kg');

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
(37, 'Táo Mỹ', 'Táo Mỹ nhập khẩu', 39000.00, 97, '0', 'Hết hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:08:46'),
(38, 'Chuối xuất khẩu', 'Chuối xuất khẩu nước ngoài', 27000.00, 97, '0', 'Hết hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:09:46'),
(39, 'Cam sành', 'Cam sành miền Tây', 35000.00, 98, '0', 'Hết hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:10:46'),
(40, 'Nho nhập khẩu', 'Nho nhập khẩu', 40000.00, 97, '25', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:11:46'),
(41, 'Dưa hấu không hạt', 'Dưa hấu không hạt', 30000.00, 97, '25', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:12:46'),
(42, 'Hạt Điều Rang Bơ 500G', 'Hạt Điều Rang Bơ 500G', 95000.00, 98, '0', 'Hết hàng', 'Đã duyệt', 'Túi', NULL, 45, '2023-11-25 03:13:46'),
(43, 'Gạo ST25 Ông Cua', 'Gạo ST25 Ông Cua', 180000.00, 96, '34', 'Còn hàng', 'Đã duyệt', 'Túi', NULL, 45, '2023-11-25 03:14:46'),
(44, 'Gạo Thơm Vua Gạo Hương Việt', 'Gạo Thơm Vua Gạo Hương Việt', 160000.00, 96, '0', 'Hết hàng', 'Đã duyệt', 'Túi', NULL, 45, '2023-11-25 03:15:46'),
(45, 'Ngô xuất khẩu', 'Ngô xuất khẩu', 30000.00, 100, '68', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:22:36'),
(49, 'đá', 'đá', 12345.00, 97, '121', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 55, '2023-11-28 17:48:01'),
(50, 'cỏ', 'cỏ', 11111.00, 98, '108', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 55, '2023-11-28 18:03:14'),
(51, 'Hoa', 'Hoa', 1111111.00, 98, '7', 'Còn hàng', 'Đang xét duyệt', 'Kg', NULL, 39, '2023-11-29 02:09:50');

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
(85, 37, 'uploads/images-1700879551893.png'),
(86, 38, 'uploads/images-1700879589439.png'),
(87, 39, 'uploads/images-1700879600340.png'),
(88, 40, 'uploads/images-1700879612256.png'),
(89, 41, 'uploads/images-1700879622213.png'),
(90, 42, 'uploads/images-1700879633208.png'),
(92, 43, 'uploads/images-1700879782569.png'),
(94, 44, 'uploads/images-1700881245250.png'),
(105, 45, 'uploads/images-1701194325493.png'),
(106, 49, 'uploads/images-1701194338065.png'),
(108, 50, 'uploads/images-1701194654688.png'),
(109, 51, 'uploads\\images-1701223790714.png');

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
(39, 'Emma', 'emma@gmail.com', '$2a$10$9zCwNw2Af6n5Tk3VWZ9kseEZZUxE5bHJfPWfpuYnGt9xfnap9cQfS', 'Seller', 'uploads\\image-1701192138852.png', '2023-11-20', 'Enable', '', '123, Xã Cao Chương Huyện Trùng Khánh, Tỉnh Cao Bằng', '123', '{\"latitude\":22.83333,\"longitude\":106.56074}', '2023-11-24 07:35:17'),
(40, 'Max', 'max@gamil.com', '$2a$10$kAtV6HGJRNB/79etDq/pNOD1otpsY2ZCnBwCv3iumlii/9bTR.ToK', 'User', 'uploads\\image-1700471773164.png', '2023-11-20', 'Disable', 'Thanh toán khi nhận hàng', '3 tháng 2, Phường Xuân Khánh, Quận Ninh Kiều, Thành phố Cần Thơ.', '777', '{\\\"latitude\\\":10.0306164,\\\"longitude\\\":105.7673942}', '2023-11-24 07:35:17'),
(41, 'Bean', 'bean@gmail.com', '$2a$10$FXkE3OMjFCWPwxODgZXn8OUGoM.iTnXIynFzSMawkeoCpIKaaklyK', 'User', 'uploads\\image-1700471795782.png', '2023-11-20', 'Enable', '', NULL, NULL, '', '2023-11-24 07:35:17'),
(42, 'Cox', 'cox@gmail.com', '$2a$10$eaP6iJrmhqlsvj2Ipf5CnOOJQYRMsnOyjJ01iBuXPyCAo3ew3mlsC', 'Seller', 'uploads\\image-1700471826941.png', '2023-11-20', 'Enable', '', NULL, NULL, '', '2023-11-24 07:35:17'),
(43, 'Fran', 'fran@gmail.com', '$2a$10$hmfP77tKg2.iEfsD1StJPOeJMhjSxsxBDIJZKxEPC9WHcyBZdCIOO', 'Seller', 'uploads\\image-1700471850811.png', '2023-11-20', 'Disable', '', NULL, NULL, '', '2023-11-24 07:35:17'),
(44, 'Dan', 'dan@gmail.com', '$2a$10$uAY/8DSd7rXghEDYmiSrO.tURsKmtmWH8QNRTZzergAxsO5X1re0i', 'User', 'uploads\\image-1700471909759.png', '2023-11-20', 'Enable', '', NULL, NULL, '', '2023-11-24 07:35:17'),
(45, 'Admin (John)', 'admin@gmail.com', '$2b$10$hIp9FTF6dyyokXOEL9PFPuWVW4w3toqWCNptuUPGc52FrA/9CcTSG', 'Admin', 'uploads\\image-1700736430197.png', '2023-11-23', 'Enable', '', NULL, NULL, '', '2023-11-25 12:00:17'),
(55, 'Seller1', 'seller1@gmail.com', '$2a$10$xRzh4zq9a6WK8cO/KdWGcOb9MmPGlXLafnfqOxBE1PgYj55OEL09C', 'Seller', 'uploads\\image-1701192807273.png', '2023-11-28', 'Enable', NULL, '123, Xã Đôn Phong, Huyện Bạch Thông, Tỉnh Bắc Kạn', '123', '{\"latitude\":22.25758,\"longitude\":105.83295}', '2023-11-28 14:33:16');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT cho bảng `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT cho bảng `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

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
