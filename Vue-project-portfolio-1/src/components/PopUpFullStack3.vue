<template>
  <div class="container-center-horizontal">
    <div class="pop-up-full-stacku953 screen">
      <div class="overlap-group1-3">
        <img class="icround-close-4" :src="icRoundClose" alt="ic:round-close" /><mobile-full-stack3
          :rightArrow="mobileFullStack3Props.rightArrow"
          :frame184="mobileFullStack3Props.frame184"
          :rectangle831="mobileFullStack3Props.rectangle831"
          :rectangle832="mobileFullStack3Props.rectangle832"
          :frame182Props="mobileFullStack3Props.frame182Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MobileFullStack3 from "./MobileFullStack3";
export default {
  name: "PopUpFullStack3",
  components: {
    MobileFullStack3,
  },
  props: ["icRoundClose", "mobileFullStack3Props"],
};
</script>

<style>
.pop-up-full-stacku953 {
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

.overlap-group1-3 {
  height: 470px;
  margin-top: 12px;
  position: relative;
  width: 350px;
}

.icround-close-4 {
  height: 40px;
  left: 155px;
  position: absolute;
  top: 430px;
  width: 40px;
}
</style>
