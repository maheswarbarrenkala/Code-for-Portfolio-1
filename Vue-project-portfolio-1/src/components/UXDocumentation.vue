<template>
  <div class="ux-documentation">
    <div class="frame-51" :style="{ 'background-image': 'url(' + frame51 + ')' }">
      <img class="rectangle-93" :src="rectangle931" alt="Rectangle 93" /><img
        class="rectangle-93-1"
        :src="rectangle932"
        alt="Rectangle 93"
      />
    </div>
    <div class="flex-col-4">
      <div class="frame-57-4">
        <p class="as-a-skilled-ux-desi ibmplexsans-normal-white-20px">{{ asASkilledUxDesi }}</p>
      </div>
      <img class="drop-down-minor_svgrepocom-4" :src="dropDownMinor_SvgrepoCom" alt="drop-down-minor_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UXDocumentation",
  props: ["frame51", "rectangle931", "rectangle932", "asASkilledUxDesi", "dropDownMinor_SvgrepoCom"],
};
</script>

<style>
.ux-documentation {
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

.frame-51 {
  background-size: 100% 100%;
  border-radius: 50px;
  display: flex;
  gap: 3467px;
  margin-left: 2px;
  overflow: hidden;
  width: 500px;
}

.rectangle-93 {
  height: 425px;
  margin-left: -3967px;
  margin-top: -3415px;
  width: 500px;
}

.rectangle-93-1 {
  height: 425px;
  margin-top: 870px;
  object-fit: cover;
  width: 500px;
}

.flex-col-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57-4 {
  align-items: center;
  display: flex;
  width: 383px;
}

.as-a-skilled-ux-desi {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  margin-top: -12px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom-4 {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}
</style>
