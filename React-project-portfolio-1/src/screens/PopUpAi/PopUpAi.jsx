import React from "react";
import { IcRoundClose } from "../../components/IcRoundClose";
import { MobileAi } from "../../components/MobileAi";
import "./style.css";

export const PopUpAi = () => {
  return (
    <div className="pop-up-AI">
      <div className="overlap-wrapper-5">
        <div className="overlap-6">
          <IcRoundClose className="ic-round-close-6" />
          <MobileAi className="mobile-AI-instance" property1="default" />
        </div>
      </div>
    </div>
  );
};
