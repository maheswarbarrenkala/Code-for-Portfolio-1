<template>
  <div class="container-center-horizontal">
    <div class="mobile-pop-up-itu screen">
      <div class="overlap-group1">
        <mobile-itu :spanText2="mobileItuProps.spanText2" :spanText3="mobileItuProps.spanText3" />
        <img class="icround-close" :src="icRoundClose" alt="ic:round-close" />
      </div>
    </div>
  </div>
</template>

<script>
import MobileItu from "./MobileItu";
export default {
  name: "MobilePopUpITU",
  components: {
    MobileItu,
  },
  props: ["icRoundClose", "mobileItuProps"],
};
</script>

<style>
.mobile-pop-up-itu {
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
  overflow: hidden;
  width: 350px;
}

.overlap-group1 {
  height: 510px;
  position: relative;
  width: 350px;
}

.icround-close {
  height: 40px;
  left: 155px;
  position: absolute;
  top: 469px;
  width: 40px;
}
</style>
