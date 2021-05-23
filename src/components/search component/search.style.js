import styled from "styled-components";

export const Input = styled.input`
  font-size: 15px;
  background-color: #4682b4;
  float: right;
  height:70%;
  display: flex;
  margin: 10px;
  padding: 15px;
  color: #fff;
  justify-content: space-around;
  width: 70%;
  border: none;
  cursor: pointer;
  &::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  float: left;
  width: 20%;
  height: 70%;
  padding: 15px;
  margin-top: 8px;
  background: #4682b4;
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: orange;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-around;
`;
