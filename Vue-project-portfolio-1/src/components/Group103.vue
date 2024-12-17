<template>
  <div :class="[`group-103`, className || ``]">
    <div class="overlap-group-2">
      <div class="rectangle-119"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Group103",
  props: ["className"],
};
</script>

<style>
.group-103 {
  align-items: flex-start;
  display: flex;
  height: 370px;
  justify-content: center;
  min-width: 8px;
}

.overlap-group-2 {
  align-items: flex-start;
  background-color: var(--alto);
  border: 1.5px solid;
  border-color: var(--storm-dust);
  border-radius: 50px;
  display: flex;
  height: 373px;
  margin-top: -1.5px;
  min-width: 11px;
}

.rectangle-119 {
  background: linear-gradient(180deg, rgb(181, 23, 158) 0%, rgb(247, 37, 133) 100%);
  border-radius: 50px;
  height: 312px;
  width: 8px;
}

.group-103.group-103-1 {
  height: 307px;
}

.group-103.group-103-1 .overlap-group-2 {
  height: 310px;
}

.group-103.group-103-1 .rectangle-119 {
  height: 259px;
}
</style>
