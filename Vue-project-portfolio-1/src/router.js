import Vue from "vue";
import Router from "vue-router";
import Frame56 from "./components/Frame56";
import Frame47 from "./components/Frame47";
import Frame472 from "./components/Frame472";
import MobilePopUpITU from "./components/MobilePopUpITU";
import SocialMediaCampaingPopUp from "./components/SocialMediaCampaingPopUp";
import PopUpFullStack1 from "./components/PopUpFullStack1";
import PopUpFullStack2 from "./components/PopUpFullStack2";
import PopUpSocialMediaMarketing from "./components/PopUpSocialMediaMarketing";
import PopUpFullStack3 from "./components/PopUpFullStack3";
import PopUpChatbot from "./components/PopUpChatbot";
import PopUpAI from "./components/PopUpAI";
import ChatbotPopUp from "./components/ChatbotPopUp";
import PromptEngineeringPopUp from "./components/PromptEngineeringPopUp";
import UXDocumentationPopUp from "./components/UXDocumentationPopUp";
import SmartParkingSystemPopUp from "./components/SmartParkingSystemPopUp";
import UIMobileApplicationPopUp from "./components/UIMobileApplicationPopUp";
import EduCloudPopUp from "./components/EduCloudPopUp";
import WebsiteUiPopUp from "./components/WebsiteUiPopUp";
import DocumentControlSystemPopUp from "./components/DocumentControlSystemPopUp";
import AmazonBiddingPopUp from "./components/AmazonBiddingPopUp";
import WorkExpPopUpItu from "./components/WorkExpPopUpItu";
import PopUpDocumentControlSystem from "./components/PopUpDocumentControlSystem";
import OracleJava from "./components/OracleJava";
import {
  mobilePopUpITUData,
  socialMediaCampaingPopUpData,
  popUpFullStack1Data,
  popUpFullStack2Data,
  popUpSocialMediaMarketingData,
  popUpFullStack3Data,
  popUpChatbotData,
  popUpAIData,
  chatbotPopUp1Data,
  promptEngineeringPopUpData,
  uXDocumentationPopUpData,
  smartParkingSystemPopUpData,
  uIMobileApplicationPopUpData,
  eduCloudPopUpData,
  websiteUiPopUpData,
  documentControlSystemPopUpData,
  amazonBiddingPopUpData,
  workExpPopUpItuData,
  popUpDocumentControlSystemData,
  oracleJavaData,
} from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/frame-56",
      component: Frame56,
      props: {
        frame56:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/6758904031e13985e3d9ebdf/img/rectangle-71-4.png",
        rectangle73:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/6758904031e13985e3d9ebdf/img/rectangle-73@2x.png",
        accenture11:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/accenture--1-2.png",
        ljHHIhaSiljHH:
          "Lj h h iha siLj h h iha sih i h ifih ah fLj h h iha sih i h ifih ah fLj h h iha sih i h ifih ah fLj h h iha sih i h ifih ah fLj h h iha sih i h ifih ah fh i h ifih ah f",
      },
    },
    {
      path: "/frame-47-1",
      component: Frame47,
      props: {
        x311:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/rectangle-77.png",
        androidDeveloper0M3Xeqfvwcisdodg:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/6758923e21607ca539135d5d/img/android-developer-0m3xeqfvwcisdodg-5.png",
        androidDeveloperLedu48Pvwl9Fgxzw:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/android-developer-ledu48pvwl9fgxzw.png",
        rectangle77:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/rectangle-77.png",
        overlapGroup:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/rectangle-77.png",
        rectangle78:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/rectangle-78@2x.png",
      },
    },
    {
      path: "/frame-47-2",
      component: Frame472,
      props: {
        frame47:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/6758904031e13985e3d9ebdf/img/rectangle-85.png",
        rectangle851:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/6758904031e13985e3d9ebdf/img/rectangle-85-1.png",
        rectangle852:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/6758904031e13985e3d9ebdf/img/rectangle-85-2.png",
      },
    },
    {
      path: "/mobile-pop-up-itu",
      component: MobilePopUpITU,
      props: {
        icRoundClose:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/ic-round-close@2x.png",
        mobileItuProps: mobilePopUpITUData.mobileItuProps,
      },
    },
    {
      path: "/social-media-campaing-pop-up",
      component: SocialMediaCampaingPopUp,
      props: { socialMediaCampaignProps: socialMediaCampaingPopUpData.socialMediaCampaignProps },
    },
    {
      path: "/pop-up-full-stack-u951",
      component: PopUpFullStack1,
      props: {
        icRoundClose:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/ic-round-close@2x.png",
        mobilePopUpTotalEnergiesProps: popUpFullStack1Data.mobilePopUpTotalEnergiesProps,
      },
    },
    {
      path: "/pop-up-full-stacku952",
      component: PopUpFullStack2,
      props: {
        icRoundClose:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/ic-round-close@2x.png",
        mobileFullStack2Props: popUpFullStack2Data.mobileFullStack2Props,
      },
    },
    {
      path: "/pop-up-social-media-marketing",
      component: PopUpSocialMediaMarketing,
      props: {
        icRoundClose:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/ic-round-close@2x.png",
        mobileSocialMediaProps: popUpSocialMediaMarketingData.mobileSocialMediaProps,
      },
    },
    {
      path: "/pop-up-full-stacku953",
      component: PopUpFullStack3,
      props: {
        icRoundClose:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/ic-round-close@2x.png",
        mobileFullStack3Props: popUpFullStack3Data.mobileFullStack3Props,
      },
    },
    {
      path: "/pop-up-chatbot",
      component: PopUpChatbot,
      props: {
        icRoundClose:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/ic-round-close@2x.png",
        mobilePopUpTotalEnergiesProps: popUpChatbotData.mobilePopUpTotalEnergiesProps,
      },
    },
    {
      path: "/pop-up-ai",
      component: PopUpAI,
      props: {
        icRoundClose:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/ic-round-close@2x.png",
        mobileAIProps: popUpAIData.mobileAIProps,
      },
    },
    {
      path: "/chatbot-pop-up",
      component: ChatbotPopUp,
      props: { chatBotProps: chatbotPopUp1Data.chatBotProps },
    },
    {
      path: "/prompt-engineering-pop-up",
      component: PromptEngineeringPopUp,
      props: { promptENgineeringProps: promptEngineeringPopUpData.promptENgineeringProps },
    },
    {
      path: "/ux-documentation-pop-up",
      component: UXDocumentationPopUp,
      props: { uXDocumentationProps: uXDocumentationPopUpData.uXDocumentationProps },
    },
    {
      path: "/smart-parking-system-pop-up",
      component: SmartParkingSystemPopUp,
      props: { smartParkingSystemProps: smartParkingSystemPopUpData.smartParkingSystemProps },
    },
    {
      path: "/ui-mobile-application-pop-up",
      component: UIMobileApplicationPopUp,
      props: { uIMobileApplicationProps: uIMobileApplicationPopUpData.uIMobileApplicationProps },
    },
    {
      path: "/edu-cloud-pop-up",
      component: EduCloudPopUp,
      props: { eduCloudProps: eduCloudPopUpData.eduCloudProps },
    },
    {
      path: "/website-ui-pop-up",
      component: WebsiteUiPopUp,
      props: { websiteUIProps: websiteUiPopUpData.websiteUIProps },
    },
    {
      path: "/document-control-system-pop-up",
      component: DocumentControlSystemPopUp,
      props: { documentControlSystemProps: documentControlSystemPopUpData.documentControlSystemProps },
    },
    {
      path: "/work-exp-pop-up-itu",
      component: WorkExpPopUpItu,
      props: { workExpITUProps: workExpPopUpItuData.workExpITUProps },
    },
    {
      path: "/pop-up-document-control-system",
      component: PopUpDocumentControlSystem,
      props: {
        icRoundClose:
          "https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/ic-round-close@2x.png",
        mobileDocumentControlSystemProps: popUpDocumentControlSystemData.mobileDocumentControlSystemProps,
      },
    },
    {
      path: "/oracle-java",
      component: OracleJava,
      props: {
        iAmACertifiedCss:
          "I am a certified CSS expert, having successfully completed the Certification of Achievement for CSS from the Cambridge Certification Authority (CAA). This certification validates my proficiency in creating visually appealing and responsive web layouts using CSS. My expertise in CSS empowers me to design and develop modern, user-friendly websites that are optimized for various devices and browsers.",
        javaProps: oracleJavaData.javaProps,
      },
    },
    {
      path: "*",
      component: AmazonBiddingPopUp,
      props: { amazonBiddingProps: amazonBiddingPopUpData.amazonBiddingProps },
    },
  ],
});
