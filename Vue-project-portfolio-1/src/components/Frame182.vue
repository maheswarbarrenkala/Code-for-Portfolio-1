<template>
  <div :class="[`frame-182`, className || ``]">
    <p class="as-a-full-stack-web timesnewroman-regular-normal-white-15px">{{ children }}</p>
  </div>
</template>

<script>
export default {
  name: "Frame182",
  props: ["children", "className"],
};
</script>

<style>
.frame-182 {
  align-items: center;
  display: flex;
  height: 144px;
  justify-content: center;
  left: 58px;
  overflow: hidden;
  position: absolute;
  top: 258px;
  width: 234px;
}

.as-a-full-stack-web {
  height: 144px;
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 0;
  text-align: center;
  width: 234px;
}

.frame-182.frame-182-1 {
  align-self: flex-end;
  height: unset;
  left: unset;
  margin-bottom: 56px;
  margin-left: 4291px;
  position: unset;
  top: unset;
}

.frame-182.frame-194,
.frame-182.frame-191 {
  overflow: unset;
}

.frame-182.frame-194 .as-a-full-stack-web,
.frame-182.frame-191 .as-a-full-stack-web {
  margin-left: unset;
}
</style>
