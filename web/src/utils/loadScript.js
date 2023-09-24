const loadScript = () => {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyApK068u8-nXz3BJEmpUIjE7kFcumtrApo&callback=initMap";
  script.async = true;
  script.defer = true;
  script.onerror = function () {
    console.error("Error loading Google Maps API script.");
  };
  document.head.appendChild(script);
}

export { loadScript };
