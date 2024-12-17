/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SocialMedia = ({ property1, className, rectangleClassName }) => {
  return (
    <div className={`social-media property-1-1-${property1} ${className}`}>
      <div className="as-a-skilled-project-wrapper">
        <p className="as-a-skilled-project">
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

      <img
        className="drop-down-minor"
        alt="Drop down minor"
        src={
          property1 === "variant-4"
            ? "/img/drop-down-minor-svgrepo-com-205.png"
            : "/img/drop-down-minor-svgrepo-com-203.png"
        }
      />

      {["variant-2", "variant-3"].includes(property1) && (
        <img
          className="img"
          alt="Drop down minor"
          src="/img/drop-down-minor-svgrepo-com-205.png"
        />
      )}

      <div className="div">
        <img
          className="rectangle-2"
          alt="Rectangle"
          src="/img/rectangle-113-28.png"
        />

        <img
          className={`rectangle-3 ${["default", "variant-4"].includes(property1) ? rectangleClassName : undefined}`}
          alt="Rectangle"
          src="/img/rectangle-113-29.png"
        />

        <img
          className="rectangle-4"
          alt="Rectangle"
          src="/img/rectangle-113-34.png"
        />
      </div>
    </div>
  );
};

SocialMedia.propTypes = {
  property1: PropTypes.oneOf([
    "variant-4",
    "variant-2",
    "variant-3",
    "default",
  ]),
};
