/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MobileAi = ({ property1, className }) => {
  return (
    <div className={`mobile-AI property-1-45-${property1} ${className}`}>
      {["default", "variant-3"].includes(property1) && (
        <div className="frame-16">
          <p className="i-ve-successfully-3">
            <span className="text-wrapper-2">
              I&#39;ve successfully tackled a wide range of challenging
              projects, including fake news detection, stock market prediction,
              and gender recognition using voice. My expertise in deep learning
              frameworks and techniques, such as neural networks, has enabled me
              to develop sophisticated models that can analyze complex data,
              identify patterns, and make accurate predictions. I&#39;ve applied
              my knowledge of machine learning algorithms to solve real-world
              problems, demonstrating my ability to leverage AI to drive
              innovation and solve complex challenges. My proficiency in neural
              networks, including convolutional neural networks (CNNs),
              recurrent neural networks (RNNs), and generative adversarial
              networks
              <br />
            </span>

            <span className="text-wrapper-3">
              {" "}
              (GANs), has been instrumental in developing cutting-edge AI
              solutions.
            </span>
          </p>
        </div>
      )}

      {["default", "variant-2"].includes(property1) && (
        <div className="overlap-group-8">
          {property1 === "default" && (
            <>
              <img
                className="right-arrow-11"
                alt="Right arrow"
                src="/img/right-arrow-105.png"
              />

              <div className="frame-17">
                <img
                  className="rectangle-25"
                  alt="Rectangle"
                  src="/img/rectangle-87-24.png"
                />

                <img
                  className="rectangle-26"
                  alt="Rectangle"
                  src="/img/rectangle-87-25.png"
                />
              </div>
            </>
          )}

          {property1 === "variant-2" && (
            <p className="i-ve-successfully-4">
              <span className="text-wrapper-2">
                I&#39;ve successfully tackled a wide range of challenging
                projects, including fake news detection, stock market
                prediction, and gender recognition using voice. My expertise in
                deep learning frameworks and techniques, such as neural
                networks, has enabled me to develop sophisticated models that
                can analyze complex data, identify patterns, and make accurate
                predictions. I&#39;ve applied my knowledge of machine learning
                algorithms to solve real-world problems, demonstrating my
                ability to leverage AI to drive innovation and solve complex
                challenges. My proficiency in neural networks, including
                convolutional neural networks (CNNs), recurrent neural networks
                (RNNs), and generative adversarial networks
                <br />
              </span>

              <span className="text-wrapper-3">
                {" "}
                (GANs), has been instrumental in developing cutting-edge AI
                solutions.
              </span>
            </p>
          )}
        </div>
      )}

      {["variant-2", "variant-3"].includes(property1) && (
        <img
          className="right-arrow-12"
          alt="Right arrow"
          src={
            property1 === "variant-3"
              ? "/img/left-arrow-85.png"
              : "/img/right-arrow-105.png"
          }
        />
      )}

      {property1 === "variant-2" && (
        <img
          className="left-arrow-7"
          alt="Left arrow"
          src="/img/left-arrow-85.png"
        />
      )}

      {["variant-2", "variant-3"].includes(property1) && (
        <div className="frame-18">
          <img
            className="rectangle-27"
            alt="Rectangle"
            src="/img/rectangle-87-24.png"
          />

          <img
            className="rectangle-28"
            alt="Rectangle"
            src="/img/rectangle-87-25.png"
          />
        </div>
      )}
    </div>
  );
};

MobileAi.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
