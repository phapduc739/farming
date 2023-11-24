import React, { useState, useCallback, useEffect } from "react";
import { ChevronDown } from "react-feather";
import { MapPin } from "react-feather";
import axios from "axios";

const LocationButton = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [isLocationVisible, setIsLocationVisible] = useState(false);
  const apiKey = "e98ef6664a9b4406bb301446e593a1a4"; // Thay YOUR_OPENCAGE_API_KEY bằng API key của bạn

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  }, []);

  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
      );

      if (response.status === 200) {
        const data = response.data;
        const address = data.results[0].formatted;
        const shortenedAddress =
          address.length > 20 ? `${address.substring(0, 20)}...` : address;
        setLocationName(shortenedAddress);
        console.log(address);
      } else {
        console.error("Error getting location name");
      }
    } catch (error) {
      console.error("Error getting location name:", error);
    }
  };

  const handleLocationClick = useCallback(() => {
    getCurrentLocation();
    setIsLocationVisible(true);
  }, [getCurrentLocation]);

  useEffect(() => {
    if (userLocation) {
      getLocationName(userLocation.latitude, userLocation.longitude);
    }
  }, [userLocation]);

  return (
    <>
      <button
        className="map flex justify-between items-center gap-2 border border-lineGray p-[7px] rounded-[5px]"
        onClick={handleLocationClick}
      >
        <div className="map-pin w-[35px] h-[35px] bg-[#f3f5f9] flex justify-center items-center">
          <MapPin name="map" size={16} color="black" />
        </div>
        <span className="text-[16px] text-primaryGreen font-semibold">
          {isLocationVisible
            ? locationName || "Đang xác định..."
            : "Vị trí của bạn"}
        </span>
        <ChevronDown name="map" size={16} color="black" />
      </button>
    </>
  );
};

export default React.memo(LocationButton);
