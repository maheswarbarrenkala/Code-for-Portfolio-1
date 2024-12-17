<template>
  <div class="frame-47-2 screen" :style="{ 'background-image': 'url(' + frame47 + ')' }">
    <img class="rectangle-85" :src="rectangle851" alt="Rectangle 85" /><img
      class="rectangle-85-1"
      :src="rectangle852"
      alt="Rectangle 85"
    />
  </div>
</template>

<script>
export default {
  name: "Frame472",
  props: ["frame47", "rectangle851", "rectangle852"],
};
</script>

<style>
.frame-47-2 {
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 425px;
  min-width: 500px;
  overflow: hidden;
  width: 100%;
}

.rectangle-85 {
  height: 425px;
  margin-top: 435px;
  object-fit: cover;
  width: 500px;
}

.rectangle-85-1 {
  height: 425px;
  object-fit: cover;
  width: 500px;
}
</style>
