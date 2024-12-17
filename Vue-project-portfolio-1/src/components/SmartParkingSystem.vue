<template>
  <div class="smart-parking-system">
    <div class="frame-100-1" :style="{ 'background-image': 'url(' + frame100 + ')' }">
      <img class="rectangle-105-1" :src="rectangle1051" alt="Rectangle 105" /><img
        class="rectangle-105"
        :src="rectangle1052"
        alt="Rectangle 105"
      /><img class="rectangle-105" :src="rectangle1053" alt="Rectangle 105" />
    </div>
    <div class="flex-col-5">
      <div class="frame-57-5">
        <p class="as-a-skilled-softwar ibmplexsans-normal-white-20px">{{ asASkilledSoftwar }}</p>
      </div>
      <img class="drop-down-minor_svgrepocom-5" :src="dropDownMinor_SvgrepoCom" alt="drop-down-minor_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SmartParkingSystem",
  props: [
    "frame100",
    "rectangle1051",
    "rectangle1052",
    "rectangle1053",
    "asASkilledSoftwar",
    "dropDownMinor_SvgrepoCom",
  ],
};
</script>

<style>
.smart-parking-system {
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  align-items: center;
  backdrop-filter: blur(20px) brightness(100%);
  border-radius: 10px;
  display: flex;
  gap: 38px;
  height: 549px;
  overflow: hidden;
  padding: 0 38px;
  width: 999px;
}

.frame-100-1 {
  background-size: 100% 100%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 425px;
  margin-left: 2px;
  overflow: hidden;
  width: 500px;
}

.rectangle-105-1 {
  height: 425px;
  margin-left: -3967px;
  margin-top: -5453px;
  width: 500px;
}

.rectangle-105 {
  height: 425px;
  margin-left: -3967px;
  width: 500px;
}

.flex-col-5 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57-5 {
  align-items: center;
  display: flex;
  width: 383px;
}

.as-a-skilled-softwar {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  margin-top: -12px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom-5 {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}
</style>
