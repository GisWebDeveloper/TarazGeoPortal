import 'ol/ol.css';
import { useEffect, useRef, useState } from 'react';
import { Map, View } from 'ol';
import './map.css';
import { Box} from '@mui/material';
import { HomeExtentButton } from '../common/mapTools/HomeExtentButton';
import MyLocation from '../common/mapTools/MyLocation';
import { usePublicMapStore } from '../../hooks/usePublicMapStore';
import Measurement from './tools/measurement';
import OpenlayersBaseLayersUtils, { TileLayerSourceType } from '../../utils/openlayers/baseLayers';
import LayerGroup from 'ol/layer/Group';
import { BaseLayersTool } from './tools/baseLayers';
import TileLayer from 'ol/layer/Tile';
import { LeftPanel } from './leftPanel';
import proj4 from 'proj4';
import { toStringHDMS } from 'ol/coordinate';

const MapComponent = () => {
  const mapDivRef = useRef<HTMLDivElement | null>(null);
  const { map, setMap, mapMode } = usePublicMapStore();
  const [baseLayersArr,setBaseLayersArr] = useState<TileLayer[]>([]);
  const [userLayersArr,setUserLayersArr] = useState<TileLayer[]>([]);
  const [mapMouseOverCoord, setMapMouseOverCoord] = useState<string>('');

  useEffect(() => {
    if (!mapDivRef.current) return;


    let defaultBaseLayers_ = [
      OpenlayersBaseLayersUtils.getBaseLayerArcgisSattelite(true),
      OpenlayersBaseLayersUtils.getBaseLayerArcgisLabels(true),
      OpenlayersBaseLayersUtils.getBaseLayerOsm(false)
  ];

  let userLayers_ = [
    OpenlayersBaseLayersUtils.getNewTileLayer({
      visible: true,
      baseLayer: false,
      label: 'Жасыл желек',
      code: 'plant_pnt',
      sourceType: TileLayerSourceType.WMS,
      opacity: 1,
      url:'http://77.240.39.93:8082/geoserver/geoweb/wms?layers=geoweb:plant_pnts',
      geoserverLayerName:'plant_pnts',
  })
  ];
  setUserLayersArr(userLayers_);
  setBaseLayersArr(defaultBaseLayers_);
  

    const mapObj = new Map({
      view: new View({
        center: [7945476.188792471, 5295863.006421878],
        zoom: 13,
      }),
      // layers: [
      //   new Tile({ source: new OSM() })
      // ],
      layers:[
        new LayerGroup({
            properties: {
                label: "",
                code: 'user_layers',
            },
            zIndex: 1,
            layers: userLayers_,
        }),

        new LayerGroup({
            properties: {
                label: '',
                code: 'base_layers',
            },
            layers: defaultBaseLayers_,
        })]
    });
    mapObj.on('pointermove', (evt: any) => {
            if (evt.dragging) {
                // the event is a drag gesture, this is handled by openlayers (map move)
                return;
            }
            let wgsCoords = proj4('EPSG:3857', 'EPSG:4326', evt.coordinate);

            setMapMouseOverCoord(toStringHDMS(wgsCoords, 0));
        })
    mapObj.setTarget(mapDivRef.current);

    setMap(mapObj);

    return () => {
      mapObj.setTarget('');
      setMap(null);
    };
  }, []);

  return (
    <div
      className="map"
      style={{ position: 'absolute', top: 0, bottom: 0, width: '100%', height: '100vh', minHeight: '100vh' }}
      ref={mapDivRef}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={1}
        sx={{
          position: 'absolute',
          left: 10,
          top: '25%',
          transform: 'translateY(-50%)',
          borderRadius: '10px',
          alignItems: 'flex-end',
          zIndex: 5000,
        }}
      >
        {map && (<LeftPanel map={map} color="#5ebc67" layers={userLayersArr}/>)}
        </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={1}
        sx={{
          position: 'absolute',
          right: 10,
          top: '25%',
          transform: 'translateY(-50%)',
          borderRadius: '10px',
          alignItems: 'flex-end',
          zIndex: 5000,
        }}
      >
        {map && (
          <>
            <HomeExtentButton map={map} color="#5ebc67" />
            <MyLocation map={map} color="#5ebc67" />
            <BaseLayersTool  map={map} color="#5ebc67" layers={baseLayersArr} />
            <Measurement map={map} color="#5ebc67" mapMode={mapMode} />
          </>
        )}
      </Box>
      <div className='tejhsjka'
                style={{
                    position: 'fixed',
                    left: '2rem',
                    bottom: '4.55rem',
                    zIndex: 10000000,
                    width: '210px',
                    height: '23px',
                    padding: '3px 25px',
                    background: '#5ebc67',
                    color: 'white',
                    fontSize: '12px',
                    borderRadius: '16px',
                }}
            >
                {mapMouseOverCoord}
            </div>
    </div>
  );
};

export default MapComponent;