import React from 'react';
import {createRoot} from 'react-dom/client';
import {Map} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer, PolygonLayer} from '@deck.gl/layers';

// Source data GeoJSON
const DATA = './data.geojson'

const INITIAL_VIEW_STATE = {
  longitude: 24.88,
  latitude: 60.25,
  zoom: 10,
  pitch: 0,
  bearing: 0
};

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json';

export default function App({data = DATA, mapStyle = MAP_STYLE}) {
  const layers = [
    new GeoJsonLayer({
      id: 'geojson',
      data,
      opacity: 0.25,
      filled: true,
      getFillColor: f => [200, 0, 0],
    })
  ];

  return (
    <DeckGL
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
      <Map reuseMaps mapLib={maplibregl} mapStyle={mapStyle} preventStyleDiffing={true} />
    </DeckGL>
  );
}

export function renderToDOM(container) {
  createRoot(container).render(<App />);
}