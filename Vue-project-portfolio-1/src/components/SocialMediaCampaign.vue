<template>
  <div class="social-media-campaign">
    <div class="frame-100" :style="{ 'background-image': 'url(' + frame100 + ')' }">
      <img class="rectangle-113" :src="rectangle1131" alt="Rectangle 113" /><img
        class="rectangle-113-1"
        :src="rectangle1132"
        alt="Rectangle 113"
      /><img class="rectangle-113-2" :src="rectangle1133" alt="Rectangle 113" />
    </div>
    <div class="flex-col">
      <div class="frame-57">
        <p class="as-a-skilled-project ibmplexsans-normal-white-20px">
          As a skilled project manager and data analyst, I successfully executed a Social Media Campaign for Naz
          University, aimed at increasing new admissions. I meticulously analyzed data to identify target audiences,
          track campaign performance, and refine our strategies. By leveraging social media platforms and employing
          innovative tactics, I helped Naz University achieve its goals of increasing website traffic, generating leads,
          and improving brand awareness. My ability to develop and implement effective social media campaigns, coupled
          with my expertise in training and managing university staff, played a crucial role in the project&#39;s
          success. I overcame challenges, such as budget constraints and algorithm changes, through strategic planning
          and adaptability, ensuring that the campaign remained on track and delivered results. My dedication to
          data-driven decision-making and my ability to execute successful social media campaigns make me a valuable
          asset to any organization seeking to enhance its online presence.
        </p>
      </div>
      <img class="drop-down-minor_svgrepocom" :src="dropDownMinor_SvgrepoCom" alt="drop-down-minor_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMediaCampaign",
  props: ["frame100", "rectangle1131", "rectangle1132", "rectangle1133", "dropDownMinor_SvgrepoCom"],
};
</script>

<style>
.social-media-campaign {
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

.frame-100 {
  background-size: 100% 100%;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  height: 425px;
  margin-left: 2px;
  overflow: hidden;
  width: 500px;
}

.rectangle-113 {
  height: 425px;
  margin-left: -3967px;
  margin-top: -7714px;
  width: 500px;
}

.rectangle-113-1 {
  height: 425px;
  margin-top: 7724px;
  object-fit: cover;
  width: 500px;
}

.rectangle-113-2 {
  height: 425px;
  margin-top: 445px;
  object-fit: cover;
  width: 500px;
}

.flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57 {
  align-items: center;
  display: flex;
  width: 383px;
}

.as-a-skilled-project {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  margin-top: -4px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}
</style>
