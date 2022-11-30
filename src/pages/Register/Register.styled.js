import styled from 'styled-components';
export const List = styled.label`
  display: inline-flex;
  min-width: 70%;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  margin-left: auto;
  margin-right: auto;
`;
export const ButtonRegister = styled.button`
  border-radius: 5px;
  border: none;
  border: 1px solid black;
  cursor: pointer;
  background-color: #cc9797;
  :hover,
  :focus {
    background-color: red;
  }
  margin: auto;
  padding: 5px 15px;
  font-size: 17px;
`;
export const Span = styled.span`
  padding: 5px 5px;
  margin: auto;
  font-size: 17px;
  font-weight: 500;
`;
