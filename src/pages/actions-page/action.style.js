import styled from "styled-components";

export const Header = styled.div`
  font-size: ${props=>props.fontSize || "80px"};
  color: ${props=>props.color || "#342d7e"};
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

export const Header2 = styled.div`
  font-size: 40px;
  color: #342d7e;
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
`;

export const ActionContainer = styled.div`
  width: 100%;
  height: 180vh;
  background-color: lightgray;

  display: inline-block;
`;

export const ImageContainer = styled.div`
  width: 47%;
  margin: 20px;
  height: ${props=>props.height || "500px"};
  float: left;
  list-style-position: inside;
  color:${props=>props.color || "black"};
`;
export const ImageContainer2 = styled.div`
  width: 47%;
  height: 500px;
  float: right;
  margin: 20px;
`;

export const ImageCaption = styled.div`
  font-size: 22px;
  text-align: center;
`;
export const BottonContainer = styled.div`
  width: 95%;
  align-items: center;
  margin: 20px;
  padding: 20px;
`;
export const BaseContainer = styled.div`
  background-color: #483d8b;
  height: 40vh;
`;
export const Butt = styled.div`
 background-color: white;
 height: 45vh;
`;