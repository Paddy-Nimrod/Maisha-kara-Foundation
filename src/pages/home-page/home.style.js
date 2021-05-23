import styled from "styled-components";

export const HomeContainer = styled.div`
  background-color: #e5e4e2;
  height: 240vh;
`;

export const LeftContainer = styled.div`
  float: left;
  width: 70%;
  margin-left: 10px;
`;
export const RightContainer = styled.div`
  float: right;
  width: 25%;
  padding: 30px;
`;

export const HeaderContainer = styled.h1`
  color: #15317e;
  text-transform: uppercase;
  padding: 20px;
  margin: 20px;
`;

export const NewContainer = styled.div`
  background-color: white;
  height: 470px;
  margin: 20px;
  padding: 10px;
  width: 90%;
  margin-right: 40px;
`;

export const Input = styled.input`
  font-size: 15px;
  border: 2px solid black;
  width: 84%;
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 5px 12px;
  height: 15px;
`;

export const TextArea = styled.textarea`
  font-size: 15px;
  width: 84%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 12px;
  border: 2px solid black;
`;

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.color || "#15317e"};
  padding: 10px;
  margin: ${(props) => props.margin || "10px"};
  width: ${(props) => props.width || "40%"};
  border: none;
  height: ${(props) => props.height || "50px"};
  font-size: ${(props) => props.font || "13px"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  text-transform: uppercase;
  border-radius: ${(props) => props.radius || "5px"};
  &:hover {
    background-color: ${(props) => props.hovercolor || "orange"};
  }
`;
export const SmallHeader = styled.h3`
  margin-left: 40px;
  padding: 10px;
  font-weight: normal;
`;
export const SmallHead = styled.h3`
  margin-left: 10px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: normal;
`;

export const Paragraph = styled.p`
  font-size: 22px;
  margin: 10px;
  width: 90%;
  padding:10px;
  display: inline-block;
  list-style-position: inside;
  
`;

export const MiddleContainer = styled.div`
  width: 70%;
  height: 150vh;
  margin-left: 20px;
  background-color: white;
`;

export const ContainerHeader = styled.div`
  background-color: #15317e;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: skyblue;
`;
export const HorizontalLine = styled.hr`
  width: 90%;
  display: flex;
  justify-content: space-around;
  height: 2px;
  border-width: 0;
  margin: 20px;
  color: black;
  background-color: black;
`;

export const HeaderSmall = styled.div`
  color: #15317e;
  font-weight: bold;
  width: 60%;
  text-transform: uppercase;
  font-size: 20px;
  margin-left: 20px;
  padding-left: 20px;
`;

export const LegContainer = styled.div`
  width: 70%;
  height: 10vh;
  margin-left: 20px;
  background-color: white;
  position: relative;
`;
export const BaseContainer = styled.div`
  height: 60vh;
  background-color: #4863a0;
`;

export const BaseHeader = styled.div`
  color: white;
  font-weight: ${(props) => props.weight || "bold"};
  margin: 0 200px;
  font-size: ${(props) => props.size || "60px"};
  text-align: center;
`;
export const BaseLine = styled.hr`
  width: 25%;
  display: flex;
  justify-content: space-around;
  height: 4px;
  border-width: 0;
  margin-left: 38%;
  color: white;
  background-color: white;
`;
export const BaseInput = styled.input`
  font-size: 20px;
  border: none;
  width: 20%;
  padding: 10px;
  margin: 10px;
  height: 30px;
`;
export const BaseContainerBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
