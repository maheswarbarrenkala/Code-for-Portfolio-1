<template>
  <div class="container-center-horizontal">
    <div class="pop-up-social-media-marketing screen">
      <div class="overlap-group1-2">
        <div class="rectangle-161"></div>
        <img class="icround-close-3" :src="icRoundClose" alt="ic:round-close" /><mobile-social-media
          :rightArrow="mobileSocialMediaProps.rightArrow"
          :frame183="mobileSocialMediaProps.frame183"
          :rectangle1131="mobileSocialMediaProps.rectangle1131"
          :rectangle1132="mobileSocialMediaProps.rectangle1132"
          :rectangle1133="mobileSocialMediaProps.rectangle1133"
          :frame182Props="mobileSocialMediaProps.frame182Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MobileSocialMedia from "./MobileSocialMedia";
export default {
  name: "PopUpSocialMediaMarketing",
  components: {
    MobileSocialMedia,
  },
  props: ["icRoundClose", "mobileSocialMediaProps"],
};
</script>

<style>
.pop-up-social-media-marketing {
  align-items: flex-start;
  display: flex;
  width: 352px;
}

.overlap-group1-2 {
  height: 510px;
  position: relative;
  width: 352px;
}

.rectangle-161 {
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  backdrop-filter: blur(20px) brightness(100%);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 45.9%,
    rgba(73.5, 73.5, 73.5, 0.43) 84.9%,
    rgba(0, 0, 0, 0.21) 100%
  );
  border-radius: 10px;
  height: 510px;
  left: 0;
  position: absolute;
  top: 0;
  width: 350px;
}

.icround-close-3 {
  height: 40px;
  left: 155px;
  position: absolute;
  top: 456px;
  width: 40px;
}
</style>
