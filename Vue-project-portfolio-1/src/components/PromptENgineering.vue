<template>
  <div class="prompt-e-ngineering">
    <div class="frame-48" :style="{ 'background-image': 'url(' + frame48 + ')' }">
      <img class="rectangle-89" :src="rectangle891" alt="Rectangle 89" /><img
        class="rectangle-89-1"
        :src="rectangle892"
        alt="Rectangle 89"
      />
    </div>
    <div class="flex-col-3">
      <div class="frame-57-3">
        <p class="as-a-skilled-ai-engi ibmplexsans-normal-white-20px">{{ asASkilledAiEngi }}</p>
      </div>
      <img class="drop-down-minor_svgrepocom-3" :src="dropDownMinor_SvgrepoCom" alt="drop-down-minor_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PromptENgineering",
  props: ["frame48", "rectangle891", "rectangle892", "asASkilledAiEngi", "dropDownMinor_SvgrepoCom"],
};
</script>

<style>
.prompt-e-ngineering {
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  align-items: center;
  backdrop-filter: blur(20px) brightness(100%);
  border-radius: 10px;
  display: flex;
  gap: 38px;
  height: 549px;
  justify-content: flex-end;
  min-width: 999px;
  padding: 0 38px;
}

.frame-48 {
  background-size: 100% 100%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 425px;
  overflow: hidden;
  width: 500px;
}

.rectangle-89 {
  height: 425px;
  margin-left: -3967px;
  margin-top: -2704px;
  width: 500px;
}

.rectangle-89-1 {
  height: 425px;
  margin-left: -3967px;
  width: 500px;
}

.flex-col-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57-3 {
  align-items: center;
  display: flex;
  width: 383px;
}

.as-a-skilled-ai-engi {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom-3 {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}
</style>
