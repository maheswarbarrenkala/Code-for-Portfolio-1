<template>
  <div class="mobile-itu">
    <div class="frame-183">
      <p class="at-international-tec ibmplexsans-normal-white-14px">
        <span class="ibmplexsans-normal-white-14px"
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
        ><span class="span1">{{ spanText2 }}</span
        ><span class="ibmplexsans-normal-white-14px">{{ spanText3 }}</span>
      </p>
    </div>
    <group103 />
  </div>
</template>

<script>
import Group103 from "./Group103";
export default {
  name: "MobileItu",
  components: {
    Group103,
  },
  props: ["spanText2", "spanText3"],
};
</script>

<style>
.mobile-itu {
  align-items: center;
  display: flex;
  gap: 15px;
  height: 510px;
  justify-content: flex-end;
  left: 0;
  min-width: 350px;
  padding: 47px 14px;
  position: absolute;
  top: 0;
}

.frame-183 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  height: 415px;
  width: 289px;
}

.at-international-tec {
  height: 416px;
  letter-spacing: 0;
  line-height: 18px;
  margin-top: -1px;
  text-align: center;
  width: 289px;
}

.span1 {
  color: var(--white);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-xxs);
  font-weight: 700;
}
</style>
