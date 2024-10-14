import { Box } from "@mui/material";
import React from "react";
import './about.css';
import { useTranslation } from "react-i18next";

//import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


const About: React.FC = () => {

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
      <div className="about-container">
        <h2 className="our-product-heading">{t('aboutUsPage.header')}</h2>
        <div className="profile-image">
          <img style={{ width: "60%" }} src="images/Taraz.jpg" alt="Taraz" className="center" />
        </div>
        <div className="description">
          <p>
          {t('aboutUsPage.text')}
          </p>
        </div>

      </div>
    </Box>
  </>;
};

export default About;
