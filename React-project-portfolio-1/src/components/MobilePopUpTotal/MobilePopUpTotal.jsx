/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MobilePopUpTotal = ({ property1, className }) => {
  return (
    <div
      className={`mobile-pop-up-total property-1-8-${property1} ${className}`}
    >
      {["default", "variant-3"].includes(property1) && (
        <div className="as-a-full-stack-web-wrapper">
          <p className="as-a-full-stack-web">
            As a Full-Stack Web Developer at Accenture, a leading global
            professional services company, I had the opportunity to work on
            projects for Total Energies, a major player in the global energy
            sector. My responsibilities included developing and maintaining web
            applications using Java, HTML, CSS, and Spring Framework, leveraging
            my strong technical skills and understanding of web development best
            practices. I successfully implemented changes such as logo updates,
            URL domain migrations, and link redirects, ensuring a seamless user
            experience for TotalEnergies&#39; customers and employees. My work
            at Accenture and TotalEnergies showcased my ability to deliver
            high-quality web solutions within a fast-paced and dynamic
            environment, while effectively collaborating with cross-functional
            teams.
          </p>
        </div>
      )}

      {["default", "variant-2"].includes(property1) && (
        <div className="overlap-group-2">
          {property1 === "default" && (
            <>
              <img
                className="right-arrow"
                alt="Right arrow"
                src="/img/right-arrow-105.png"
              />

              <div className="frame-2">
                <img className="total" alt="Total" src="/img/total-1-3.png" />

                <img
                  className="total-2"
                  alt="Total"
                  src="/img/total-1-1-3.png"
                />
              </div>
            </>
          )}

          {property1 === "variant-2" && (
            <p className="p">
              As a Full-Stack Web Developer at Accenture, a leading global
              professional services company, I had the opportunity to work on
              projects for Total Energies, a major player in the global energy
              sector. My responsibilities included developing and maintaining
              web applications using Java, HTML, CSS, and Spring Framework,
              leveraging my strong technical skills and understanding of web
              development best practices. I successfully implemented changes
              such as logo updates, URL domain migrations, and link redirects,
              ensuring a seamless user experience for TotalEnergies&#39;
              customers and employees. My work at Accenture and TotalEnergies
              showcased my ability to deliver high-quality web solutions within
              a fast-paced and dynamic environment, while effectively
              collaborating with cross-functional teams.
            </p>
          )}
        </div>
      )}

      {["variant-2", "variant-3"].includes(property1) && (
        <img
          className="right-arrow-2"
          alt="Right arrow"
          src={
            property1 === "variant-3"
              ? "/img/left-arrow-83.png"
              : "/img/right-arrow-105.png"
          }
        />
      )}

      {property1 === "variant-2" && (
        <img
          className="left-arrow"
          alt="Left arrow"
          src="/img/left-arrow-83.png"
        />
      )}

      {["variant-2", "variant-3"].includes(property1) && (
        <div className="frame-3">
          <img className="total-3" alt="Total" src="/img/total-1-3.png" />

          <img className="total-4" alt="Total" src="/img/total-1-1-3.png" />
        </div>
      )}
    </div>
  );
};

MobilePopUpTotal.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
