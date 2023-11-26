import { useState, useEffect } from "react";
import axios from "axios";

const HaversineCalculator = () => {
  const [locations, setLocations] = useState([]);
  const [distance, setDistance] = useState(null);

  const calculateDistance = (fromLocation, toLocation) => {
    try {
      if (fromLocation && toLocation) {
        const { google } = window;

        if (google) {
          const point1 = new google.maps.LatLng(
            fromLocation.latitude,
            fromLocation.longitude
          );
          const point2 = new google.maps.LatLng(
            toLocation.latitude,
            toLocation.longitude
          );

          const distance =
            google.maps.geometry.spherical.computeDistanceBetween(
              point1,
              point2
            );

          // Convert distance to kilometers
          const distanceInKm = distance / 1000;
          const result = distanceInKm.toFixed(1);
          return parseFloat(result);
        } else {
          return null;
        }
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  useEffect(() => {
    // Thực hiện tính toán khi locations thay đổi
    if (locations.length >= 2) {
      const fromLocation = locations[locations.length - 2];
      const toLocation = locations[locations.length - 1];
      const calculatedDistance = calculateDistance(fromLocation, toLocation);
      setDistance(calculatedDistance);
    }
  }, [locations]); // Theo dõi sự thay đổi của locations

  const handleAddLocation = async () => {
    try {
      const address = prompt("Enter address:");
      const response = await axios.get(
        "https://api.opencagedata.com/geocode/v1/json",
        {
          params: {
            q: address,
            key: "e98ef6664a9b4406bb301446e593a1a4",
          },
        }
      );

      const { lat, lng } = response.data.results[0].geometry;

      setLocations([...locations, { latitude: lat, longitude: lng }]);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div>
      <h1>Haversine Distance Calculator</h1>

      <button onClick={handleAddLocation}>Add Location</button>

      {locations.map((location, index) => (
        <div key={index}>
          <p>
            Location {index + 1}: ({location.latitude}, {location.longitude})
          </p>
        </div>
      ))}

      <p>Distance: {distance} km</p>
    </div>
  );
};

export default HaversineCalculator;
