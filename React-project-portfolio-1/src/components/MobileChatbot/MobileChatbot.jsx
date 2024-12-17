/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MobileChatbot = ({ property1, className }) => {
  return (
    <div className={`mobile-chatbot property-1-37-${property1} ${className}`}>
      {["default", "variant-2"].includes(property1) && (
        <div className="i-ve-successfully-wrapper">
          <p className="i-ve-successfully">
            I&#39;ve successfully designed and implemented chatbots using
            cutting-edge technologies like OpenAI API, Python, Pinecone
            database, RAG architecture, and Lang Chain. I&#39;ve contributed to
            projects for reputable institutions such as the CSTU, demonstrating
            my ability to create intelligent and informative conversational
            agents. My experience in generative AI and chatbot development
            showcases my proficiency in NPL, machine learning, and data
            management. I have a deep understanding of RAG (Retrieval Augmented
            Generation) architecture, which allows chatbots to access and
            process relevant information from large datasets. By leveraging AI
            tools like OpenAI&#39;s, I&#39;ve been able to develop chatbots that
            can generate human-like text, answer questions, and complete a
            variety of tasks with high accuracy.
          </p>
        </div>
      )}

      <div className="overlap-group-7">
        {["default", "variant-2"].includes(property1) && (
          <img
            className="right-arrow-10"
            alt="Right arrow"
            src="/img/right-arrow-105.png"
          />
        )}

        {property1 === "variant-2" && (
          <img
            className="left-arrow-5"
            alt="Left arrow"
            src="/img/left-arrow-85.png"
          />
        )}

        {["default", "variant-2"].includes(property1) && (
          <div className="frame-14">
            <img
              className="rectangle-21"
              alt="Rectangle"
              src={
                property1 === "variant-2"
                  ? "/img/31-1-32.png"
                  : "/img/rectangle-85-9.png"
              }
            />

            <img
              className="rectangle-22"
              alt="Rectangle"
              src="/img/rectangle-85-10.png"
            />
          </div>
        )}

        {property1 === "variant-3" && (
          <p className="i-ve-successfully-2">
            I&#39;ve successfully designed and implemented chatbots using
            cutting-edge technologies like OpenAI API, Python, Pinecone
            database, RAG architecture, and Lang Chain. I&#39;ve contributed to
            projects for reputable institutions such as the CSTU, demonstrating
            my ability to create intelligent and informative conversational
            agents. My experience in generative AI and chatbot development
            showcases my proficiency in NPL, machine learning, and data
            management. I have a deep understanding of RAG (Retrieval Augmented
            Generation) architecture, which allows chatbots to access and
            process relevant information from large datasets. By leveraging AI
            tools like OpenAI&#39;s, I&#39;ve been able to develop chatbots that
            can generate human-like text, answer questions, and complete a
            variety of tasks with high accuracy.
          </p>
        )}
      </div>

      {property1 === "variant-3" && (
        <>
          <img
            className="left-arrow-6"
            alt="Left arrow"
            src="/img/left-arrow-85.png"
          />

          <div className="frame-15">
            <img
              className="rectangle-23"
              alt="Rectangle"
              src="/img/rectangle-85-9.png"
            />

            <img
              className="rectangle-24"
              alt="Rectangle"
              src="/img/rectangle-85-10.png"
            />
          </div>
        </>
      )}
    </div>
  );
};

MobileChatbot.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "variant-3", "default"]),
};
