import React from "react";
import { IcRoundClose } from "../../components/IcRoundClose";
import { MobileFullStack } from "../../components/MobileFullStack";
import "./style.css";

export const PopUpFullStackScreen = () => {
  return (
    <div className="pop-up-full-stack-screen">
      <div className="pop-up-full-stack-2">
        <div className="overlap-group-11">
          <IcRoundClose className="ic-round-close-2" />
          <MobileFullStack
            className="mobile-full-stack-2"
            element="/img/31-1-36.png"
            elementClassName="mobile-full-stack-3"
            frameClassName="mobile-full-stack-2-instance"
            groupClassName="mobile-full-stack-instance"
            property1="default"
            rectangleClassName="mobile-full-stack-4"
          />
        </div>
      </div>
    </div>
  );
};
