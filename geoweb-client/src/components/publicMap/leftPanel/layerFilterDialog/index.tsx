import { useState, useEffect, useRef, useContext, CSSProperties, ReactNode } from "react";
import { LayerAttrDto } from "../../../../api/types/mapFolders";
import { mapOpenAPI } from "../../../../api/openApi";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Loader } from "../../../common/loader";
import { useTranslation } from "react-i18next";
import { translateField } from "../../../../utils/localization";
import { usePublicMapStore } from "../../../../hooks/usePublicMapStore";
import { dictionary_001, dictionary_002, dictionary_003, dictionary_005, dictionary_006, mainLayerAttributes } from "./mockData";
import CloseIcon from '@mui/icons-material/Close';


interface Props {
  open: boolean;
  color?: CSSProperties["background"];
  onClose?: () => void;
  onSubmit: () => void;
  title?:string;
  isLoading?:boolean;
  children:ReactNode;
}

export const LayerFilterDialog: React.FC<Props> = ({
  open,
  color,
  onClose,
  onSubmit,
  title,
  children
}) => {
  const { map, userLayers } = usePublicMapStore();
  const { i18n, t } = useTranslation();
 
  
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
          {title}
        </DialogTitle>
        <DialogContent sx={{ p: 2 }}>
          <DialogContentText id="dialog-description">
          {children}
          </DialogContentText>
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
