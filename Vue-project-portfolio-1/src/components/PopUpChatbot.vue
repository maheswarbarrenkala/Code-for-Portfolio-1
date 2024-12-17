<template>
  <div class="container-center-horizontal">
    <div class="pop-up-chatbot screen">
      <div class="overlap-group1-4">
        <img class="icround-close-5" :src="icRoundClose" alt="ic:round-close" /><mobile-pop-up-total-energies
          :frame183="mobilePopUpTotalEnergiesProps.frame183"
          :total1="mobilePopUpTotalEnergiesProps.total1"
          :total_11="mobilePopUpTotalEnergiesProps.total_11"
          :className="mobilePopUpTotalEnergiesProps.className"
          :frame182Props="mobilePopUpTotalEnergiesProps.frame182Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MobilePopUpTotalEnergies from "./MobilePopUpTotalEnergies";
export default {
  name: "PopUpChatbot",
  components: {
    MobilePopUpTotalEnergies,
  },
  props: ["icRoundClose", "mobilePopUpTotalEnergiesProps"],
};
</script>

<style>
.pop-up-chatbot {
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

.overlap-group1-4 {
  height: 470px;
  margin-top: 12px;
  position: relative;
  width: 350px;
}

.icround-close-5 {
  height: 40px;
  left: 155px;
  position: absolute;
  top: 430px;
  width: 40px;
}
</style>
