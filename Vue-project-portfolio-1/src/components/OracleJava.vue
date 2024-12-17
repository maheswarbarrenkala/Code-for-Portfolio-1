<template>
  <div class="oracle-java screen">
    <java :java="javaProps.java" :rectangle134="javaProps.rectangle134" :rectangle135="javaProps.rectangle135" />
    <p class="i-am-a-certified-css valign-text-middle">{{ iAmACertifiedCss }}</p>
  </div>
</template>

<script>
import Java from "./Java";
export default {
  name: "OracleJava",
  components: {
    Java,
  },
  props: ["iAmACertifiedCss", "javaProps"],
};
</script>

<style>
.oracle-java {
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  align-items: center;
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
  gap: 31px;
  min-height: 549px;
  min-width: 999px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.i-am-a-certified-css {
  color: var(--white);
  font-family: var(--font-family-ibm_plex_sans_condensed-regular);
  font-size: var(--font-size-s);
  font-weight: 400;
  height: 467px;
  letter-spacing: 0;
  line-height: 29px;
  text-align: center;
  width: 295px;
}
</style>
