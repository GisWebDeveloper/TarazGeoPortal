import { IconButton, Tooltip, Typography } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { Map } from 'ol';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useState, useEffect, useRef, useContext, CSSProperties } from 'react';
import { fromLonLat } from 'ol/proj';
import TableCell from '@mui/material/TableCell';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';
import TileLayer from 'ol/layer/Tile';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import LayerGroup from 'ol/layer/Group';
import { usePublicMapStore } from '../../../hooks/usePublicMapStore';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { translateField } from '../../../utils/localization';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
interface Props {
  color?: CSSProperties['background'];
}

export const LeftPanel: React.FC<Props> = ({ color }) => {
  const { map, userLayers, attributeTables, setAttributeTables, setCurrentAttributeTable } = usePublicMapStore();
  const { i18n, t } = useTranslation();
  const label = t('maps.title');
  const [layerList, setLayerList] = useState<any[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filterDialogLayer, setFilterDialogLayer] = useState<any>(null);

  useEffect(() => {
    if (!userLayers || userLayers.length == 0) return;
    let layerListNew: any[] = [];
    userLayers.map((layerItem: TileLayer) => {
      let layerItem_ = layerItem.getProperties().systemLayerProps;
      layerItem_.visible = layerItem.getVisible();
      layerListNew.push(layerItem_);
    });
    setLayerList(layerListNew);
  }, [userLayers]);

  const handleButtonClick = () => {
    setDialogOpen(!dialogOpen);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const getLegendLanguageUrl = (layerItem: any) => {

    
    let lang_ = 'eng'
    if (i18n.language === 'kz') {
      lang_ =  'ita';
    }
    return `http://77.240.39.93:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LANGUAGE=${lang_}&LAYER=geoweb:${layerItem.layername}`
  };



  const switchLayer = (visible: boolean, code: string) => {
    if (userLayers.length > 0) {
      for (let userLayer_ of userLayers) {
        if (userLayer_.getProperties().code === code) {
          userLayer_.setVisible(visible);
        }
      }
    }
    console.log(map);
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
          <LibraryAddCheckIcon />
        </IconButton>
      </Tooltip>
      {dialogOpen && (
        <div
          style={{
            position: 'absolute',
            left: '50px',
            width: '350px',
            height: '400px',
            backgroundColor: '#fff',
            padding: '30px 10px 10px',
            borderRadius: 4,
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.6)',
            zIndex: 9999,
            overflow:'scroll'
          }}
        >
          <IconButton style={{ position: 'absolute', top: 0, right: 0 }} onClick={handleDialogClose}>
            <CloseIcon />
          </IconButton>
          <Typography
            sx={{
              paddingRight: '10px',
              //lineHeight: 0.9,
              // TODO: translate
              //color: router.locale === 'kk' ? 'white' : 'black',
              marginLeft: '10px',
              ':hover': {
                color: '#5dbb67',
              },
              cursor: 'pointer',
              color: 'green',
            }}
          >
            {t('maps.title')}
          </Typography>
          {layerList.map((layerItem: any) => {
            return (
              <div>
                <div key={layerItem.layername}>
                  {translateField(layerItem,'name',i18n.language)}
                  <IconButton
                    onClick={() => {
                      let visible_ = false;
                      let layers_: any[] = [];
                      layerList.map((layer_) => {
                        if (layer_.id == layerItem.id) {
                          visible_ = !layer_.visible;
                          layer_.visible = !layer_.visible;
                        }
                        layers_.push(layer_);
                      });
                      setLayerList(layers_);
                      switchLayer(visible_, layerItem.id);
                    }}
                  >
                    {layerItem.visible && <VisibilityIcon />}
                    {!layerItem.visible && <VisibilityOffIcon />}
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      setFilterDialogLayer(layerItem);
                      // if (
                      //   attributeTables.length == 0 ||
                      //   attributeTables.filter((at) => at.id == layerItem.id).length == 0
                      // ) {
                      //   attributeTables.push(layerItem);
                      //   setAttributeTables(attributeTables);
                      // }
                      // setCurrentAttributeTable(layerItem);
                    }}
                  >
                    <FilterAltIcon />
                  </IconButton>
                </div>

                <div className={layerItem.layername}>
                  <img
                    src={`http://77.240.39.93:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LANGUAGE=${i18n.language=='ru'?'eng':'ita'}&LAYER=geoweb:${layerItem.layername}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};