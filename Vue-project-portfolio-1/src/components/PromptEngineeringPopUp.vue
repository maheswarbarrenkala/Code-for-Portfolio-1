<template>
  <div class="prompt-engineering-pop-up screen">
    <prompt-e-ngineering
      :frame48="promptENgineeringProps.frame48"
      :rectangle891="promptENgineeringProps.rectangle891"
      :rectangle892="promptENgineeringProps.rectangle892"
      :asASkilledAiEngi="promptENgineeringProps.asASkilledAiEngi"
      :dropDownMinor_SvgrepoCom="promptENgineeringProps.dropDownMinor_SvgrepoCom"
    />
  </div>
</template>

<script>
import PromptENgineering from "./PromptENgineering";
export default {
  name: "PromptEngineeringPopUp",
  components: {
    PromptENgineering,
  },
  props: ["promptENgineeringProps"],
};
</script>

<style>
.prompt-engineering-pop-up {
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
