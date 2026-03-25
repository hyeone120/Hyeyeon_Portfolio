import { useState } from "react";
import { regions } from "./PlaceData";
import styles from "../pages/MapDashboard.module.scss";

const Search = ({ onChange }: any) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleRegion = (region: string) => {
    let updated = [...selected];

    if (updated.includes(region)) {
      updated = updated.filter((r) => r !== region);
    } else {
      updated.push(region);
    }

    setSelected(updated);
    onChange(updated);
  };

  return (
    <div className={styles.searchBox}>
      <span style={{ marginRight: 10 }}>지역 선택:</span>
      {regions.map((r) => (
        <button
          key={r}
          onClick={() => toggleRegion(r)}
          className={styles.regionButton}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

export default Search;
