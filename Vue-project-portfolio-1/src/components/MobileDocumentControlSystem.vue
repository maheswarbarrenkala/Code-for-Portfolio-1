<template>
  <div class="mobile-document-control-system">
    <frame182 :children="frame182Props.children" :className="frame182Props.className" />
    <div class="overlap-group-9">
      <img class="right-arrow-6" :src="rightArrow" alt="right arrow" />
      <div class="frame-183-4" :style="{ 'background-image': 'url(' + frame183 + ')' }">
        <img class="rectangle-109-3" :src="rectangle1091" alt="Rectangle 109" /><img
          class="rectangle-109-2"
          :src="rectangle1092"
          alt="Rectangle 109"
        /><img class="rectangle-109-2" :src="rectangle1093" alt="Rectangle 109" />
      </div>
    </div>
  </div>
</template>

<script>
import Frame182 from "./Frame182";
export default {
  name: "MobileDocumentControlSystem",
  components: {
    Frame182,
  },
  props: ["rightArrow", "frame183", "rectangle1091", "rectangle1092", "rectangle1093", "frame182Props"],
};
</script>

<style>
.mobile-document-control-system {
  height: 458px;
  left: 1px;
  position: absolute;
  top: 26px;
  width: 350px;
}

.overlap-group-9 {
  height: 240px;
  left: 50px;
  position: absolute;
  top: 32px;
  width: 300px;
}

.right-arrow-6 {
  height: 58px;
  left: 242px;
  position: absolute;
  top: 182px;
  width: 58px;
}

.frame-183-4 {
  background-size: 100% 100%;
  border-radius: 5px;
  display: flex;
  gap: 20px;
  height: 190px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 250px;
}

.rectangle-109-3 {
  height: 190px;
  margin-left: -4987px;
  margin-top: -14508px;
  width: 250px;
}

.rectangle-109-2 {
  height: 190px;
  margin-top: -14508px;
  width: 250px;
}
</style>
