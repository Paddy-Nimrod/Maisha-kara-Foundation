import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 500px;
  background-color: #2c3539;
  margin: 0;
  color: white;
  width: 100%;
  padding-left: 5%;
  display: flex;
  box-sizing: border-box;
`;

export const FooterSection1 = styled.div`
  width: 20%;
  margin: 20px;
  border-right:solid white 1px;  
`;
export const FooterSection2 = styled.div`
  width: 34%;
  margin: 20px;
  border-right:solid white 1px;  
`;
export const FooterSection3 = styled.div`
  width: 34%;
  margin: 20px;
`;
export const FooterLine = styled.hr`
  width: ${props=>props.width || "95%"};
  height: 2px;
  margin-left: 0;
  margin-top: 20px;
  border-width: 0;
  color: white;
  background-color:${props=>props.color || "white"};
`;
export const Paragraph = styled.p`
  padding: 2px;
`;