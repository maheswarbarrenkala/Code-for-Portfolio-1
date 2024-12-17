<template>
  <div class="website-ui">
    <div class="frame-100-3">
      <div class="group-9">
        <div class="frame-98">
          <img class="image-4" :src="image41" alt="image 4" /><img class="image-4-1" :src="image42" alt="image 4" />
        </div>
      </div>
      <div class="group-9">
        <div class="frame-98-1">
          <img class="image-5" :src="image51" alt="image 5" /><img class="image-5-1" :src="image52" alt="image 5" />
        </div>
      </div>
      <div class="group-97">
        <img class="image" :src="image9" alt="image 9" /><img class="image-10" :src="image10" alt="image 10" /><img
          class="image-11"
          :src="image11"
          alt="image 11"
        />
      </div>
      <div class="group-95">
        <img class="image" :src="image12" alt="image 12" /><img class="image-7" :src="image7" alt="image 7" />
      </div>
      <div class="group-99">
        <img class="responsive-dt-template-1-1" :src="responsiveDtTemplate111" alt="responsive DT template-1 1" />
        <div class="group-98">
          <img class="responsive-dt-template-1-1-1" :src="responsiveDtTemplate112" alt="responsive DT template-1 1" />
        </div>
      </div>
    </div>
    <div class="flex-col-8">
      <div class="frame-57-8">
        <p class="as-a-skilled-ui-desi-1 ibmplexsans-normal-white-20px">
          As a skilled UI designer, I specialize in crafting user-friendly and responsive interfaces that seamlessly
          adapt to both desktop and mobile devices. My diverse portfolio includes impressive projects like ValleyOak
          Farm, Abacus Semi-Conductors, and the International Technological University website, along with numerous
          blogs and e-commerce platforms. These projects showcase my ability to translate complex information into
          intuitive navigation and visually appealing layouts while ensuring a consistent user experience across all
          screen sizes. I prioritize user-centered design, leveraging user research and usability testing to create
          interfaces that meet the needs of diverse audiences. My expertise extends across various industries, allowing
          me to adapt my design approach to specific project requirements. Additionally, I am proficient in using
          industry-standard design tools and stay up-to-date on the latest design trends to deliver cutting-edge and
          visually appealing interfaces. I have demonstrated my ability to quickly adapt to changing project timelines
          by developing a default UI design for a client presentation on an immediate basis. My dedication to delivering
          exceptional user experiences and my strong technical skills make me a valuable asset to any design team.
        </p>
      </div>
      <img class="drop-down-minor_svgrepocom-8" :src="dropDownMinor_SvgrepoCom" alt="drop-down-minor_svgrepo.com" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WebsiteUI",
  props: [
    "image41",
    "image42",
    "image51",
    "image52",
    "image9",
    "image10",
    "image11",
    "image12",
    "image7",
    "responsiveDtTemplate111",
    "responsiveDtTemplate112",
    "dropDownMinor_SvgrepoCom",
  ],
};
</script>

<style>
.website-ui {
  align-items: center;
  display: flex;
  gap: 38px;
  height: 549px;
  justify-content: flex-end;
  min-width: 999px;
  padding: 0 38px;
}

.frame-100-3 {
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 425px;
  overflow: hidden;
  width: 500px;
}

.group-9 {
  display: flex;
  width: 500px;
}

.frame-98 {
  align-items: center;
  background: linear-gradient(180deg, rgb(56, 101, 139) 0%, rgb(14.91, 26.88, 37) 100%);
  display: flex;
  height: 425px;
  justify-content: space-between;
  width: 500px;
}

.image-4 {
  height: 400px;
  margin-left: 13px;
  margin-top: 1px;
  width: 225px;
}

.image-4-1 {
  height: 400px;
  margin-right: 13px;
  margin-top: 1px;
  width: 225px;
}

.frame-98-1 {
  align-items: center;
  background: linear-gradient(180deg, rgb(229, 245, 240) 0%, rgb(188, 253, 182) 100%);
  display: flex;
  gap: 24px;
  height: 425px;
  overflow: hidden;
  width: 500px;
}

.image-5 {
  height: 400px;
  margin-left: -3954px;
  margin-top: -11297px;
  width: 225px;
}

.image-5-1 {
  height: 400px;
  margin-top: -11297px;
  width: 225px;
}

.group-97 {
  background: linear-gradient(180deg, rgb(229, 245, 240) 0%, rgb(188, 253, 182) 100%);
  display: flex;
  height: 425px;
  width: 500px;
}

.image {
  height: 400px;
  margin-left: -3954px;
  margin-top: -5201px;
  width: 225px;
}

.image-10 {
  height: 198px;
  margin-left: 24px;
  margin-top: -4999px;
  width: 225px;
}

.image-11 {
  height: 198px;
  margin-left: 3742px;
  margin-top: 13px;
  object-fit: cover;
  width: 225px;
}

.group-95 {
  background: linear-gradient(180deg, rgb(193, 130, 56) 0%, rgb(235, 216, 166) 100%);
  display: flex;
  gap: 24px;
  height: 425px;
  width: 500px;
}

.image-7 {
  align-self: center;
  height: 400px;
  margin-top: -10427px;
  width: 225px;
}

.group-99 {
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 4802px;
  height: 425px;
}

.responsive-dt-template-1-1 {
  align-self: center;
  height: 220px;
  margin-left: -7685px;
  margin-top: -5022px;
  width: 225px;
}

.group-98 {
  background: linear-gradient(180deg, rgb(19, 106, 189) 0%, rgb(20, 20, 20) 100%);
  display: flex;
  height: 425px;
  justify-content: center;
  width: 500px;
}

.responsive-dt-template-1-1-1 {
  height: 220px;
  margin-left: -8183px;
  margin-top: -5202px;
  width: 225px;
}

.flex-col-8 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57-8 {
  align-items: center;
  display: flex;
  width: 383px;
}

.as-a-skilled-ui-desi-1 {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  margin-top: -6px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom-8 {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}
</style>
