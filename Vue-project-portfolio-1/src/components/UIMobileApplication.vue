<template>
  <div class="ui-mobile-application">
    <div class="frame-52">
      <img class="rectangle-95" :src="rectangle95" alt="Rectangle 95" /><group47
        :smartVacuumApp1="group471Props.smartVacuumApp1"
        :smartVacuumApp3="group471Props.smartVacuumApp3"
      />
      <group47
        :smartVacuumApp1="group472Props.smartVacuumApp1"
        :smartVacuumApp3="group472Props.smartVacuumApp3"
        :className="group472Props.className"
      />
      <group47
        :smartVacuumApp1="group473Props.smartVacuumApp1"
        :smartVacuumApp3="group473Props.smartVacuumApp3"
        :className="group473Props.className"
      />
      <div class="group-51">
        <img class="jounery-makers-4-1" :src="jouneryMakers41" alt="Jounery Makers-4 1" /><img
          class="jounery-makers-13"
          :src="jouneryMakers13"
          alt="Jounery Makers-13"
        />
      </div>
    </div>
    <div class="flex-col-6">
      <div class="frame-57-6">
        <p class="as-a-skilled-ui-desi ibmplexsans-normal-white-20px">
          As a skilled UI designer with a passion for crafting intuitive and engaging user experiences, I&#39;ve
          successfully designed and developed mobile applications for both iOS and Android platforms. My expertise in UI
          design principles and guidelines, coupled with my deep understanding of user-centered design methodologies,
          has enabled me to create visually appealing and user-friendly interfaces that seamlessly integrate with
          platform-specific conventions. Through my work on projects such as Smart Vacuum, Journey Makers, and Inventory
          Management, I&#39;ve demonstrated my ability to deliver exceptional UI design solutions that enhance user
          satisfaction and drive engagement. I&#39;m proficient in using industry-standard design tools like Figma and
          Adobe XD, and I have a strong foundation in design languages such as Material Design for Android and Human
          Interface Guidelines for iOS. My commitment to accessibility ensures that my designs are inclusive and cater
          to users with disabilities. By leveraging user research methods and conducting thorough usability testing,
          I&#39;m able to iterate on my designs and create interfaces that meet the evolving needs of users. My ability
          to create visually stunning and functionally effective UI designs sets me apart as a talented and versatile
          designer.
        </p>
      </div>
      <img class="drop-down-minor_svgrepocom-6" :src="dropDownMinor_SvgrepoCom" alt="drop-down-minor_svgrepo.com" />
    </div>
  </div>
</template>

<script>
import Group47 from "./Group47";
export default {
  name: "UIMobileApplication",
  components: {
    Group47,
  },
  props: [
    "rectangle95",
    "jouneryMakers41",
    "jouneryMakers13",
    "dropDownMinor_SvgrepoCom",
    "group471Props",
    "group472Props",
    "group473Props",
  ],
};
</script>

<style>
.ui-mobile-application {
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

.frame-52 {
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  height: 425px;
  overflow: hidden;
  position: relative;
  width: 500px;
}

.rectangle-95 {
  height: 425px;
  margin-left: -3967px;
  margin-top: -2784.5px;
  width: 500px;
}

.group-51 {
  background: linear-gradient(180deg, rgb(195, 246, 141) 0%, rgb(114.15, 144, 82.54) 100%);
  display: flex;
  gap: 34px;
  height: 425px;
  margin-top: 10.2px;
  width: 500px;
}

.jounery-makers-4-1 {
  height: 425px;
  margin-left: -3930px;
  margin-top: -4525px;
  width: 196px;
}

.jounery-makers-13 {
  height: 425px;
  margin-top: -4525px;
  width: 196px;
}

.flex-col-6 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 113px;
  min-height: 312px;
  width: 383px;
}

.frame-57-6 {
  align-items: center;
  display: flex;
  width: 383px;
}

.as-a-skilled-ui-desi {
  height: 200px;
  letter-spacing: 0;
  line-height: 29px;
  margin-top: -16px;
  text-align: center;
  width: 383px;
}

.drop-down-minor_svgrepocom-6 {
  height: 60px;
  margin-left: 1px;
  width: 60px;
}
</style>
