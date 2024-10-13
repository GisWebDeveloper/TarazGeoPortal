import { IconButton, Tooltip} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import { useTranslation } from 'react-i18next';
import { Map } from 'ol';
import { CSSProperties, FC } from 'react';

type Props = {
  map: Map;
  color?: CSSProperties['background'];
};

export const HomeExtentButton: FC<Props> = ({ map, color }) => {
  const { t } = useTranslation();

  const handleButtonClick = () => {
    if (map) {
      let zoom = 13;
      let center = [7945476.188792471, 5295863.006421878];
      map.getView()?.setZoom(zoom);
      map.getView()?.setCenter(center);
      //map.getView().fit([7880019.8447,5262810.0246,8011415.0964,5331603.3501]);
    }
  };

  return (
    <>
      <Tooltip title={t('main_extent')} placement="left">
        <IconButton
          style={{
            background: color ? color : 'rgb(64 152 68 / 70%)',
            borderRadius: 0,
          }}
          onClick={handleButtonClick}
          sx={{ color: 'white' }}
        >
          <PublicIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};