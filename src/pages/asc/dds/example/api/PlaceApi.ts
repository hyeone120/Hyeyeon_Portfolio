import { mockData } from "../components/PlaceData";

export const fetchPlaces = async (selectedRegions: string[]) => {
  return new Promise<any[]>((resolve) => {
    setTimeout(() => {
      resolve(mockData.filter((p) => selectedRegions.includes(p.area)));
    }, 300);
  });
};
