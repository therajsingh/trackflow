import { useEffect } from "react";
import socket from "./socket/socket";

function App() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const locationData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };

          console.log(locationData);

          socket.emit("driver-location", locationData);
        },
        (error) => {
          console.log(error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000,
        }
      );
    }
  }, []);

  return (
    <div>
      <h1>Delivery Partner Tracking Active</h1>
    </div>
  );
}

export default App;