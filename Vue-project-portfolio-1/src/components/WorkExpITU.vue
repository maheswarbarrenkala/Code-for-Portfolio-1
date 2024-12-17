<template>
  <div class="work-exp-itu">
    <div class="frame-103">
      <p class="at-international-tec-1 ibmplexsans-normal-white-20px">
        <span class="ibmplexsans-normal-white-20px"
          >At International Technological University (ITU), I bridged the gap between user experience (UX) design and
          full-stack development, spearheading improvements across various platforms.<br />Elevating User Experience
          (UX): I identified crucial areas for improvement within the ITU website, Education Management System (EMS),
          and my.ITU.edu. By focusing on UX, I enhanced information architecture, navigation, and data visualization.
          These optimizations significantly improved accessibility and information clarity, positioning ITU as a leader
          in providing detailed information for prospective students.<br />Full-Stack Expertise &amp; User Interface
          (UI) Design: I leveraged my full-stack development skills and strong front-end expertise to enhance student
          and staff support. This included building user-friendly interfaces (UI) for various applications, prioritizing
          usability and accessibility for a seamless user journey.<br />Beyond Technical Skills:&nbsp;&nbsp;I
          demonstrated initiative and trust by providing valuable IT assistance to University President Yau.
          Additionally, my leadership skills were highlighted during my tenure as President of the Student Government
          Association (SGA).<br />Technical Acumen: Rounding out my skillset, I possess experience in deploying and
          maintaining applications on AWS cloud environments using automation tools. This showcases my ability to manage
          IT infrastructure effectively.<br /><br /></span
        ><span class="span1-2">{{ spanText2 }}</span
        ><span class="ibmplexsans-normal-white-20px">{{ spanText3 }}</span>
      </p>
    </div>
    <group103 :className="group103Props.className" />
  </div>
</template>

<script>
import Group103 from "./Group103";
export default {
  name: "WorkExpITU",
  components: {
    Group103,
  },
  props: ["spanText2", "spanText3", "group103Props"],
};
</script>

<style>
.work-exp-itu {
  align-items: center;
  display: flex;
  gap: 50px;
  height: 549px;
  padding: 0 29px;
  position: relative;
  width: 999px;
}

.frame-103 {
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 58px;
  width: 825px;
}

.at-international-tec-1 {
  height: 425px;
  letter-spacing: 0;
  line-height: 29px;
  text-align: center;
  width: 825px;
}

.span1-2 {
  color: var(--white);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-l);
  font-weight: 700;
}
</style>
