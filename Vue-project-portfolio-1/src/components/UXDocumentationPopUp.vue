<template>
  <div class="ux-documentation-pop-up screen">
    <ux-documentation
      :frame51="uXDocumentationProps.frame51"
      :rectangle931="uXDocumentationProps.rectangle931"
      :rectangle932="uXDocumentationProps.rectangle932"
      :asASkilledUxDesi="uXDocumentationProps.asASkilledUxDesi"
      :dropDownMinor_SvgrepoCom="uXDocumentationProps.dropDownMinor_SvgrepoCom"
    />
  </div>
</template>

<script>
import UXDocumentation from "./UXDocumentation";
export default {
  name: "UXDocumentationPopUp",
  components: {
    UXDocumentation,
  },
  props: ["uXDocumentationProps"],
};
</script>

<style>
.ux-documentation-pop-up {
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
