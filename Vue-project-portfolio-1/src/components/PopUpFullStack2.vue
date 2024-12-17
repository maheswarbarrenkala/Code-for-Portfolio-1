<template>
  <div class="container-center-horizontal">
    <div class="pop-up-full-stacku952 screen">
      <div class="overlap-group-5">
        <img class="icround-close-2" :src="icRoundClose" alt="ic:round-close" /><mobile-full-stack2
          v-bind="mobileFullStack2Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MobileFullStack2 from "./MobileFullStack2";
export default {
  name: "PopUpFullStack2",
  components: {
    MobileFullStack2,
  },
  props: ["icRoundClose", "mobileFullStack2Props"],
};
</script>

<style>
.pop-up-full-stacku952 {
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

.overlap-group-5 {
  height: 470px;
  margin-top: 12px;
  position: relative;
  width: 350px;
}

.icround-close-2 {
  height: 40px;
  left: 155px;
  position: absolute;
  top: 430px;
  width: 40px;
}
</style>
