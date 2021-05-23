import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  background-color: lightgrey;
  justify-content: space-around;
`;
export const CardHeader = styled.div`
  text-align: center;
  padding: 3px;
  font-weight: bold;
  font-size: 23px;
`;

export const CardHeader2 = styled.div`
  text-align: center;
  padding: 3px;
  font-size: 20px;
`;

export const Card = styled.div`
  width: 15%;
  height: 68vh;
  background-color: white;
`;

export const CardFoot = styled.p`
  background-color: #483d8b;
  text-align: center;
  color: white;
  padding: 5px;
  height: 24vh;
`;

export const FormContainer = styled.div`
  height: 100vh;
  padding: 20px;
`;
export const FormHeader = styled.div`
    text-transform: uppercase;
    font-size: 40px;
    margin:30px;

`;

export const Input = styled.input`
    width: 70vw;
    height: 40px;
    padding: 8px;
    font-size: 17px;

`;
export const TextArea = styled.textarea`
    width: 70vw;
    margin-top:20px;
    padding: 8px;
    &::placeholder {
        font-size:17px;
    }
`;

export const Button = styled.button`
    color: white;
    background-color: #7F462C;
    width: 80px;
    height:40px;
    border:none;
    border-radius: 5px;
    font-size: 20px;
    text-transform: uppercase;
    margin-left: 35vw;
`;