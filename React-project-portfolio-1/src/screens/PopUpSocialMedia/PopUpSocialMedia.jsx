import React from "react";
import { IcRoundClose } from "../../components/IcRoundClose";
import { MobileSocialMedia } from "../../components/MobileSocialMedia";
import "./style.css";

export const PopUpSocialMedia = () => {
  return (
    <div className="pop-up-social-media">
      <div className="overlap-wrapper-3">
        <div className="overlap-3">
          <div className="rectangle-34" />

          <IcRoundClose className="ic-round-close-3" />
          <MobileSocialMedia
            className="mobile-social-media-instance"
            property1="default"
            rectangleClassName="mobile-social-media-2"
          />
        </div>
      </div>
    </div>
  );
};
