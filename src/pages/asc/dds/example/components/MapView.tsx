import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Icon, Style } from "ol/style";
import "ol/ol.css";

const MapView = ({ places, selectedPlace, onSelect }: any) => {
  const mapRef = useRef<any>(null);
  const mapObj = useRef<Map | null>(null);

  const vectorSource = useRef(new VectorSource());
  const vectorLayer = useRef(
    new VectorLayer({
      source: vectorSource.current,
    }),
  );

  // 지도 생성
  useEffect(() => {
    if (mapObj.current) return;

    mapObj.current = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://api.vworld.kr/req/wmts/1.0.0/20EE051C-DCE7-3BD8-8029-3A7C419A6BAE/Base/{z}/{y}/{x}.png",
          }),
        }),
        vectorLayer.current,
      ],
      view: new View({
        center: fromLonLat([127.0, 37.5]),
        zoom: 10,
      }),
    });
  }, []);

  //마커
  useEffect(() => {
    vectorSource.current.clear();

    places.forEach((place: any) => {
      const marker = new Feature({
        geometry: new Point(fromLonLat([place.lng, place.lat])),
      });

      marker.set("place", place);

      marker.setStyle(
        new Style({
          image: new Icon({
            src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
            scale: 0.05,
          }),
        }),
      );

      vectorSource.current.addFeature(marker);
    });
  }, [places]);

  // 클릭 이벤트
  useEffect(() => {
    if (!mapObj.current) return;

    mapObj.current.on("singleclick", function (evt) {
      mapObj.current?.forEachFeatureAtPixel(evt.pixel, function (feature) {
        const place = feature.get("place");
        if (place) onSelect(place);
      });
    });
  }, []);

  // 선택된 장소로 이동
  useEffect(() => {
    if (!selectedPlace || !mapObj.current) return;

    mapObj.current.getView().animate({
      center: fromLonLat([selectedPlace.lng, selectedPlace.lat]),
      zoom: 14,
      duration: 500,
    });
  }, [selectedPlace]);

  return <div ref={mapRef} style={{ width: "100%", height: "80%" }} />;
};

export default MapView;
