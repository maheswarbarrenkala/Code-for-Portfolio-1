<template>
  <div class="ui-mobile-application-pop-up screen">
    <ui-mobile-application
      :rectangle95="uIMobileApplicationProps.rectangle95"
      :jouneryMakers41="uIMobileApplicationProps.jouneryMakers41"
      :jouneryMakers13="uIMobileApplicationProps.jouneryMakers13"
      :dropDownMinor_SvgrepoCom="uIMobileApplicationProps.dropDownMinor_SvgrepoCom"
      :group471Props="uIMobileApplicationProps.group471Props"
      :group472Props="uIMobileApplicationProps.group472Props"
      :group473Props="uIMobileApplicationProps.group473Props"
    />
  </div>
</template>

<script>
import UIMobileApplication from "./UIMobileApplication";
export default {
  name: "UIMobileApplicationPopUp",
  components: {
    UIMobileApplication,
  },
  props: ["uIMobileApplicationProps"],
};
</script>

<style>
.ui-mobile-application-pop-up {
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
