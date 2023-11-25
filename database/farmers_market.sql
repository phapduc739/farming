-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 25, 2023 lúc 04:30 AM
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
(97, 'Rau củ quả', 'Rau củ quả Đồng bằng sông Cửu Long', 'uploads\\image-1700471292329.png', '4', '2023-11-20 02:33:11'),
(98, 'Sản phẩm chế biến', 'Sản phẩm chế biến Đồng bằng sông Cửu Long', 'uploads\\image-1700471322458.png', '2', '2023-11-20 04:40:55'),
(99, 'Sản phẩm khác', 'Sản phẩm khác Đồng bằng sông Cửu Long', 'uploads\\image-1700471352075.png', '0', '2023-11-19 23:33:05'),
(100, 'Trái cây', 'Trái cây Đồng bằng sông Cửu Long', 'uploads\\image-1700736484555.png', '1', '2023-11-23 02:17:00');

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
(37, 'Táo Mỹ', 'Táo Mỹ nhập khẩu', 39000.00, 97, '10', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:08:46'),
(38, 'Chuối xuất khẩu', 'Chuối xuất khẩu nước ngoài', 27000.00, 97, '6', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:09:46'),
(39, 'Cam sành', 'Cam sành miền Tây', 35000.00, 98, '3', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:10:46'),
(40, 'Nho nhập khẩu', 'Nho nhập khẩu', 40000.00, 97, '30', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:11:46'),
(41, 'Dưa hấu không hạt', 'Dưa hấu không hạt', 30000.00, 97, '33', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:12:46'),
(42, 'Hạt Điều Rang Bơ 500G', 'Hạt Điều Rang Bơ 500G', 95000.00, 98, '33', 'Còn hàng', 'Đã duyệt', 'Túi', NULL, 45, '2023-11-25 03:13:46'),
(43, 'Gạo ST25 Ông Cua', 'Gạo ST25 Ông Cua', 180000.00, 96, '60', 'Còn hàng', 'Đã duyệt', 'Túi', NULL, 45, '2023-11-25 03:14:46'),
(44, 'Gạo Thơm Vua Gạo Hương Việt', 'Gạo Thơm Vua Gạo Hương Việt', 160000.00, 96, '24', 'Còn hàng', 'Đã duyệt', 'Túi', NULL, 45, '2023-11-25 03:15:46'),
(45, 'Ngô xuất khẩu', 'Ngô xuất khẩu', 30000.00, 100, '70', 'Còn hàng', 'Đã duyệt', 'Kg', NULL, 45, '2023-11-25 03:22:36');

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
(96, 45, 'uploads/images-1700882566285.png');

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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `image`, `dateJoin`, `status`, `payment_method`, `shipping_address`, `created_at`) VALUES
(39, 'Emma', 'emma@gmail.com', '$2a$10$9zCwNw2Af6n5Tk3VWZ9kseEZZUxE5bHJfPWfpuYnGt9xfnap9cQfS', 'Seller', 'uploads\\image-1700736415998.png', '2023-11-20', 'Enable', NULL, NULL, '2023-11-24 07:35:17'),
(40, 'Max', 'max@gamil.com', '$2a$10$kAtV6HGJRNB/79etDq/pNOD1otpsY2ZCnBwCv3iumlii/9bTR.ToK', 'User', 'uploads\\image-1700471773164.png', '2023-11-20', 'Disable', NULL, 'Địa chỉ: 111, Phường Ỷ La, Thành phố Tuyên Quang, Tỉnh Tuyên Quang. Số điện thoại: 111', '2023-11-24 07:35:17'),
(41, 'Bean', 'bean@gmail.com', '$2a$10$FXkE3OMjFCWPwxODgZXn8OUGoM.iTnXIynFzSMawkeoCpIKaaklyK', 'User', 'uploads\\image-1700471795782.png', '2023-11-20', 'Enable', NULL, NULL, '2023-11-24 07:35:17'),
(42, 'Cox', 'cox@gmail.com', '$2a$10$eaP6iJrmhqlsvj2Ipf5CnOOJQYRMsnOyjJ01iBuXPyCAo3ew3mlsC', 'Seller', 'uploads\\image-1700471826941.png', '2023-11-20', 'Enable', NULL, NULL, '2023-11-24 07:35:17'),
(43, 'Fran', 'fran@gmail.com', '$2a$10$hmfP77tKg2.iEfsD1StJPOeJMhjSxsxBDIJZKxEPC9WHcyBZdCIOO', 'Seller', 'uploads\\image-1700471850811.png', '2023-11-20', 'Disable', NULL, NULL, '2023-11-24 07:35:17'),
(44, 'Dan', 'dan@gmail.com', '$2a$10$uAY/8DSd7rXghEDYmiSrO.tURsKmtmWH8QNRTZzergAxsO5X1re0i', 'User', 'uploads\\image-1700471909759.png', '2023-11-20', 'Enable', NULL, NULL, '2023-11-24 07:35:17'),
(45, 'Admin (John)', 'admin@gmail.com', '$2b$10$hIp9FTF6dyyokXOEL9PFPuWVW4w3toqWCNptuUPGc52FrA/9CcTSG', 'Admin', 'uploads\\image-1700736430197.png', '2023-11-23', 'Enable', NULL, NULL, '2023-11-25 12:00:17');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT cho bảng `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Các ràng buộc cho các bảng đã đổ
--

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
