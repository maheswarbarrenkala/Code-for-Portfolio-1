<template>
  <div :class="[`group-47`, className || ``]">
    <img class="smart-vacuum-app" :src="smartVacuumApp1" alt="Smart Vacuum APP-1" /><img
      class="smart-vacuum-app-1"
      :src="smartVacuumApp3"
      alt="Smart Vacuum APP-3"
    />
  </div>
</template>

<script>
export default {
  name: "Group47",
  props: ["smartVacuumApp1", "smartVacuumApp3", "className"],
};
</script>

<style>
.group-47 {
  background: linear-gradient(180deg, rgb(1, 10, 39) 0%, rgb(3.62, 36.15, 141) 100%);
  display: flex;
  gap: 34px;
  margin-top: 2359.5px;
  width: 500px;
}

.smart-vacuum-app {
  height: 425px;
  margin-left: 37px;
  object-fit: cover;
  width: 196px;
}

.smart-vacuum-app-1 {
  height: 425px;
  object-fit: cover;
  width: 196px;
}

.group-47.group-49 {
  height: 425px;
  margin-top: 10px;
}

.group-47.group-49 .smart-vacuum-app {
  height: 425.17px;
}

.group-47.group-50 {
  height: 425px;
  margin-top: 10.2px;
}
</style>
