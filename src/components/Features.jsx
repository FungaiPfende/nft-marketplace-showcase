import React from "react";

import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={`${styles.featureCard}`}>
    <img src={iconUrl} alt="icon" className={`${styles.featureImg}`} />
    <p className={`${styles.featureText}`}>{iconText}</p>
  </div>
);

export const Features = () => {
  return (
    <div className={`banner03 ${styles.section} ${styles.bgPrimary}`}>
      <div className={`flex-col text-center ${styles.subSection}`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React
            Native
          </p>
        </div>

        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
        </div>
      </div>
    </div>
  );
};
