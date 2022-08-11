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
  reverse,
}) => {
  return (
    <div
      className={`
        min-h-screen 
        ${styles.section}
        ${reverse ? styles.bgWhite : styles.bgPrimary} 
        ${banner}
      `}
    >
      <div
        className={`
          flex items-center w-11/12 sm:w-full minmd:w-3/4
          ${reverse ? styles.boxReverseClass : styles.boxClass}
        `}
      >
        <div
          className={`
            ${styles.descDiv}
            ${reverse ? " fadeRightMini" : " fadeLeftMini"}
            //remove the below line to left align all text
            ${reverse ? styles.textRight : styles.textLeft} 
          `}
        >
          <h1
            className={`
              ${styles.h1Text}
              ${reverse ? styles.blackText : styles.whiteText}
              `}
          >
            {title}
          </h1>
          <p
            className={`
              ${styles.descriptionText}
              ${reverse ? styles.blackText : styles.whiteText}
            `}
          >
            {description}
          </p>

          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@kxdammo/NFTMarketplace?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>

        <div className={`flex-1 p-8 sm:px-0 ${styles.flexCenter}`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`
              ${reverse ? " fadeLeftMini" : " fadeRightMini"}
              ${styles.sectionImg} 
            `}
          />
        </div>
      </div>
    </div>
  );
};
