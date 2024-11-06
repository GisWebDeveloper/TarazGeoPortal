import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
  Typography,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { Map } from "ol";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useState, useEffect, useRef, useContext, CSSProperties } from "react";
import { fromLonLat } from "ol/proj";
import TableCell from "@mui/material/TableCell";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useTranslation } from "react-i18next";
import TileLayer from "ol/layer/Tile";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import LayerGroup from "ol/layer/Group";
import { usePublicMapStore } from "../../../hooks/usePublicMapStore";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { translateField } from "../../../utils/localization";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { LayerFilterDialog } from "./layerFilterDialog";
import {
  dictionary_001,
  dictionary_002,
  dictionary_003,
  dictionary_005,
  dictionary_006,
} from "./layerFilterDialog/mockData";
interface Props {
  color?: CSSProperties["background"];
}

export const LeftPanel: React.FC<Props> = ({ color }) => {
  const {
    map,
    userLayers,
    attributeTables,
    setAttributeTables,
    setCurrentAttributeTable,
  } = usePublicMapStore();
  const { i18n, t } = useTranslation();
  const label = t("maps.title");
  const [layerList, setLayerList] = useState<any[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filterDialogLayer, setFilterDialogLayer] = useState<boolean>(false);
  const [filterPlantLocationCode, setFilterPlantLocationCode] = useState<
    string | undefined
  >(undefined);
  const [filterPlantNameCode, setFilterPlantNameCode] = useState<
    string | undefined
  >(undefined);
  const [filterLifeFormCode, setFilterLifeFormCode] = useState<
    string | undefined
  >(undefined);
  const [filterPlantConditionCode, setFilterPlantConditionCode] = useState<
    string | undefined
  >(undefined);
  const [filterPlantEventCode, setFilterPlantEventCode] = useState<
    string | undefined
  >(undefined);

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
    let lang_ = "eng";
    if (i18n.language === "kz") {
      lang_ = "ita";
    }
    return `http://77.240.39.93:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LANGUAGE=${lang_}&LAYER=geoweb:${layerItem.layername}`;
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

  const getTranslate=(key:string)=>{
    let words:any={
      kk:{
        plantName:'Өсімдік атауы',
        lifeForm: "Тіршлік формасы",
        plantCondition:"Өсімдіктің жағдайы",
        location:"Орналасқан жері",
        commonCondition:"Жалпы жағдайы",
        event:"Іс -шара"
      },
      ru:{
        plantName:'Название растений',
        lifeForm: "Жизненная форма",
        plantCondition:"Состояние растения",
        location:"Место Расположения",
        commonCondition:"Общее состояение",
        event:"Мероприятия"
      }
    }
   
    return words[i18n.language][key];
  }
  const onFilterDialogClose = () => {
    setFilterDialogLayer(false);
  };

  return (
    <>
      <Tooltip title={label} placement="left">
        <IconButton
          style={{
            background: color ? color : "rgb(64 152 68 / 70%)",
            borderRadius: 0,
          }}
          onClick={handleButtonClick}
          sx={{ color: "white" }}
        >
          <LibraryAddCheckIcon />
        </IconButton>
      </Tooltip>
      {dialogOpen && (
        <div
          style={{
            position: "absolute",
            left: "50px",
            width: "350px",
            height: "400px",
            backgroundColor: "#fff",
            padding: "30px 10px 10px",
            borderRadius: 4,
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.6)",
            zIndex: 9999,
            overflow: "scroll",
          }}
        >
          <IconButton
            style={{ position: "absolute", top: 0, right: 0 }}
            onClick={handleDialogClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            sx={{
              paddingRight: "10px",
              //lineHeight: 0.9,
              // TODO: translate
              //color: router.locale === 'kk' ? 'white' : 'black',
              marginLeft: "10px",
              ":hover": {
                color: "#5dbb67",
              },
              cursor: "pointer",
              color: "green",
            }}
          >
            {getTranslate("maps.title")}
          </Typography>
          {layerList.map((layerItem: any) => {
            return (
              <div>
                <div key={layerItem.layername}>
                  {translateField(layerItem, "name", i18n.language)}
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
                    }}
                  >
                    <FilterAltIcon />
                  </IconButton>
                  {/* <IconButton
                    onClick={() => {
                      //setFilterDialogLayer(layerItem);
                      if (
                        attributeTables.length == 0 ||
                        attributeTables.filter((at) => at.id == layerItem.id).length == 0
                      ) {
                        attributeTables.push(layerItem);
                        setAttributeTables(attributeTables);
                      }
                      setCurrentAttributeTable(layerItem);
                    }}
                  >
                    <FilterAltIcon />
                  </IconButton> */}
                </div>

                <div className={layerItem.layername}>
                  <img
                    src={`http://77.240.39.93:8082/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LANGUAGE=${i18n.language == "ru" ? "eng" : "ita"}&LAYER=geoweb:${layerItem.layername}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Dialog
        open={filterDialogLayer}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        PaperProps={{
          style: { width: 480 },
        }}
      >
        <DialogTitle
          id="dialog-title"
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {getTranslate("filter_")}
        </DialogTitle>
        
        <DialogContent sx={{ p: 2 }}>
          <DialogContentText id="dialog-description">
          <Box display="flex" flexDirection="row">
          <FormControl fullWidth sx={{ p: 1 }}>
          <InputLabel sx={{ p: 1 }} id="demo-simple-select-label">
              {getTranslate("location")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterPlantLocationCode}
              label={getTranslate("location")}
              onChange={(event: SelectChangeEvent) => {
                setFilterPlantLocationCode(event.target.value as string);
              }}
            >
              {dictionary_006.map((item: any) => {
                return (
                  <MenuItem value={item.code}>{item[i18n.language]}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {filterPlantLocationCode !== undefined && (
            <Button
              onClick={() => {
                setFilterPlantLocationCode(undefined);
              }}
              startIcon={<CloseIcon fontSize="small" />}
            ></Button>
          )}
        </Box>
        <Box display="flex" flexDirection="row">
          <FormControl fullWidth sx={{ p: 1 }}>
            <InputLabel sx={{ p: 1 }} id="demo-simple-select-label">
              {getTranslate("plantName")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterPlantNameCode}
              label={getTranslate("plantName")}
              onChange={(event: SelectChangeEvent) => {
                setFilterPlantNameCode(event.target.value as string);
              }}
            >
              {dictionary_001.map((item: any) => {
                return (
                  <MenuItem value={item.code}>{item[i18n.language]}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {filterPlantNameCode !== undefined && (
            <Button
              onClick={() => {
                setFilterPlantNameCode(undefined);
              }}
              startIcon={<CloseIcon fontSize="small" />}
            ></Button>
          )}
        </Box>
        <Box display="flex" flexDirection="row">
          <FormControl fullWidth sx={{ p: 1 }}>
            <InputLabel sx={{ p: 1 }} id="demo-simple-select-label">
              {getTranslate("lifeForm")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterLifeFormCode}
              label={getTranslate("lifeForm")}
              onChange={(event: SelectChangeEvent) => {
                setFilterLifeFormCode(event.target.value as string);
              }}
            >
              {dictionary_002.map((item: any) => {
                return (
                  <MenuItem value={item.code}>{item[i18n.language]}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {filterLifeFormCode !== undefined && (
            <Button
              onClick={() => {
                setFilterLifeFormCode(undefined);
              }}
              startIcon={<CloseIcon fontSize="small" />}
            ></Button>
          )}
        </Box>
        <Box display="flex" flexDirection="row">
          <FormControl fullWidth sx={{ p: 1 }}>
            <InputLabel sx={{ p: 1 }} id="demo-simple-select-label">
              {getTranslate("plantCondition")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterPlantConditionCode}
              label={getTranslate("plantCondition")}
              onChange={(event: SelectChangeEvent) => {
                setFilterPlantConditionCode(event.target.value as string);
              }}
            >
              {dictionary_003.map((item: any) => {
                return (
                  <MenuItem value={item.code}>{item[i18n.language]}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {filterPlantConditionCode !== undefined && (
            <Button
              onClick={() => {
                setFilterPlantConditionCode(undefined);
              }}
              startIcon={<CloseIcon fontSize="small" />}
            ></Button>
          )}
        </Box>
        <Box display="flex" flexDirection="row">
          <FormControl fullWidth sx={{ p: 1 }}>
            <InputLabel sx={{ p: 1 }} id="demo-simple-select-label">
              {getTranslate("event")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterPlantEventCode}
              label={getTranslate("event")}
              onChange={(event: SelectChangeEvent) => {
                setFilterPlantEventCode(event.target.value as string);
              }}
            >
              {dictionary_005.map((item: any) => {
                return (
                  <MenuItem value={item.code}>{item[i18n.language]}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {filterPlantEventCode !== undefined && (
            <Button
              onClick={() => {
                setFilterPlantEventCode(undefined);
              }}
              startIcon={<CloseIcon fontSize="small" />}
            ></Button>
          )}
        </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={onFilterDialogClose}
            variant="text"
            color="primary"
            size="large"
            sx={{ mr: 1 }}
          >
            {t("cancel")}
          </Button>
          <Button
            onClick={() => {
              
              let resArr = [];
              if (filterPlantLocationCode) {
                resArr.push(" location=" + filterPlantLocationCode);
              }
              if (filterLifeFormCode) {
                resArr.push(" lifeforms=" + filterLifeFormCode);
              }
              if (filterPlantNameCode) {
                resArr.push(" name=" + filterPlantNameCode);
              }
              if (filterPlantConditionCode) {
                resArr.push(` condition LIKE '${filterPlantConditionCode}' `);
              }
              if (filterPlantEventCode) {
                resArr.push(` event LIKE '${filterPlantEventCode}' `);
              }
              let cql = resArr.length > 0 ? resArr.join(" and ") : null;
              //if(cql){
              let layerGroups: any = map?.getLayers().getArray();
              
              layerGroups.map((layerGroup: any) => {
                if (layerGroup?.getProperties().code == "user_layers") {
                  let layers: any[] = layerGroup.getLayers().getArray();
    
                  layers.map((item_) => {
                    if (
                      item_.getProperties().systemLayerProps.layername ===
                      "plant_points"
                    ) {
                      
                      var filterParams = {
                        FILTER: null,
                        CQL_FILTER: cql,
                        FEATUREID: null,
                      };
                      item_.getSource().updateParams(filterParams);
                    }
                  });
                }
              });
              //}
              setFilterDialogLayer(false);
            }}
            color="primary"
            size="large"
            variant="contained"
            autoFocus
          >
            {t("confirm")}
          </Button>
        </DialogActions>
      </Dialog>

      
    </>
  );
};
