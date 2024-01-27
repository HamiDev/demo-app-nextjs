import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from "react-leaflet";
import classes from "./map.module.css";
import { Container } from "@mantine/core";
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function SearchMap() {
  return (
    <Container className={classes.mapContainer}>
      <MapContainer
        style={{ height: 300 }}
        className={classes.mapWrapper}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker draggable={true} position={[51.505, -0.09]}>
          <Popup>Region Name</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
}
