import styled from 'styled-components';
export const List = styled.ul`
  word-wrap: break-word;
`;
export const DeleteBtn = styled.button`
  outline: 0;
  background: #4caf50;
  float: right;
  border: 0;
  padding: 3px;
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3 ease;
  cursor: pointer;
  :hover,
  :active,
  :focus {
    background: #43a047;
  }
`;
