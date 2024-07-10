import React, {
  useState,
  useEffect,
} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for marker icon issue
delete L.Icon.Default.prototype
  ._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Component to update map center and zoom
const SetViewOnClick = ({
  coords,
  zoom,
}) => {
  const map = useMap();
  map.setView(coords, zoom);
  return null;
};

const Map = ({ location }) => {
  const [position, setPosition] =
    useState([16.047079, 108.20623]); // Vị trí mặc định Đà Nẵng
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (location) {
      // Sử dụng geocoding để lấy tọa độ từ địa chỉ
      const geocodeLocation =
        async () => {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
          );
          const data =
            await response.json();
          if (data.length > 0) {
            const { lat, lon } =
              data[0];
            setPosition([
              parseFloat(lat),
              parseFloat(lon),
            ]);
            setZoom(18); // Zoom gần hơn tới vị trí
          }
        };
      geocodeLocation();
    }
  }, [location]);

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{
        height: "450px",
        width: "100%",
      }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>{location}</Popup>
      </Marker>
      <SetViewOnClick
        coords={position}
        zoom={zoom}
      />
    </MapContainer>
  );
};

export default Map;
