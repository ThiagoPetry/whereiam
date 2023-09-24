import React, { useEffect, useRef, useState } from "react";

import { loadScript } from "../utils/loadScript";

import Loading from "../components/Loading";

const App = () => {
  const [loading, setLoading] = useState(false);

  const scriptLoaded = useRef();

  let map, infoWindow;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -27.336462, lng: -50.4897569 },
      zoom: 20,
      backgroundColor: "#edfff6",
      clickableIcons: true,
      disableDefaultUI: false,
      fullscreenControl: false,
      mapTypeControl: false,
      mapTypeId: "satellite",
    });

    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");
    locationButton.textContent = "Onde eu estou?";
    locationButton.classList.add("custom-map-control-button");

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

    locationButton.addEventListener("click", () => {
      setLoading(true);

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Sua localização");
          infoWindow.open(map);

          map.setCenter(pos);
          map.setZoom(20);

          setLoading(false);
        }, () => {
          handleLocationError(true, infoWindow, map.getCenter());
          setLoading(false);
        });
      } else {
        handleLocationError(false, infoWindow, map.getCenter());
        setLoading(false);
      }
    });

    locationButton.click();
  };

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setContent(
      browserHasGeolocation
        ? "Erro: O serviço de geolocalização falhou."
        : "Erro: Seu navegador não suporta geolocalização."
    );

    infoWindow.open(map);
    infoWindow.setPosition(pos);
  };

  window.initMap = initMap;

  useEffect(() => {
    if (!scriptLoaded.current) {
      loadScript();
      scriptLoaded.current = true;
    }
  }, []);

  return (
    <div className={"app"}>
      <Loading loading={loading} />

      <div id={"map"} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}

export default App;
