/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MobileSocialMedia = ({
  property1,
  className,
  rectangleClassName,
}) => {
  return (
    <div
      className={`mobile-social-media property-1-24-${property1} ${className}`}
    >
      <div className="frame-10">
        <p className="as-a-skilled-project-2">
          As a skilled project manager and data analyst, I successfully executed
          a Social Media Campaign for Naz University, aimed at increasing new
          admissions. I meticulously analyzed data to identify target audiences,
          track campaign performance, and refine our strategies. By leveraging
          social media platforms and employing innovative tactics, I helped Naz
          University achieve its goals of increasing website traffic, generating
          leads, and improving brand awareness. My ability to develop and
          implement effective social media campaigns, coupled with my expertise
          in training and managing university staff, played a crucial role in
          the project&#39;s success. I overcame challenges, such as budget
          constraints and algorithm changes, through strategic planning and
          adaptability, ensuring that the campaign remained on track and
          delivered results. My dedication to data-driven decision-making and my
          ability to execute successful social media campaigns make me a
          valuable asset to any organization seeking to enhance its online
          presence.
        </p>
      </div>

      {property1 === "default" && (
        <div className="overlap-group-4">
          <img
            className="right-arrow-6"
            alt="Right arrow"
            src="/img/right-arrow-105.png"
          />

          <div className="frame-11">
            <img
              className="rectangle-9"
              alt="Rectangle"
              src="/img/rectangle-113-28.png"
            />

            <img
              className={`rectangle-10 ${rectangleClassName}`}
              alt="Rectangle"
              src="/img/rectangle-113-29.png"
            />

            <img
              className="rectangle-11"
              alt="Rectangle"
              src="/img/rectangle-113-34.png"
            />
          </div>
        </div>
      )}

      {["variant-2", "variant-3", "variant-4"].includes(property1) && (
        <img
          className="right-arrow-7"
          alt="Right arrow"
          src={
            property1 === "variant-4"
              ? "/img/left-arrow-85.png"
              : "/img/right-arrow-105.png"
          }
        />
      )}

      {["variant-2", "variant-3"].includes(property1) && (
        <img
          className="left-arrow-4"
          alt="Left arrow"
          src="/img/left-arrow-85.png"
        />
      )}

      {["variant-2", "variant-3", "variant-4"].includes(property1) && (
        <div className="frame-12">
          <img
            className="rectangle-12"
            alt="Rectangle"
            src="/img/rectangle-113-28.png"
          />

          <img
            className="rectangle-13"
            alt="Rectangle"
            src="/img/rectangle-113-29.png"
          />

          <img
            className="rectangle-14"
            alt="Rectangle"
            src="/img/rectangle-113-34.png"
          />
        </div>
      )}
    </div>
  );
};

MobileSocialMedia.propTypes = {
  property1: PropTypes.oneOf([
    "variant-4",
    "variant-2",
    "variant-3",
    "default",
  ]),
};
