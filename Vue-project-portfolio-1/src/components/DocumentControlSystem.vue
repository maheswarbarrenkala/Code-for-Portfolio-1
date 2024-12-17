<template>
  <div class="document-control-system">
    <div class="frame-100-4" :style="{ 'background-image': 'url(' + frame100 + ')' }">
      <img class="rectangle-109-1" :src="rectangle1091" alt="Rectangle 109" /><img
        class="rectangle-109"
        :src="rectangle1092"
        alt="Rectangle 109"
      /><img class="rectangle-109" :src="rectangle1093" alt="Rectangle 109" />
    </div>
    <div class="flex-col-9">
      <div class="frame-57-9">
        <p class="as-a-skilled-softwar-1 ibmplexsans-normal-white-20px">{{ asASkilledSoftwar }}</p>
      </div>
      <img class="drop-down-minor_svgrepocom-9" :src="dropDownMinor_SvgrepoCom" alt="drop-down-minor_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DocumentControlSystem",
  props: [
    "frame100",
    "rectangle1091",
    "rectangle1092",
    "rectangle1093",
    "asASkilledSoftwar",
    "dropDownMinor_SvgrepoCom",
  ],
};
</script>

<style>
.document-control-system {
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

.frame-100-4 {
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

.rectangle-109-1 {
  height: 425px;
  margin-left: -3967px;
  margin-top: -6801px;
  width: 500px;
}

.rectangle-109 {
  height: 425px;
  margin-left: -3967px;
  width: 500px;
}

.flex-col-9 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57-9 {
  align-items: center;
  display: flex;
  width: 383px;
}

.as-a-skilled-softwar-1 {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  margin-top: -2px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom-9 {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}
</style>
