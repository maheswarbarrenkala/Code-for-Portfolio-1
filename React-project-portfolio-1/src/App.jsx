import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AmazonBiddingPop } from "./screens/AmazonBiddingPop";
import { ChatbotPopUp } from "./screens/ChatbotPopUp";
import { DeepLearningPopUp } from "./screens/DeepLearningPopUp";
import { DivWrapper } from "./screens/DivWrapper";
import { DocumentControl } from "./screens/DocumentControl";
import { EduCloudPopUp } from "./screens/EduCloudPopUp";
import { Frame } from "./screens/Frame";
import { FrameScreen } from "./screens/FrameScreen";
import { MobilePopUpItu } from "./screens/MobilePopUpItu";
import { OracleJava } from "./screens/OracleJava";
import { PopUpAi } from "./screens/PopUpAi";
import { PopUpChatbot } from "./screens/PopUpChatbot";
import { PopUpDocument } from "./screens/PopUpDocument";
import { PopUpFullStack } from "./screens/PopUpFullStack";
import { PopUpFullStackScreen } from "./screens/PopUpFullStackScreen";
import { PopUpSocialMedia } from "./screens/PopUpSocialMedia";
import { PromptEngineering } from "./screens/PromptEngineering";
import { Screen8 } from "./screens/Screen8";
import { SmartParkingSystem } from "./screens/SmartParkingSystem";
import { SocialMediaScreen } from "./screens/SocialMediaScreen";
import { UiMobile } from "./screens/UiMobile";
import { UxDocumentationPop } from "./screens/UxDocumentationPop";
import { WebsiteUiPopUp } from "./screens/WebsiteUiPopUp";
import { WorkExpPopUpItu } from "./screens/WorkExpPopUpItu";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Frame />,
  },
  {
    path: "/frame-56",
    element: <Frame />,
  },
  {
    path: "/frame-47-1",
    element: <FrameScreen />,
  },
  {
    path: "/frame-47-2",
    element: <DivWrapper />,
  },
  {
    path: "/mobile-pop-up-itu",
    element: <MobilePopUpItu />,
  },
  {
    path: "/social-media-campaing-pop-up",
    element: <SocialMediaScreen />,
  },
  {
    path: "/pop-up-full-stack-u951",
    element: <PopUpFullStack />,
  },
  {
    path: "/pop-up-full-stacku952",
    element: <PopUpFullStackScreen />,
  },
  {
    path: "/pop-up-social-media-marketing",
    element: <PopUpSocialMedia />,
  },
  {
    path: "/pop-up-full-stacku953",
    element: <Screen8 />,
  },
  {
    path: "/pop-up-chatbot",
    element: <PopUpChatbot />,
  },
  {
    path: "/pop-up-ai",
    element: <PopUpAi />,
  },
  {
    path: "/chatbot-pop-up",
    element: <ChatbotPopUp />,
  },
  {
    path: "/deep-learning-pop-up",
    element: <DeepLearningPopUp />,
  },
  {
    path: "/prompt-engineering-pop-up",
    element: <PromptEngineering />,
  },
  {
    path: "/ux-documentation-pop-up",
    element: <UxDocumentationPop />,
  },
  {
    path: "/smart-parking-system-pop-up",
    element: <SmartParkingSystem />,
  },
  {
    path: "/ui-mobile-application-pop-up",
    element: <UiMobile />,
  },
  {
    path: "/edu-cloud-pop-up",
    element: <EduCloudPopUp />,
  },
  {
    path: "/website-ui-pop-up",
    element: <WebsiteUiPopUp />,
  },
  {
    path: "/document-control-system-pop-up",
    element: <DocumentControl />,
  },
  {
    path: "/amazon-bidding-pop-up",
    element: <AmazonBiddingPop />,
  },
  {
    path: "/work-exp-pop-up-itu",
    element: <WorkExpPopUpItu />,
  },
  {
    path: "/pop-up-document-control-system",
    element: <PopUpDocument />,
  },
  {
    path: "/oracle-java",
    element: <OracleJava />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
