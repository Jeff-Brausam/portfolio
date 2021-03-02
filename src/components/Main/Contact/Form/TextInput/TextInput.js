import React from 'react';
import { Field, ErrorMessage } from "formik";
import styled from 'styled-components';
import color from '../../../../../styles/config/colors';

const StyledInput = styled.input`
  width: 100%;
  padding: 1.5em;
  border-radius: 10px;
  outline: none;
  font-family: inherit;
  background: ${color.gray100};
  color: ${color.gray800};
  
  &:focus{
    border: 2px solid ${color.gray50};
  }
`;

export const StyledError = styled.div`
  color: red;
  font-size: .75rem;
  margin-top: 0.25rem;
`;

export const StyledLabel = styled.label`
  margin-top: 1rem;
  display: block;
  color: ${color.gray800};
`;

const TextInput = ({ label, name, type, placeholder }) => {
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <Field type={type} name={name} placeholder={placeholder} as={StyledInput} />
      <ErrorMessage name={name} component={StyledError}/>
    </>
  );

}

export default TextInput;