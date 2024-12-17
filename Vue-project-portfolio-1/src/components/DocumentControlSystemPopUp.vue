<template>
  <div class="document-control-system-pop-up screen">
    <document-control-system
      :frame100="documentControlSystemProps.frame100"
      :rectangle1091="documentControlSystemProps.rectangle1091"
      :rectangle1092="documentControlSystemProps.rectangle1092"
      :rectangle1093="documentControlSystemProps.rectangle1093"
      :asASkilledSoftwar="documentControlSystemProps.asASkilledSoftwar"
      :dropDownMinor_SvgrepoCom="documentControlSystemProps.dropDownMinor_SvgrepoCom"
    />
  </div>
</template>

<script>
import DocumentControlSystem from "./DocumentControlSystem";
export default {
  name: "DocumentControlSystemPopUp",
  components: {
    DocumentControlSystem,
  },
  props: ["documentControlSystemProps"],
};
</script>

<style>
.document-control-system-pop-up {
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
