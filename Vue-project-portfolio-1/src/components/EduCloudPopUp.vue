<template>
  <div class="edu-cloud-pop-up screen">
    <edu-cloud
      :frame100="eduCloudProps.frame100"
      :rectangle1071="eduCloudProps.rectangle1071"
      :rectangle1072="eduCloudProps.rectangle1072"
      :rectangle1073="eduCloudProps.rectangle1073"
      :asASkilledCloudA="eduCloudProps.asASkilledCloudA"
      :dropDownMinor_SvgrepoCom="eduCloudProps.dropDownMinor_SvgrepoCom"
    />
  </div>
</template>

<script>
import EduCloud from "./EduCloud";
export default {
  name: "EduCloudPopUp",
  components: {
    EduCloud,
  },
  props: ["eduCloudProps"],
};
</script>

<style>
.edu-cloud-pop-up {
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
