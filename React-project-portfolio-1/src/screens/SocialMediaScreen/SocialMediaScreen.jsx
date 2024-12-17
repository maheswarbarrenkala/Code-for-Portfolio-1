import React from "react";
import { SocialMedia } from "../../components/SocialMedia";
import "./style.css";

export const SocialMediaScreen = () => {
  return (
    <div className="social-media-screen">
      <div className="social-media-wrapper">
        <SocialMedia
          className="social-media-campaign"
          property1="default"
          rectangleClassName="social-media-instance"
        />
      </div>
    </div>
  );
};
