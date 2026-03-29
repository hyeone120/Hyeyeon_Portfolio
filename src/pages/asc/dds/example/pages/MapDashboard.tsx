import { useState } from "react";
import Search from "../components/Search";
import PlaceGrid from "../components/PlaceGrid";
import MapView from "../components/MapView";
import { fetchPlaces } from "../api/placeApi";
import styles from "./MapDashboard.module.scss";

const MapDashboard = () => {
  const [places, setPlaces] = useState<any[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const handleRegionChange = async (regions: string[]) => {
    if (regions.length === 0) {
      setPlaces([]);
      return;
    }

    const data = await fetchPlaces(regions);
    setPlaces(data);
  };

  return (
    <div className={styles.dashboard}>
      <h2 className={styles.title}>예시</h2>

      <Search onChange={handleRegionChange} />

      <div className={styles.gridContainer}>
        <div className={styles.placeGrid}>
          <PlaceGrid places={places} onSelect={setSelectedPlace} />
        </div>

        <div className={styles.mapView}>
          <MapView
            places={places}
            selectedPlace={selectedPlace}
            onSelect={setSelectedPlace}
          />
        </div>
      </div>
    </div>
  );
};

export default MapDashboard;
