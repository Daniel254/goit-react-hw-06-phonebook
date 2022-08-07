import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const LabelName = styled.label`
  display: block;
`;

export const Input = styled(Field)`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
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

export const Error = styled(ErrorMessage)`
  font-size: 12px;
  color: #bc0000;
  height: auto;
  margin-top: 0;
  @keyframes append-animate {
    from {
      max-height: 0;
      transform: scale(0);
      opacity: 0;
      margin-bottom: 0 auto;
    }
    to {
      max-height: 100px;
      transform: scale(1);
      opacity: 1;
      margin-bottom: 1em;
    }
  }
  animation: append-animate 0.3s linear;
`;
