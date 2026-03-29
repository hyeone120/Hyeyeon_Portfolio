import { useState } from "react";
import Search from "../components/Search";
import PlaceGrid from "../components/PlaceGrid";
import MapView from "../components/MapView";
import { fetchPlaces } from "../api/placeApi";
import styles from "./MapDashboard.module.scss";
import CodeTabs from "../components/code/CodeTabs";

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
    <>
      <section className={styles.section}>
        <h2 className={styles.title}>지역 기반 지도 검색</h2>

        <div className={styles.card}>
          <div className={styles.searchArea}>
            <Search onChange={handleRegionChange} />
          </div>

          <div className={styles.contentArea}>
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

          <div className={styles.exampleHeader}>구현 코드 예시</div>

          <div className={styles.codeArea}>
            <CodeTabs />
          </div>
        </div>
      </section>
    </>
  );
};

export default MapDashboard;
