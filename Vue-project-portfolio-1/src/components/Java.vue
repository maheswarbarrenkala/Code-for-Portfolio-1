<template>
  <div class="java" :style="{ 'background-image': 'url(' + java + ')' }">
    <img class="rectangle-134" :src="rectangle134" alt="Rectangle 134" /><img
      class="rectangle-135"
      :src="rectangle135"
      alt="Rectangle 135"
    />
  </div>
</template>

<script>
export default {
  name: "Java",
  props: ["java", "rectangle134", "rectangle135"],
};
</script>

<style>
.java {
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 467px;
  margin-left: 35px;
  overflow: hidden;
  width: 603px;
}

.rectangle-134 {
  height: 467px;
  margin-left: 5117px;
  margin-top: -4167px;
  width: 603px;
}

.rectangle-135 {
  height: 467px;
  margin-left: 5117px;
  width: 603px;
}
</style>
