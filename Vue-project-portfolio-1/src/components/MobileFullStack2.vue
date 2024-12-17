<template>
  <div class="mobile-full-stack-_2">
    <div class="group-182">
      <div class="frame-183-2" :style="{ 'background-image': 'url(' + frame183 + ')' }">
        <img class="x31-1-1" :src="x311" alt="31 1" /><img
          class="android-developer-ledu48pvwl9fgxzw-1"
          :src="androidDeveloperLedu48Pvwl9Fgxzw"
          alt="android-developer-ledu48pvwl9fgxzw"
        />
        <div class="group-45-1" :style="{ 'background-image': 'url(' + group45 + ')' }">
          <img class="rectangle-78-1" :src="rectangle78" alt="Rectangle 78" />
        </div>
        <img
          class="android-developer-0m3xeqfvwcisdodg-1"
          :src="androidDeveloper0M3Xeqfvwcisdodg"
          alt="android-developer-0m3xeqfvwcisdodg"
        />
      </div>
      <frame182 :children="frame182Props.children" :className="frame182Props.className" />
      <img class="right-arrow-2" :src="rightArrow" alt="right arrow" />
    </div>
  </div>
</template>

<script>
import Frame182 from "./Frame182";
export default {
  name: "MobileFullStack2",
  components: {
    Frame182,
  },
  props: [
    "frame183",
    "x311",
    "androidDeveloperLedu48Pvwl9Fgxzw",
    "group45",
    "rectangle78",
    "androidDeveloper0M3Xeqfvwcisdodg",
    "rightArrow",
    "frame182Props",
  ],
};
</script>

<style>
.mobile-full-stack-_2 {
  display: flex;
  height: 458px;
  left: 0;
  position: absolute;
  top: 0;
  width: 350px;
}

.group-182 {
  align-items: flex-start;
  display: flex;
  flex: 1;
  min-width: 350px;
  position: relative;
}

.frame-183-2 {
  background-size: 100% 100%;
  border-radius: 5px;
  display: flex;
  margin-left: -4483px;
  margin-top: -12760px;
  overflow: hidden;
  width: 250px;
}

.x31-1-1 {
  height: 190px;
  margin-left: -3993px;
  margin-top: -12792px;
  width: 250px;
}

.android-developer-ledu48pvwl9fgxzw-1 {
  height: 190px;
  margin-left: 3743px;
  object-fit: cover;
  width: 250px;
}

.group-45-1 {
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  margin-left: 290px;
  width: 250px;
}

.rectangle-78-1 {
  height: 190px;
  margin-left: -4726px;
  margin-top: -12792px;
  width: 96.5px;
}

.android-developer-0m3xeqfvwcisdodg-1 {
  height: 190px;
  margin-left: 290px;
  object-fit: cover;
  width: 250px;
}

.right-arrow-2 {
  align-self: center;
  height: 58px;
  margin-top: 28px;
  width: 58px;
}
</style>
