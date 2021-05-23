import styled from "styled-components";

import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  background-color: #4682b4;
  height: 60px;
  color: white;
`;

export const HeaderStrip = styled.div`
  width: 100%;
  background-color: #483d8b;
  color: white;
  margin-top: 0;
  height: 70px;
  border-bottom: 1px solid teal;
`;

export const OptionLink = styled(Link)`
  color: white;
  font-size: 15px;
  margin-top: 20px;
  font-weight: normal;
  text-decoration: none;
  padding: 3px;
  text-transform: uppercase;
`;

export const SocialContainer = styled.div`
  float: left;
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const SearchContainer = styled.div`
  width: 20%;
  margin-right: 100px;
  padding: 0;
  float: right;
  height: 100%;
  background-color: #4682b4;
`;
export const Header = styled.div`
  font-weight: normal;
  font-size: 18px;
  margin-left: 40px;
  margin-top: 15px;
`;

export const HeaderMenu = styled.div`
  float: right;
  margin-right: 60px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconPot = styled.div`
  margin-bottom: 5px;
  margin-right: 1px; ;
`;

export const HeaderButton = styled.button`
  color: white;
  background-color:  #483d8b;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 20px;
  font-weight: normal;
  border: none;
  border-radius: 4px;
  width: 180px;
  height:30px ;
  padding: 3px;
  text-transform: uppercase;
  cursor: pointer;
`;
export const Icon = styled.div`
 color: white;
`;