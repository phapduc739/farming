-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 19, 2023 lúc 06:48 AM
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
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', '$2b$10$hIp9FTF6dyyokXOEL9PFPuWVW4w3toqWCNptuUPGc52FrA/9CcTSG');

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

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `categoryID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `categoryID`) VALUES
(19, '2', '2', 2.00, 0),
(20, 'Apple', 'Apple made in Vietnam', 50000.00, 0),
(21, 'Banana', 'Banana', 1230900.00, 0),
(22, '3', '3', 3.00, 0),
(23, 'Gạo', 'Gạo miền nam', 17000.00, 2),
(24, 'Nông sản', 'Nông sản miền nam', 25000.00, 3);

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
(3, 20, 'uploads\\images-1699109244306.png'),
(4, 20, 'uploads\\images-1699109244320.png'),
(5, 21, 'uploads\\images-1699111608245.png'),
(6, 21, 'uploads\\images-1699111608252.png'),
(7, 21, 'uploads\\images-1699111608255.png'),
(8, 22, 'uploads\\images-1699111933076.png'),
(9, 22, 'uploads\\images-1699111933076.png'),
(10, 19, 'uploads\\newImage-1699121526018.png'),
(12, 19, 'uploads\\newImage-1699122204199.png'),
(23, 19, 'uploads\\newImage-1699123211514.png'),
(24, 19, 'uploads\\newImage-1699123273343.png'),
(25, 23, 'uploads\\images-1699184367241.png'),
(26, 23, 'uploads\\images-1699184367243.png'),
(27, 24, 'uploads\\images-1699184649546.png'),
(28, 24, 'uploads\\newImage-1699184662082.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) DEFAULT 'user',
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `role`, `image`) VALUES
(2, 'user', '', '$2b$10$Locb/Dan3gmxw12ye4ozheaSORISXXrqVeK/bFdPv9FaYVuQBpah2', 'user', ''),
(21, 'admin', '', '$2a$10$kAsOzmhiw515V0KNv2VxSO0aqEg3RWswzO20yEWg9D10OQGHBOrsi', 'user', ''),
(22, 'admin1', '', '$2a$10$3luTX64YLJuV7BUQxSgWFO83ywohan9mzYBxUPXXLi0Lb7KD3vVMS', 'user', ''),
(23, 'admin111', '', '$2a$10$4g3MhraI/X163rsZQ/N4ZeX9uTz6pi3D6TxctVyZFzMGZ/rrll03S', 'user', ''),
(24, 'admin1111', '', '$2a$10$fvY3pC32./5PoFjTby53Z.QDvjkiTC3IW3z5UP.6.XrzmDo4QDd.O', 'user', ''),
(25, 'user', 'g@gmail.com', '$2a$10$XNymb5UpI3irAfHyh7M0Q.A43d5btwtNAjsDEw.tk4ZxNmdVp8vL2', 'user', ''),
(26, '1', 'g1@gmail.com', '$2a$10$aFllY4loiZBfdEYI5GxeV.gDSCnxMptICR/zC29AQWe1dgxEsnVkq', 'user', ''),
(27, '1', 'g12@gmail.com', '$2a$10$4Wlwn21YfNRSXeTBjGOJs.Id2xmr31933kbd18po.QAnC5cStozhm', 'user', ''),
(28, NULL, 'g@gmail.com', 'g', 'g', 'uploads\\image-1700372728811.png'),
(29, 'g1', 'g@gmail.com', '1', '1', 'uploads\\image-1700372869035.png');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

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
