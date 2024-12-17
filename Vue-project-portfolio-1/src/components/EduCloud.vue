<template>
  <div class="edu-cloud">
    <div class="frame-100-2" :style="{ 'background-image': 'url(' + frame100 + ')' }">
      <img class="rectangle-107" :src="rectangle1071" alt="Rectangle 107" /><img
        class="rectangle-107-1"
        :src="rectangle1072"
        alt="Rectangle 107"
      /><img class="rectangle-107-2" :src="rectangle1073" alt="Rectangle 107" />
    </div>
    <div class="flex-col-7">
      <div class="frame-57-7">
        <p class="as-a-skilled-cloud-a ibmplexsans-normal-white-20px">{{ asASkilledCloudA }}</p>
      </div>
      <img class="drop-down-minor_svgrepocom-7" :src="dropDownMinor_SvgrepoCom" alt="drop-down-minor_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "EduCloud",
  props: [
    "frame100",
    "rectangle1071",
    "rectangle1072",
    "rectangle1073",
    "asASkilledCloudA",
    "dropDownMinor_SvgrepoCom",
  ],
};
</script>

<style>
.edu-cloud {
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

.frame-100-2 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  height: 425px;
  margin-left: 2px;
  overflow: hidden;
  width: 500px;
}

.rectangle-107 {
  height: 425px;
  margin-left: -3967px;
  margin-top: -6127px;
  width: 500px;
}

.rectangle-107-1 {
  height: 425px;
  margin-left: -3967px;
  margin-top: 10px;
  width: 500px;
}

.rectangle-107-2 {
  height: 425px;
  margin-top: 6572px;
  object-fit: cover;
  width: 500px;
}

.flex-col-7 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57-7 {
  align-items: center;
  display: flex;
  overflow: hidden;
  width: 383px;
}

.as-a-skilled-cloud-a {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  margin-top: 4px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom-7 {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}
</style>
