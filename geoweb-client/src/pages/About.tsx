import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
//import styles from "./src/page.module.css";



//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About:  React.FC = () => {
  const { t } = useTranslation();
    return <>
           <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="top"
              flexDirection="row"
              flex={1}
              position="relative"
              p={0}
            >
              <p>{t('aboutUsPage.text')}</p>
          </Box>
    </>;
};

export default About;
