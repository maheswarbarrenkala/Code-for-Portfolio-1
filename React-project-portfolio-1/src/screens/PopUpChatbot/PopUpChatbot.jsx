import React from "react";
import { IcRoundClose } from "../../components/IcRoundClose";
import { MobileChatbot } from "../../components/MobileChatbot";
import "./style.css";

export const PopUpChatbot = () => {
  return (
    <div className="pop-up-chatbot">
      <div className="overlap-wrapper-4">
        <div className="overlap-5">
          <IcRoundClose className="ic-round-close-5" />
          <MobileChatbot
            className="mobile-chatbot-instance"
            property1="default"
          />
        </div>
      </div>
    </div>
  );
};
