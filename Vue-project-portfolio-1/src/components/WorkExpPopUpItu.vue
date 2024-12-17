<template>
  <div class="work-exp-pop-up-itu screen">
    <work-exp-itu
      :spanText2="workExpITUProps.spanText2"
      :spanText3="workExpITUProps.spanText3"
      :group103Props="workExpITUProps.group103Props"
    />
  </div>
</template>

<script>
import WorkExpITU from "./WorkExpITU";
export default {
  name: "WorkExpPopUpItu",
  components: {
    WorkExpITU,
  },
  props: ["workExpITUProps"],
};
</script>

<style>
.work-exp-pop-up-itu {
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  backdrop-filter: blur(20px) brightness(100%);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 45.9%,
    rgba(73.5, 73.5, 73.5, 0.43) 84.9%,
    rgba(0, 0, 0, 0.21) 100%
  );
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  min-height: 549px;
  min-width: 999px;
  position: relative;
  width: 100%;
}
</style>
