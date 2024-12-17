<template>
  <div class="frame-47-1 screen">
    <img class="x31-1" :src="x311" alt="31 1" /><img
      class="android-developer-0m3xeqfvwcisdodg"
      :src="androidDeveloper0M3Xeqfvwcisdodg"
      alt="android-developer-0m3xeqfvwcisdodg"
    /><img
      class="android-developer-ledu48pvwl9fgxzw"
      :src="androidDeveloperLedu48Pvwl9Fgxzw"
      alt="android-developer-ledu48pvwl9fgxzw"
    />
    <div class="group-46"><img class="rectangle-77" :src="rectangle77" alt="Rectangle 77" /></div>
    <div class="group-45">
      <div class="overlap-group-1" :style="{ 'background-image': 'url(' + overlapGroup + ')' }">
        <img class="rectangle-78" :src="rectangle78" alt="Rectangle 78" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame47",
  props: [
    "x311",
    "androidDeveloper0M3Xeqfvwcisdodg",
    "androidDeveloperLedu48Pvwl9Fgxzw",
    "rectangle77",
    "overlapGroup",
    "rectangle78",
  ],
};
</script>

<style>
.frame-47-1 {
  display: flex;
  flex-direction: column;
  min-height: 425px;
  min-width: 502px;
  overflow: hidden;
  width: 100%;
}

.x31-1 {
  height: 425px;
  margin-left: 1304px;
  margin-top: -9771px;
  width: 500px;
}

.android-developer-0m3xeqfvwcisdodg {
  height: 425px;
  margin-left: 1304px;
  margin-top: 40px;
  object-fit: cover;
  width: 500px;
}

.android-developer-ledu48pvwl9fgxzw {
  height: 425px;
  margin-top: 8881px;
  object-fit: cover;
  width: 500px;
}

.group-46 {
  background-color: #031424;
  border-radius: 50px;
  display: flex;
  margin-top: 15px;
  width: 500px;
}

.rectangle-77 {
  height: 425px;
  margin-left: 1304px;
  margin-top: -11091px;
  width: 500px;
}

.group-45 {
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
  min-width: 500px;
}

.overlap-group-1 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  margin-top: -11091px;
  min-width: 500px;
  padding: 0 152px;
}

.rectangle-78 {
  height: 425px;
  width: 193px;
}
</style>
