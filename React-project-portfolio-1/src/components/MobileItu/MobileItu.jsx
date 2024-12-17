/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MobileItu = ({ property1, className }) => {
  return (
    <div className={`mobile-itu ${property1} ${className}`}>
      <div className="at-international-wrapper">
        <div className="at-international">
          <span className="text-wrapper">
            At International Technological University (ITU), I bridged the gap
            between user experience (UX) design and full-stack development,
            spearheading improvements across various platforms.
            <br />
            Elevating User Experience (UX): I identified crucial areas for
            improvement within the ITU website, Education Management System
            (EMS), and my.ITU.edu. By focusing on UX, I enhanced information
            architecture, navigation, and data visualization. These
            optimizations significantly improved accessibility and information
            clarity, positioning ITU as a leader in providing detailed
            information for prospective students.
            <br />
            Full-Stack Expertise &amp; User Interface (UI) Design: I leveraged
            my full-stack development skills and strong front-end expertise to
            enhance student and staff support. This included building
            user-friendly interfaces (UI) for various applications, prioritizing
            usability and accessibility for a seamless user journey.
            <br />
            Beyond Technical Skills:&nbsp;&nbsp;I demonstrated initiative and
            trust by providing valuable IT assistance to University President
            Yau. Additionally, my leadership skills were highlighted during my
            tenure as President of the Student Government Association (SGA).
            <br />
            Technical Acumen: Rounding out my skillset, I possess experience in
            deploying and maintaining applications on AWS cloud environments
            using automation tools. This showcases my ability to manage IT
            infrastructure effectively.
            <br />
            <br />
          </span>

          <span className="span">
            {property1 === "default" && (
              <>
                Key Takeaways:
                <br />
              </>
            )}

            {property1 === "variant-2" && (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp; Key Takeaways:
                <br />
              </>
            )}
          </span>

          <span className="text-wrapper">
            Improved UX for critical university platforms
            <br />
            Designed user-friendly UIs for student &amp; staff applications
            <br />
            Demonstrated leadership &amp; communication skills
            <br />
            Possess strong cloud infrastructure management capabilities
          </span>
        </div>
      </div>

      <div className="group">
        <div className="overlap-group">
          <div className="rectangle" />
        </div>
      </div>
    </div>
  );
};

MobileItu.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
