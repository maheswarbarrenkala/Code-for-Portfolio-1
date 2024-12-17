/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  rectangleClassName,
  rectangle = "/img/31-1-32.png",
}) => {
  return (
    <div
      className={`property-default-wrapper property-1-31-${property1} ${className}`}
    >
      {property1 === "default" && (
        <div className="as-a-skilled-web-wrapper">
          <p className="as-a-skilled-web">
            As a skilled web developer, I&#39;ve successfully designed and
            developed a variety of websites, including corporate portals,
            educational platforms, photo galleries, blogs, and personal
            portfolios. My expertise in HTML, CSS, and JavaScript, coupled with
            frameworks like Angular, has enabled me to create visually
            appealing, responsive, and user-friendly web applications. I&#39;ve
            contributed to projects for reputable organizations such as
            TotalEnergies and the International Technological University,
            demonstrating my ability to deliver high-quality web solutions that
            meet the unique needs of diverse clients.
          </p>
        </div>
      )}

      <div className="overlap-group-5">
        {property1 === "default" && (
          <>
            <img
              className="right-arrow-8"
              alt="Right arrow"
              src="/img/right-arrow-105.png"
            />

            <div className="frame-13">
              <img
                className={`rectangle-15 ${rectangleClassName}`}
                alt="Rectangle"
                src={rectangle}
              />

              <img
                className="rectangle-16"
                alt="Rectangle"
                src="/img/rectangle-83-31.png"
              />
            </div>
          </>
        )}

        {["variant-2", "variant-3"].includes(property1) && (
          <p className="as-a-skilled-web-2">
            As a skilled web developer, I&#39;ve successfully designed and
            developed a variety of websites, including corporate portals,
            educational platforms, photo galleries, blogs, and personal
            portfolios. My expertise in HTML, CSS, and JavaScript, coupled with
            frameworks like Angular, has enabled me to create visually
            appealing, responsive, and user-friendly web applications. I&#39;ve
            contributed to projects for reputable organizations such as
            TotalEnergies and the International Technological University,
            demonstrating my ability to deliver high-quality web solutions that
            meet the unique needs of diverse clients.
          </p>
        )}
      </div>

      {["variant-2", "variant-3"].includes(property1) && (
        <>
          <img
            className="right-arrow-9"
            alt="Right arrow"
            src={
              property1 === "variant-3"
                ? "/img/left-arrow-85.png"
                : "/img/right-arrow-105.png"
            }
          />

          <div className="overlap-group-6">
            <img
              className="rectangle-17"
              alt="Rectangle"
              src={
                property1 === "variant-2"
                  ? "/img/left-arrow-85.png"
                  : "/img/rectangle-83-28.png"
              }
            />

            {property1 === "variant-2" && (
              <div className="frame-13">
                <img
                  className="rectangle-18"
                  alt="Rectangle"
                  src="/img/rectangle-83-27.png"
                />

                <img
                  className="rectangle-19"
                  alt="Rectangle"
                  src="/img/rectangle-83-31.png"
                />
              </div>
            )}

            {property1 === "variant-3" && (
              <img
                className="rectangle-20"
                alt="Rectangle"
                src="/img/rectangle-83-31.png"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
  rectangle: PropTypes.string,
};
