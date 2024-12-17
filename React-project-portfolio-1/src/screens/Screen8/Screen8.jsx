import React from "react";
import { IcRoundClose } from "../../components/IcRoundClose";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import "./style.css";

export const Screen8 = () => {
  return (
    <div className="screen-8">
      <div className="pop-up-full-stack-3">
        <div className="overlap-4">
          <IcRoundClose className="ic-round-close-4" />
          <PropertyDefaultWrapper
            className="mobile-full-stack-3-instance"
            property1="default"
            rectangle="/img/rectangle-83-28.png"
            rectangleClassName="mobile-full-stack-5"
          />
        </div>
      </div>
    </div>
  );
};
