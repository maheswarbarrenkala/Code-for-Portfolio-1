<template>
  <div class="mobile-social-media">
    <frame182 :children="frame182Props.children" :className="frame182Props.className" />
    <div class="overlap-group-6">
      <img class="right-arrow-3" :src="rightArrow" alt="right arrow" />
      <div class="frame-183-3" :style="{ 'background-image': 'url(' + frame183 + ')' }">
        <img class="rectangle-113-3" :src="rectangle1131" alt="Rectangle 113" /><img
          class="rectangle-113-4"
          :src="rectangle1132"
          alt="Rectangle 113"
        /><img class="rectangle-113-5" :src="rectangle1133" alt="Rectangle 113" />
      </div>
    </div>
  </div>
</template>

<script>
import Frame182 from "./Frame182";
export default {
  name: "MobileSocialMedia",
  components: {
    Frame182,
  },
  props: ["rightArrow", "frame183", "rectangle1131", "rectangle1132", "rectangle1133", "frame182Props"],
};
</script>

<style>
.mobile-social-media {
  height: 458px;
  left: 2px;
  position: absolute;
  top: 26px;
  width: 350px;
}

.overlap-group-6 {
  height: 240px;
  left: 50px;
  position: absolute;
  top: 32px;
  width: 300px;
}

.right-arrow-3 {
  height: 58px;
  left: 242px;
  position: absolute;
  top: 182px;
  width: 58px;
}

.frame-183-3 {
  background-size: 100% 100%;
  border-radius: 5px;
  display: flex;
  height: 190px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 250px;
}

.rectangle-113-3 {
  height: 190px;
  margin-left: -4266px;
  margin-top: -15086px;
  width: 250px;
}

.rectangle-113-4 {
  height: 190px;
  margin-left: 4286px;
  object-fit: cover;
  width: 250px;
}

.rectangle-113-5 {
  height: 190px;
  margin-left: 290px;
  object-fit: cover;
  width: 250px;
}
</style>
