<template>
  <div class="website-ui-pop-up screen"><website-ui v-bind="websiteUIProps" /></div>
</template>

<script>
import WebsiteUI from "./WebsiteUI";
export default {
  name: "WebsiteUiPopUp",
  components: {
    WebsiteUI,
  },
  props: ["websiteUIProps"],
};
</script>

<style>
.website-ui-pop-up {
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
