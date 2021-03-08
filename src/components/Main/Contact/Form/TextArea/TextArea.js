import React from 'react';
import { Field, ErrorMessage } from "formik";
import styled from 'styled-components';
import color from '../../../../../styles/config/colors';
import sizing from '../../../../../styles/config/sizing';
import { StyledLabel, StyledError } from '../TextInput/TextInput';

const StyledTextarea = styled.textarea`
  padding: ${sizing.size3};
  margin-top: ${sizing.size1};
  resize: none;
  width: 100%;
  font-family: inherit;
  height: ${sizing.size12};
  border-radius: 10px;
  outline: none;
  font-size: 1rem;
  background-color: ${color.gray200};
  color: ${color.black};

  &:focus{
  background-color: ${color.white};
  }
`;

const TextArea = ({ type, name, placeholder, label }) => {
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <Field type={type} name={name} placeholder={placeholder} as={StyledTextarea} />
      <ErrorMessage name="message" component={StyledError} />
    </>
  )
};

export default TextArea;

