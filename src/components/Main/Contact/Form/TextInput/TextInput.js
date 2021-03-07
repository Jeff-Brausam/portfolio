import React from 'react';
import { Field, ErrorMessage } from "formik";
import styled from 'styled-components';
import sizing from '../../../../../styles/config/sizing';
import color from '../../../../../styles/config/colors';

const StyledInput = styled.input`
  width: 100%;
  padding: ${sizing.size4};
  margin-top: ${sizing.size1};
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  color: ${color.gray800};
  
  &:focus{
    border: 2px solid ${color.gray50};
  }
`;

export const StyledError = styled.div`
  color: red;
  margin-top: ${sizing.size1};
`;

export const StyledLabel = styled.label`
  margin-top: ${sizing.size4};
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