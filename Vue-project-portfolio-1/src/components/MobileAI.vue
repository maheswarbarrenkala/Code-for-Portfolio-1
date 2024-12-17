<template>
  <div class="mobile-ai">
    <div class="frame-184-1">
      <p class="ive-successfully-ta timesnewroman-regular-normal-white-15px">
        <span class="span0 timesnewroman-regular-normal-white-15px">{{ spanText1 }}</span
        ><span class="span1-1 ibmplexsans-normal-white-20px">{{ spanText2 }}</span>
      </p>
    </div>
    <div class="overlap-group-8">
      <img class="right-arrow-5" :src="rightArrow" alt="right arrow" />
      <div class="frame-184-2" :style="{ 'background-image': 'url(' + frame184 + ')' }">
        <img class="rectangle-87" :src="rectangle871" alt="Rectangle 87" /><img
          class="rectangle-87-1"
          :src="rectangle872"
          alt="Rectangle 87"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileAI",
  props: ["spanText1", "spanText2", "rightArrow", "frame184", "rectangle871", "rectangle872"],
};
</script>

<style>
.mobile-ai {
  height: 458px;
  left: 0;
  position: absolute;
  top: 0;
  width: 350px;
}

.frame-184-1 {
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

.ive-successfully-ta {
  height: 144px;
  letter-spacing: 0;
  line-height: 15px;
  margin-left: 0;
  text-align: center;
  width: 234px;
}

.span0 {
  line-height: 18px;
}

.span1-1 {
  line-height: 29px;
}

.overlap-group-8 {
  height: 240px;
  left: 50px;
  position: absolute;
  top: 32px;
  width: 300px;
}

.right-arrow-5 {
  height: 58px;
  left: 242px;
  position: absolute;
  top: 182px;
  width: 58px;
}

.frame-184-2 {
  background-size: 100% 100%;
  border-radius: 5px;
  display: flex;
  gap: 20px;
  height: 190px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 250px;
}

.rectangle-87 {
  height: 190px;
  margin-left: 270px;
  object-fit: cover;
  width: 250px;
}

.rectangle-87-1 {
  height: 190px;
  object-fit: cover;
  width: 250px;
}
</style>
