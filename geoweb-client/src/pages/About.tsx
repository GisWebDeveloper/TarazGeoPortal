import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import './about.css';

//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About: React.FC = () => {
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
      {/* <p>Mina jerde biz turali degen aqparat bolui kerek</p> */}
      <img src="images/Taraz.jpg" alt="" style={{ width : 'inherit'}} />
    </Box>
  </>;
};

export default About;
