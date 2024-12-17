<template>
  <div class="social-media-campaing-pop-up screen">
    <social-media-campaign
      :frame100="socialMediaCampaignProps.frame100"
      :rectangle1131="socialMediaCampaignProps.rectangle1131"
      :rectangle1132="socialMediaCampaignProps.rectangle1132"
      :rectangle1133="socialMediaCampaignProps.rectangle1133"
      :dropDownMinor_SvgrepoCom="socialMediaCampaignProps.dropDownMinor_SvgrepoCom"
    />
  </div>
</template>

<script>
import SocialMediaCampaign from "./SocialMediaCampaign";
export default {
  name: "SocialMediaCampaingPopUp",
  components: {
    SocialMediaCampaign,
  },
  props: ["socialMediaCampaignProps"],
};
</script>

<style>
.social-media-campaing-pop-up {
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  backdrop-filter: blur(20px) brightness(100%);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 45.9%,
    rgba(73.5, 73.5, 73.5, 0.43) 84.9%,
    rgba(0, 0, 0, 0.21) 100%
  );
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  min-height: 549px;
  min-width: 999px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
</style>
