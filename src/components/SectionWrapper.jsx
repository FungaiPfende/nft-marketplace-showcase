import React from "react";

import styles from "../styles/Global";
import assets from "../assets";

import { Button } from "./Button";

export const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}
    >
      <div
        className={`flex items-center w-11/12 sm:w-full minmd:w-3/4 ${styles.boxClass}`}
      >
        <div className={`fadeLeftMini ${styles.descDiv}`}>
          <h1 className={`${styles.h1Text}`}>{title}</h1>
          <p className={`${styles.descriptionText}`}>{description}</p>

          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@kxdammo/NFTMarketplace?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>

        <div className={`flex-1 p-8 sm:px-0 ${styles.flexCenter}`}>
          <img src={mockupImg} alt="mockup" className={styles.sectionImg} />
        </div>
      </div>
    </div>
  );
};
