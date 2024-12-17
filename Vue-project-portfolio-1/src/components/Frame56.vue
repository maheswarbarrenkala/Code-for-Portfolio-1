<template>
  <div class="container-center-horizontal">
    <div class="frame-56 screen" :style="{ 'background-image': 'url(' + frame56 + ')' }">
      <div class="overlap-group">
        <img class="rectangle-73" :src="rectangle73" alt="Rectangle 73" /><img
          class="accenture-1-1"
          :src="accenture11"
          alt="accenture -1 1"
        />
      </div>
      <p class="lj-h-h-iha-si-lj-h-h">{{ ljHHIhaSiljHH }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame56",
  props: ["frame56", "rectangle73", "accenture11", "ljHHIhaSiljHH"],
};
</script>

<style>
.frame-56 {
  align-items: flex-start;
  background-size: 100% 100%;
  display: flex;
  gap: 51px;
  height: 549px;
  padding: 26px 21px;
  width: 999px;
}

.overlap-group {
  height: 488px;
  margin-top: 9px;
  position: relative;
  width: 500px;
}

.rectangle-73 {
  height: 488px;
  left: 0;
  position: absolute;
  top: 0;
  width: 473px;
}

.accenture-1-1 {
  height: 425px;
  left: 4px;
  object-fit: cover;
  position: absolute;
  top: 28px;
  width: 496px;
}

.lj-h-h-iha-si-lj-h-h {
  color: var(--white);
  font-family: var(--font-family-dm_sans);
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 133px;
  min-height: 308px;
  text-align: center;
  width: 383px;
}
</style>
