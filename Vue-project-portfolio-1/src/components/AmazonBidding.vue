<template>
  <div class="amazon-bidding">
    <div class="frame-100-5" :style="{ 'background-image': 'url(' + frame100 + ')' }">
      <img class="rectangle-111" :src="rectangle1111" alt="Rectangle 111" /><img
        class="rectangle-111-1"
        :src="rectangle1112"
        alt="Rectangle 111"
      /><img class="rectangle-111-2" :src="rectangle1113" alt="Rectangle 111" />
    </div>
    <div class="flex-col-10">
      <div class="frame-57-10">
        <p class="as-a-skilled-project-1 ibmplexsans-normal-white-20px">
          As a skilled project manager with a proven track record of success, I conceived, designed, developed, and
          managed the Amazon Bidding project, a valuable addition to the existing Amazon platform. I assembled a
          talented team of developers, designers, and quality assurance specialists and utilized industry-standard
          project management tools like Jira and ClickUp to effectively oversee the project&#39;s progress and ensure
          timely delivery. My technical expertise in [relevant technologies] and my understanding of project management
          methodologies enabled me to guide the team through all phases of the project, from initial design to final
          implementation. I played a pivotal role in defining project scope, allocating resources, managing risks, and
          ensuring stakeholder satisfaction. My ability to lead and motivate teams, combined with my strong technical
          skills and communication abilities, made me a valuable asset in driving the success of the Amazon Bidding
          project. I am confident that my proven project management skills and experience can contribute significantly
          to the success of future endeavors.
        </p>
      </div>
      <img class="drop-down-minor_svgrepocom-10" :src="dropDownMinor_SvgrepoCom" alt="drop-down-minor_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AmazonBidding",
  props: ["frame100", "rectangle1111", "rectangle1112", "rectangle1113", "dropDownMinor_SvgrepoCom"],
};
</script>

<style>
.amazon-bidding {
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

.frame-100-5 {
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

.rectangle-111 {
  height: 425px;
  margin-left: -3967px;
  margin-top: -7475px;
  width: 500px;
}

.rectangle-111-1 {
  height: 425px;
  margin-top: 7920px;
  object-fit: cover;
  width: 500px;
}

.rectangle-111-2 {
  height: 425px;
  margin-top: 10px;
  object-fit: cover;
  width: 500px;
}

.flex-col-10 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57-10 {
  align-items: center;
  display: flex;
  width: 383px;
}

.as-a-skilled-project-1 {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  margin-top: -6px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom-10 {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}
</style>
