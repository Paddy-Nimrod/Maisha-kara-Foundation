import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100% !important;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: auto;
`;

export const TableContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 8%;
  width: 500px;
`;

export const HomeHeader = styled.h1`
  text-transform: uppercase;
  color: white;
  font-size: 40px;
  text-align: center;
`;

export const HorizontalLine = styled.hr`
  margin: 0;
  width: 100%;
  height: 10px;
  background-color: blue;
  border: 0;
  &:after {
    content: "";
    display: block;
    border-bottom: 10px solid orange;
    max-width: 50%;
  }
`;

export const ButtonPrimary = styled.button`
  width: 57%;
  background-color: orange;
  border: none;
  height: 70px;
  color: black;
  font-weight: bold;
  font-size: 25px;
  margin-left: 0;
`;
export const ButtonSecondary = styled.button`
  width: 42%;
  background-color: white;
  border: none;
  height: 70px;
  color: black;
  margin-right: 0;
  font-weight: bold;
  font-size: 25px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  background-color: white;
  height: 450px;
  margin-top: 5px;
`;
export const TableHeader = styled.h2`
  color: black;
  font-size: 30px;
  text-align: center;
`;
export const TableHeader2 = styled(TableHeader)`
  color: black;
  font-size: 50px;
  margin-left: 1px;
`;

export const ValueButton = styled.button`
  height: 60px;
  width: 20%;
  background-color: white;
  font-weight: bold;
  font-size: 20px;
  margin: 15px 12px;
  border: 2px solid black;
`;

export const PaymentButton = styled(ButtonSecondary)`
  width: 46%;
  background-color: ${(props) => (props.primary ? "orange" : "#483D8B")};
  margin-left: 11.5px;
  font-weight: lighter;
  color: ${(props) => (props.primary ? "black" : "white")};
`;

export const GivingContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #e5e4e2;
`;

export const GivingImageContainer = styled.div`
  width: 44%;
  padding: 25px;
  height: 80vh;
  float: left;
`;

export const GivingPassage = styled.div`
  float: right;
  width: 48%;
  height:80vh;
  padding: 25px;
  font-size: 20px;
`;

export const ParagraphContainer = styled.p`
  margin-left: 10px;
  padding: 10px;
  font-size: 20px;
`;

export const Input = styled.input.attrs(() => ({
  type: "text",
}))`
  font-size: 30px;
  border: 2px solid black;
  width: 88%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  padding: 15px;
  margin-left: 12px;
`;
export const FootConatiner = styled.div`
  height: 40vh;
  margin-left: 0px;
`;