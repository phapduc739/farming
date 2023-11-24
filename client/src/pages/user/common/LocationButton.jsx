import { useState, useCallback, useEffect } from "react";
import { ChevronDown } from "react-feather";
import { MapPin } from "react-feather";

const LocationButton = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [isLocationVisible, setIsLocationVisible] = useState(false);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  };

  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&extratags=1&namedetails=1&addressdetails=1`
      );

      if (response.ok) {
        const data = await response.json();
        const address = data.display_name;
        const shortenedAddress =
          address.length > 20 ? `${address.substring(0, 20)}...` : address;
        setLocationName(shortenedAddress);
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
  }, []);

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

export default LocationButton;
