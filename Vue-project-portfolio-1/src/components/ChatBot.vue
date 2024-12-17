<template>
  <div :class="[`chat-bot`, className || ``]">
    <div class="frame-47" :style="{ 'background-image': 'url(' + frame47 + ')' }">
      <img class="rectangle-85-2" :src="rectangle851" alt="Rectangle 85" /><img
        class="rectangle-85-3"
        :src="rectangle852"
        alt="Rectangle 85"
      />
    </div>
    <div class="flex-col-1">
      <div class="frame-57-1">
        <p class="ive-successfully-de-1 ibmplexsans-normal-white-20px" v-html="iVeSuccessfullyDe"></p>
      </div>
      <img
        class="drop-down-minor_svgrepocom-1"
        src="https://cdn.animaapp.com/projects/67588ee4f6e23cb158c4474e/releases/67588f98e9ce81bf0844e217/img/drop-down-minor-svgrepo-com@2x.png"
        alt="drop-down-minor_svgrepo.com"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatBot",
  props: ["frame47", "rectangle851", "rectangle852", "iVeSuccessfullyDe", "className"],
};
</script>

<style>
.chat-bot {
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

.frame-47 {
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 425px;
  overflow: hidden;
  width: 500px;
}

.rectangle-85-2 {
  height: 425px;
  margin-top: 435px;
  object-fit: cover;
  width: 500px;
}

.rectangle-85-3 {
  height: 425px;
  object-fit: cover;
  width: 500px;
}

.flex-col-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57-1 {
  align-items: center;
  display: flex;
  width: 383px;
}

.ive-successfully-de-1 {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  margin-top: -4px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom-1 {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}

.chat-bot.deep-learning {
  -webkit-backdrop-filter: unset;
  backdrop-filter: unset;
  border-radius: unset;
}

.chat-bot.deep-learning .frame-47 {
  background-position: unset;
  background-size: 100% 100%;
}

.chat-bot.deep-learning .ive-successfully-de-1 {
  margin-top: -8px;
}
</style>
