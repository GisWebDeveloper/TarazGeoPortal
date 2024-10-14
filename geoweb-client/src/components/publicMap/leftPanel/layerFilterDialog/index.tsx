import { useState, useEffect, useRef, useContext, CSSProperties } from "react";
import { LayerAttrDto } from "../../../../api/types/mapFolders";
import { mapOpenAPI } from "../../../../api/openApi";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Loader } from "../../../common/loader";
import { useTranslation } from "react-i18next";
import { translateField } from "../../../../utils/localization";
import { usePublicMapStore } from "../../../../hooks/usePublicMapStore";
import { mainLayerAttributes } from "./mockData";

interface Props {
  open: boolean;
  color?: CSSProperties["background"];
  layerItem: any;
  onClose?: () => void;
  onSubmit?: () => void;
}

enum FilterType{
    Contains,
    Equals,
    In
}

enum AttributeType{
    TEXT,
    BIGINT,
    NUMERIC,
    TIMESTAMP,
    BOOLEAN,
    DICTIONARY,
    DICTIONARY_STRING,
    DICTIONARY_INT

}

interface LayerFilter {
    attribute: LayerAttrDto,
    attributeType:AttributeType,
    filterType: FilterType,
    values:[]
}

export const LayerFilterDialog: React.FC<Props> = ({
  open,
  color,
  layerItem,
  onClose,
  onSubmit,
}) => {
  const { map, userLayers } = usePublicMapStore();
  const { i18n, t } = useTranslation();
  const [layerAttributes, setLayerAttributes] = useState<LayerAttrDto[]>([]);
  const [layerFilters, setLayerFilters] = useState<LayerFilter[]>([]);

  useEffect(() => {
    if (!layerItem) return;
    setLayerAttributes(mainLayerAttributes);
    
    /*mapOpenAPI
      .getOpenApiLayerAttribtes(layerItem.id)
      .then((response) => {
        const _attrs: any[] = response.data.filter(
          (x: any) => x.attrname !== "gid"
        );
        setLayerAttributes(_attrs);
      })
      .catch((error) => {
        console.log("error layers attrs", error);
      });
      */

  }, [layerItem]);

  return (
    <>
      <Dialog
        open={open}
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
          {`${t("filter")} - ${translateField(layerItem, "name", i18n.language)}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={onClose}
            variant="text"
            color="primary"
            size="large"
            sx={{ mr: 1 }}
          >
            {t("cancel")}
          </Button>
          <Button
            onClick={onSubmit}
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
