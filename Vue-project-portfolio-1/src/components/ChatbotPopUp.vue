<template>
  <div class="chatbot-pop-up screen">
    <chat-bot
      :frame47="chatBotProps.frame47"
      :rectangle851="chatBotProps.rectangle851"
      :rectangle852="chatBotProps.rectangle852"
      :iVeSuccessfullyDe="chatBotProps.iVeSuccessfullyDe"
      :className="chatBotProps.className"
    />
  </div>
</template>

<script>
import ChatBot from "./ChatBot";
export default {
  name: "ChatbotPopUp",
  components: {
    ChatBot,
  },
  props: ["chatBotProps"],
};
</script>

<style>
.chatbot-pop-up,
.deep-learning-pop-up {
  -webkit-backdrop-filter: blur(20px) brightness(100%);
  backdrop-filter: blur(20px) brightness(100%);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 45.9%,
    rgba(73.5, 73.5, 73.5, 0.43) 84.9%,
    rgba(0, 0, 0, 0.21) 100%
  );
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  display: flex;
  min-height: 549px;
  min-width: 999px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
</style>
