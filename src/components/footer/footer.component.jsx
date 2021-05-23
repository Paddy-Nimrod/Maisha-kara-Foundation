import React from "react";

import {
  FooterContainer,
  FooterSection1,
  FooterSection2,
  FooterSection3,
  FooterLine,
  Paragraph
} from "./footer.style";

const FooterComponent = () => {
  return (
    <FooterContainer>
      <FooterSection1>Hello Hello</FooterSection1>
      <FooterSection2>
        <h2>Contact:</h2>
        <Paragraph>Kanamai, Kilifi - p.o. box 76690-005058, Nairobi,Kenya</Paragraph>
        <br />
        <h2>Telephone:</h2>
        <Paragraph>+254(0) 741852129, 0722766846</Paragraph>
        <br />
        <h2>website:</h2>
        <Paragraph>www.bauchicompany.org email: info@bauchicompany.org</Paragraph>
        <FooterLine />
        <Paragraph>The learning Agenda</Paragraph>
        <Paragraph>Evaluability Assessment Project</Paragraph>
        <Paragraph>The Maisha Kara Approach</Paragraph>
        <Paragraph>Children's Learning Outcome</Paragraph>
        <Paragraph>FInancing Preprmary</Paragraph>
        <Paragraph>General Resources</Paragraph>
        <Paragraph>Contact Us</Paragraph>
      </FooterSection2>
      <FooterSection3>
        <Paragraph>Teachers and proffesionals</Paragraph>
        <Paragraph>Head Teachers</Paragraph>
        <Paragraph>Parents</Paragraph>
        <Paragraph>School Management Committee</Paragraph>
        <FooterLine />
        <Paragraph>Enrollment and Attendance</Paragraph>
        <Paragraph>Teacher Workforce</Paragraph>
        <Paragraph>Students Outcomes</Paragraph>
        <Paragraph>Cost Effectiveness</Paragraph>
      </FooterSection3>
    </FooterContainer>
  );
};

export default FooterComponent;
