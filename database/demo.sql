-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 24, 2023 lúc 08:44 AM
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
-- Cơ sở dữ liệu: `demo`
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
  `createAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `image`, `quantity`, `createAt`) VALUES
(96, 'Lúa và ngũ cốc', 'Lúa và ngũ cốc Đồng bằng sông Cửu Long', 'uploads\\image-1700471264611.png', '0', '2023-11-20'),
(97, 'Rau củ quả', 'Rau củ quả Đồng bằng sông Cửu Long', 'uploads\\image-1700471292329.png', '3', '2023-11-20'),
(98, 'Sản phẩm chế biến', 'Sản phẩm chế biến Đồng bằng sông Cửu Long', 'uploads\\image-1700471322458.png', '1', '2023-11-20'),
(99, 'Sản phẩm khác', 'Sản phẩm khác Đồng bằng sông Cửu Long', 'uploads\\image-1700471352075.png', '0', '2023-11-20'),
(100, 'Trái cây', 'Trái cây Đồng bằng sông Cửu Long', 'uploads\\image-1700736484555.png', '0', '2023-11-23');

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
  `rating` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `unit` varchar(255) NOT NULL,
  `discount` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `categoryID`, `quantity`, `rating`, `status`, `unit`, `discount`) VALUES
(37, 'Táo Mỹ', 'Táo Mỹ nhập khẩu', 39000.00, 97, '10', NULL, 'Còn hàng', 'Kg', NULL),
(38, 'Chuối xuất khẩu', 'Chuối xuất khẩu nước ngoài', 27000.00, 97, '6', NULL, 'Còn hàng', 'Kg', NULL),
(39, 'Cam sành', 'Cam sành miền Tây', 35000.00, 98, '3', NULL, 'Còn hàng', 'Kg', NULL),
(40, 'Nho nhập khẩu', 'Nho nhập khẩu', 40000.00, 97, '30', NULL, 'Còn hàng', 'Kg', NULL);

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
(64, 37, 'uploads\\images-1700490420103.png'),
(65, 37, 'uploads\\images-1700490420103.png'),
(66, 37, 'uploads\\images-1700490420104.png'),
(67, 37, 'uploads\\images-1700490420104.png'),
(68, 38, 'uploads\\images-1700490484814.png'),
(69, 38, 'uploads\\images-1700490484816.png'),
(70, 38, 'uploads\\images-1700490484817.png'),
(71, 38, 'uploads\\images-1700490484818.png'),
(76, 39, 'uploads\\images-1700490640798.png'),
(77, 39, 'uploads\\images-1700490640799.png'),
(78, 39, 'uploads\\images-1700490640800.png'),
(79, 39, 'uploads\\images-1700490640801.png'),
(80, 40, 'uploads\\images-1700811081368.png');

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
(45, 'Admin (John)', 'admin@gmail.com', '$2b$10$hIp9FTF6dyyokXOEL9PFPuWVW4w3toqWCNptuUPGc52FrA/9CcTSG', 'Admin', 'uploads\\image-1700736430197.png', '2023-11-23', 'Enable', NULL, NULL, '2023-11-24 07:35:17');

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT cho bảng `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
