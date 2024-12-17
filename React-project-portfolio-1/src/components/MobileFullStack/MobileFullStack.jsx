/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MobileFullStack = ({
  property1,
  className,
  groupClassName,
  frameClassName,
  elementClassName,
  element = "/img/31-1-32.png",
  rectangleClassName,
}) => {
  return (
    <div
      className={`mobile-full-stack property-1-14-${property1} ${className}`}
    >
      {["default", "variant-2", "variant-4", "variant-5"].includes(
        property1,
      ) && (
        <div className={`group-2 ${groupClassName}`}>
          {["default", "variant-5"].includes(property1) && (
            <div className="as-a-skilled-android-wrapper">
              <p className="as-a-skilled-android">
                As a skilled Android developer with a proven track record of
                creating innovative and efficient mobile applications, I
                designed and developed a comprehensive Inventory Management
                solution using Kotlin, Android Studio, and Firebase. Leveraging
                my deep understanding of Kotlin&#39;s modern syntax,
                object-oriented programming principles, and Android development
                best practices, I crafted a user-friendly and intuitive
                interface that seamlessly guides users through the inventory
                management process. By strategically utilizing Firebase&#39;s
                real-time database and cloud storage capabilities, I implemented
                a robust backend infrastructure that ensures seamless data
                synchronization across multiple devices, providing real-time
                insights into inventory levels and stock movements. Key features
                of the app include barcode scanning, stock level tracking, low
                stock alerts, and detailed reporting, empowering users to make
                informed decisions and optimize inventory management processes.
                To enhance security and convenience, I integrated a single
                sign-on (SSO) feature, allowing users to effortlessly access the
                app using their existing credentials. This project not only
                showcases my technical proficiency in Kotlin, Android Studio,
                and Firebase but also highlights my ability to deliver
                high-quality, feature-rich mobile applications that meet the
                evolving needs of businesses.
              </p>
            </div>
          )}

          {["variant-2", "variant-4"].includes(property1) && (
            <div className="frame-4">
              <p className="as-a-skilled-android-2">
                As a skilled Android developer with a proven track record of
                creating innovative and efficient mobile applications, I
                designed and developed a comprehensive Inventory Management
                solution using Kotlin, Android Studio, and Firebase. Leveraging
                my deep understanding of Kotlin&#39;s modern syntax,
                object-oriented programming principles, and Android development
                best practices, I crafted a user-friendly and intuitive
                interface that seamlessly guides users through the inventory
                management process. By strategically utilizing Firebase&#39;s
                real-time database and cloud storage capabilities, I implemented
                a robust backend infrastructure that ensures seamless data
                synchronization across multiple devices, providing real-time
                insights into inventory levels and stock movements. Key features
                of the app include barcode scanning, stock level tracking, low
                stock alerts, and detailed reporting, empowering users to make
                informed decisions and optimize inventory management processes.
                To enhance security and convenience, I integrated a single
                sign-on (SSO) feature, allowing users to effortlessly access the
                app using their existing credentials. This project not only
                showcases my technical proficiency in Kotlin, Android Studio,
                and Firebase but also highlights my ability to deliver
                high-quality, feature-rich mobile applications that meet the
                evolving needs of businesses.
              </p>
            </div>
          )}

          {property1 === "variant-2" && (
            <div className="overlap-group-3">
              <img
                className="right-arrow-3"
                alt="Right arrow"
                src="/img/right-arrow-105.png"
              />

              <img
                className="left-arrow-2"
                alt="Left arrow"
                src="/img/left-arrow-85.png"
              />

              <div className="frame-5">
                <img
                  className="android-developer"
                  alt="Android developer"
                  src="/img/android-developer-0m3xeqfvwcisdodg-6.png"
                />

                <img
                  className="android-developer-2"
                  alt="Android developer"
                  src="/img/android-developer-ledu48pvwl9fgxzw-6.png"
                />

                <img className="element" alt="Element" src="/img/31-1-32.png" />

                <div className="rectangle-wrapper">
                  <img
                    className="rectangle-5"
                    alt="Rectangle"
                    src="/img/rectangle-113-36.png"
                  />
                </div>
              </div>
            </div>
          )}

          {["default", "variant-4", "variant-5"].includes(property1) && (
            <img
              className="right-arrow-4"
              alt="Right arrow"
              src={
                property1 === "variant-5"
                  ? "/img/left-arrow-85.png"
                  : "/img/right-arrow-105.png"
              }
            />
          )}

          {property1 === "variant-4" && (
            <>
              <img
                className="left-arrow-3"
                alt="Left arrow"
                src="/img/left-arrow-85.png"
              />

              <div className="frame-6">
                <img
                  className="android-developer-3"
                  alt="Android developer"
                  src="/img/android-developer-0m3xeqfvwcisdodg-6.png"
                />

                <img
                  className="android-developer-4"
                  alt="Android developer"
                  src="/img/android-developer-ledu48pvwl9fgxzw-6.png"
                />

                <img
                  className="element-2"
                  alt="Element"
                  src="/img/31-1-35.png"
                />

                <div className="img-wrapper">
                  <img
                    className="rectangle-6"
                    alt="Rectangle"
                    src="/img/rectangle-113-36.png"
                  />
                </div>
              </div>
            </>
          )}

          {["default", "variant-5"].includes(property1) && (
            <div className={`frame-7 ${frameClassName}`}>
              <img
                className="android-developer-5"
                alt="Android developer"
                src="/img/android-developer-0m3xeqfvwcisdodg-6.png"
              />

              <img
                className="android-developer-6"
                alt="Android developer"
                src="/img/android-developer-ledu48pvwl9fgxzw-6.png"
              />

              <img
                className={`element-3 ${elementClassName}`}
                alt="Element"
                src={property1 === "variant-5" ? "/img/31-1-36.png" : element}
              />

              <div className="group-3">
                <img
                  className={`rectangle-7 ${rectangleClassName}`}
                  alt="Rectangle"
                  src="/img/rectangle-113-36.png"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {property1 === "variant-3" && (
        <>
          <div className="group-4">
            <div className="frame-8">
              <p className="as-a-skilled-android-3">
                As a skilled Android developer with a proven track record of
                creating innovative and efficient mobile applications, I
                designed and developed a comprehensive Inventory Management
                solution using Kotlin, Android Studio, and Firebase. Leveraging
                my deep understanding of Kotlin&#39;s modern syntax,
                object-oriented programming principles, and Android development
                best practices, I crafted a user-friendly and intuitive
                interface that seamlessly guides users through the inventory
                management process. By strategically utilizing Firebase&#39;s
                real-time database and cloud storage capabilities, I implemented
                a robust backend infrastructure that ensures seamless data
                synchronization across multiple devices, providing real-time
                insights into inventory levels and stock movements. Key features
                of the app include barcode scanning, stock level tracking, low
                stock alerts, and detailed reporting, empowering users to make
                informed decisions and optimize inventory management processes.
                To enhance security and convenience, I integrated a single
                sign-on (SSO) feature, allowing users to effortlessly access the
                app using their existing credentials. This project not only
                showcases my technical proficiency in Kotlin, Android Studio,
                and Firebase but also highlights my ability to deliver
                high-quality, feature-rich mobile applications that meet the
                evolving needs of businesses.
              </p>
            </div>

            <img
              className="right-arrow-5"
              alt="Right arrow"
              src="/img/right-arrow-105.png"
            />

            <img
              className="left-arrow-3"
              alt="Left arrow"
              src="/img/left-arrow-85.png"
            />
          </div>

          <div className="frame-9">
            <img
              className="android-developer-7"
              alt="Android developer"
              src="/img/android-developer-0m3xeqfvwcisdodg-6.png"
            />

            <img
              className="android-developer-8"
              alt="Android developer"
              src="/img/android-developer-ledu48pvwl9fgxzw-6.png"
            />

            <img className="element-4" alt="Element" src="/img/31-1-32.png" />

            <div className="group-5">
              <img
                className="rectangle-8"
                alt="Rectangle"
                src="/img/rectangle-113-36.png"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

MobileFullStack.propTypes = {
  property1: PropTypes.oneOf([
    "default",
    "variant-5",
    "variant-2",
    "variant-3",
    "variant-4",
  ]),
  element: PropTypes.string,
};
