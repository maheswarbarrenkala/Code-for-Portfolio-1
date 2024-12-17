import React from "react";
import { IcRoundClose } from "../../components/IcRoundClose";
import { MobilePopUpTotal } from "../../components/MobilePopUpTotal";
import "./style.css";

export const PopUpFullStack = () => {
  return (
    <div className="pop-up-full-stack">
      <div className="overlap-wrapper-2">
        <div className="overlap-2">
          <MobilePopUpTotal
            className="mobile-pop-up-total-energies"
            property1="default"
          />
          <IcRoundClose className="design-component-instance-node" />
        </div>
      </div>
    </div>
  );
};
