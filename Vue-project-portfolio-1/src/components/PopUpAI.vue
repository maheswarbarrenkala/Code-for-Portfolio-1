<template>
  <div class="container-center-horizontal">
    <div class="pop-up-ai screen">
      <div class="overlap-group1-5">
        <img class="icround-close-6" :src="icRoundClose" alt="ic:round-close" /><mobile-ai
          :spanText1="mobileAIProps.spanText1"
          :spanText2="mobileAIProps.spanText2"
          :rightArrow="mobileAIProps.rightArrow"
          :frame184="mobileAIProps.frame184"
          :rectangle871="mobileAIProps.rectangle871"
          :rectangle872="mobileAIProps.rectangle872"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MobileAI from "./MobileAI";
export default {
  name: "PopUpAI",
  components: {
    MobileAI,
  },
  props: ["icRoundClose", "mobileAIProps"],
};
</script>

<style>
.pop-up-ai {
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  align-items: flex-start;
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
  height: 510px;
  overflow: hidden;
  padding: 14px 0;
  width: 350px;
}

.overlap-group1-5 {
  height: 470px;
  margin-top: 12px;
  position: relative;
  width: 350px;
}

.icround-close-6 {
  height: 40px;
  left: 155px;
  position: absolute;
  top: 430px;
  width: 40px;
}
</style>
