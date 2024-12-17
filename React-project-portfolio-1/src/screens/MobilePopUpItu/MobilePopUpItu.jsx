import React from "react";
import { IcRoundClose } from "../../components/IcRoundClose";
import { MobileItu } from "../../components/MobileItu";
import "./style.css";

export const MobilePopUpItu = () => {
  return (
    <div className="mobile-pop-up-ITU">
      <div className="overlap-wrapper">
        <div className="overlap">
          <MobileItu className="mobile-itu-instance" property1="default" />
          <IcRoundClose className="ic-round-close-instance" />
        </div>
      </div>
    </div>
  );
};
