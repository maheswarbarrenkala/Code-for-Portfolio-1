<template>
  <div class="smart-parking-system-pop-up screen">
    <smart-parking-system
      :frame100="smartParkingSystemProps.frame100"
      :rectangle1051="smartParkingSystemProps.rectangle1051"
      :rectangle1052="smartParkingSystemProps.rectangle1052"
      :rectangle1053="smartParkingSystemProps.rectangle1053"
      :asASkilledSoftwar="smartParkingSystemProps.asASkilledSoftwar"
      :dropDownMinor_SvgrepoCom="smartParkingSystemProps.dropDownMinor_SvgrepoCom"
    />
  </div>
</template>

<script>
import SmartParkingSystem from "./SmartParkingSystem";
export default {
  name: "SmartParkingSystemPopUp",
  components: {
    SmartParkingSystem,
  },
  props: ["smartParkingSystemProps"],
};
</script>

<style>
.smart-parking-system-pop-up {
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
