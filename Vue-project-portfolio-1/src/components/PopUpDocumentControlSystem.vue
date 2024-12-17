<template>
  <div class="container-center-horizontal">
    <div class="pop-up-document-control-system screen">
      <div class="overlap-group1-6">
        <div class="rectangle-161-1"></div>
        <img class="icround-close-7" :src="icRoundClose" alt="ic:round-close" /><mobile-document-control-system
          :rightArrow="mobileDocumentControlSystemProps.rightArrow"
          :frame183="mobileDocumentControlSystemProps.frame183"
          :rectangle1091="mobileDocumentControlSystemProps.rectangle1091"
          :rectangle1092="mobileDocumentControlSystemProps.rectangle1092"
          :rectangle1093="mobileDocumentControlSystemProps.rectangle1093"
          :frame182Props="mobileDocumentControlSystemProps.frame182Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MobileDocumentControlSystem from "./MobileDocumentControlSystem";
export default {
  name: "PopUpDocumentControlSystem",
  components: {
    MobileDocumentControlSystem,
  },
  props: ["icRoundClose", "mobileDocumentControlSystemProps"],
};
</script>

<style>
.pop-up-document-control-system {
  align-items: flex-start;
  display: flex;
  width: 351px;
}

.overlap-group1-6 {
  height: 510px;
  position: relative;
  width: 351px;
}

.rectangle-161-1 {
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

.icround-close-7 {
  height: 40px;
  left: 155px;
  position: absolute;
  top: 456px;
  width: 40px;
}
</style>
