import { FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Tooltip } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Map } from 'ol';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useState, useEffect, useRef, useContext, CSSProperties } from 'react';
import { fromLonLat } from 'ol/proj';
import TableCell from '@mui/material/TableCell';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';
import GridOnIcon from '@mui/icons-material/GridOn';
//import OpenlayersExtendUtils, { TileLayerSourceType } from '../../utils/olExtend';
//import { mapContext } from '../mapContextProvider';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile';
import LayersIcon from '@mui/icons-material/Layers';
import React from 'react';

interface Props {
  map: Map;
  color?: CSSProperties['background'];
  layers?: any[];
}

export const BaseLayersTool: React.FC<Props> = ({ map, color, layers }) => {
  const { t } = useTranslation();
  const label = t('baseLayers');
  const [layerList, setLayerList] = useState<any[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [value, setValue] = React.useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    let code_ = (event.target as HTMLInputElement).value;
    setValue(code_);
    if(code_=='base_layer_arcgis'){
      map.getView().setMaxZoom(18);
    }else{
      map.getView().setMaxZoom(28);
    }
    let visible_ = false;
    let layers_: any[] = [];
    let layer__ = '';
    layerList.map((layer_) => {
      if (layer_.code == code_) {
        visible_ = !layer_.visible;
        layer_.visible = !layer_.visible;
        layer__ = layer_.layer;
      }
      layers_.push(layer_);
    });
    setLayerList(layers_);
    switchLayer(visible_, code_);
  };

  useEffect(() => {
    if (!layers || layers.length == 0) return;

    let layerListNew: any[] = [];
    layers.map((layerItem: TileLayer) => {
      layerListNew.push({
        code: layerItem.getProperties().code,
        layer: layerItem.getProperties().label,
        visible: layerItem.getVisible(),
      });
      if (layerItem.getVisible() === true) {
        setValue(layerItem.getProperties().code);
      }
    });
    setLayerList(layerListNew);
  }, [layers]);

  const handleButtonClick = () => {
    setDialogOpen(!dialogOpen);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const switchLayer = ( visible: boolean, code: string) => {
    let layers = map
      .getLayers()
      .getArray()
      .filter((layerGroup: any) => {
        return layerGroup.getProperties().code == 'base_layers';
      })[0]
      //@ts-ignore
      .getLayers()
      .getArray();

    for (let layer of layers) {
      
        layer.setVisible(layer.getProperties && layer.getProperties().code === code);
      
    }
  };

  return (
    <>
      <Tooltip title={label} placement="left">
        <IconButton
          style={{
            background: color ? color : 'rgb(64 152 68 / 70%)',
            borderRadius: 0,
          }}
          onClick={handleButtonClick}
          sx={{ color: 'white' }}
        >
          <LayersIcon />
        </IconButton>
      </Tooltip>
      {dialogOpen && (
        <div
          style={{
            position: 'absolute',
            right: '50px',
            width: '250px',
            height: '200px',
            backgroundColor: '#fff',
            padding: '30px 10px 10px',
            borderRadius: 4,
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.6)',
            zIndex: 9999,
          }}
        >
          <IconButton style={{ position: 'absolute', top: 0, right: 0 }} onClick={handleDialogClose}>
            <CloseIcon />
          </IconButton>
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {layerList.map((layerItem: any) => {
                return (
                  <FormControlLabel
                    value={layerItem.code}
                    key={layerItem.layer}
                    control={<Radio />}
                    label={layerItem.layer}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </div>
      )}
    </>
  );
};
