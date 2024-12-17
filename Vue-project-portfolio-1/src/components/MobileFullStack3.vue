<template>
  <div class="mobile-full-stack-_3">
    <frame182 :children="frame182Props.children" />
    <div class="overlap-group-7">
      <img class="right-arrow-4" :src="rightArrow" alt="right arrow" />
      <div class="frame-184" :style="{ 'background-image': 'url(' + frame184 + ')' }">
        <img class="rectangle-83" :src="rectangle831" alt="Rectangle 83" /><img
          class="rectangle-83-1"
          :src="rectangle832"
          alt="Rectangle 83"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Frame182 from "./Frame182";
export default {
  name: "MobileFullStack3",
  components: {
    Frame182,
  },
  props: ["rightArrow", "frame184", "rectangle831", "rectangle832", "frame182Props"],
};
</script>

<style>
.mobile-full-stack-_3 {
  height: 458px;
  left: 0;
  position: absolute;
  top: 0;
  width: 350px;
}

.overlap-group-7 {
  height: 233px;
  left: 50px;
  position: absolute;
  top: 39px;
  width: 300px;
}

.right-arrow-4 {
  height: 58px;
  left: 242px;
  position: absolute;
  top: 175px;
  width: 58px;
}

.frame-184 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  gap: 5276px;
  height: 190px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 250px;
}

.rectangle-83 {
  height: 190px;
  margin-left: -4986px;
  margin-top: -12799px;
  width: 250px;
}

.rectangle-83-1 {
  height: 190px;
  object-fit: cover;
  width: 250px;
}
</style>
