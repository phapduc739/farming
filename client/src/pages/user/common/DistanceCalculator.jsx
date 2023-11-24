import React, { useState, useEffect } from "react";
import axios from "axios";

const DistanceCalculator = () => {
  const [diemXuatPhat, setDiemXuatPhat] = useState(null);
  const [tenDiemXuatPhat, setTenDiemXuatPhat] = useState(null);
  const [diemDen, setDiemDen] = useState(null);
  const [tenDiemDen, setTenDiemDen] = useState(null);
  const [khoangCach, setKhoangCach] = useState(null);

  const tinhKhoangCach = async (diemXuatPhat, diemDen) => {
    try {
      const apiKey = "AIzaSyBnFedHyyQAA6CvyELBvra9XzQy0p3KkFA";
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${diemXuatPhat}&destinations=${diemDen}&key=${apiKey}`
      );

      if (response.data.status === "OK") {
        const khoangCach = response.data.rows[0].elements[0].distance.text;
        setKhoangCach(khoangCach);
      } else {
        console.error("Lỗi khi lấy khoảng cách:", response.data.status);
      }
    } catch (error) {
      console.error("Lỗi khi lấy khoảng cách:", error.message);
    }
  };

  const layTenDiaChi = async (viTri, setTenDiem) => {
    try {
      const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${viTri}&key=${apiKey}`
      );

      if (response.data.status === "OK") {
        const diaChi = response.data.results[0].formatted_address;
        setTenDiem(diaChi);
      } else {
        console.error("Lỗi khi lấy địa chỉ:", response.data.status);
      }
    } catch (error) {
      console.error("Lỗi khi lấy địa chỉ:", error.message);
    }
  };

  const chonViTri = (loaiViTri) => {
    navigator.geolocation.getCurrentPosition(
      (viTri) => {
        const { latitude, longitude } = viTri.coords;
        const viTriChon = `${latitude},${longitude}`;
        if (loaiViTri === "diemXuatPhat") {
          setDiemXuatPhat(viTriChon);
          layTenDiaChi(viTriChon, setTenDiemXuatPhat);
        } else if (loaiViTri === "diemDen") {
          setDiemDen(viTriChon);
          layTenDiaChi(viTriChon, setTenDiemDen);
          hienThiBanDo(viTriChon);
        }
      },
      (error) => {
        console.error("Lỗi khi lấy vị trí:", error);
      }
    );
  };

  const hienThiBanDo = (viTri) => {
    // Hiển thị bản đồ và cho phép người dùng chọn vị trí đích
    const mapContainer = document.getElementById("map");
    const mapOptions = {
      center: {
        lat: parseFloat(viTri.split(",")[0]),
        lng: parseFloat(viTri.split(",")[1]),
      },
      zoom: 12,
    };

    const map = new window.google.maps.Map(mapContainer, mapOptions);

    // Thêm marker cho vị trí đích và hiển thị tên của nó
    const marker = new window.google.maps.Marker({
      position: {
        lat: parseFloat(viTri.split(",")[0]),
        lng: parseFloat(viTri.split(",")[1]),
      },
      map: map,
      title: tenDiemDen,
    });

    // Thêm sự kiện click để hiển thị tên khi người dùng click vào marker
    marker.addListener("click", function () {
      alert(`Tên vị trí: ${tenDiemDen}`);
    });
  };

  const tinhVaHienThiKhoangCach = () => {
    if (diemXuatPhat && diemDen) {
      tinhKhoangCach(diemXuatPhat, diemDen);
    } else {
      console.error("Vui lòng chọn cả hai điểm xuất phát và đến.");
    }
  };

  return (
    <div>
      <h1>Ứng Dụng Tính Khoảng Cách</h1>
      <p>
        Điểm xuất phát: {tenDiemXuatPhat || "Chưa chọn"}
        <br />
        Điểm đến: {tenDiemDen || "Chưa chọn"}
      </p>
      <button onClick={() => chonViTri("diemXuatPhat")}>
        Chọn Điểm Xuất Phát
      </button>
      <button onClick={() => chonViTri("diemDen")}>Chọn Điểm Đến</button>
      <br />
      <button onClick={tinhVaHienThiKhoangCach}>Tính Khoảng Cách</button>
      <p>
        {khoangCach !== null
          ? `Khoảng cách giữa hai địa điểm là ${khoangCach}`
          : "Đang tính khoảng cách..."}
      </p>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
};

export default DistanceCalculator;
