import React from 'react';
import { Field, ErrorMessage } from "formik";
import styled from 'styled-components';
import color from '../../../../../styles/config/colors';
import { StyledLabel, StyledError } from '../TextInput/TextInput';

const StyledTextarea = styled.textarea`
  padding: .5em;
  border: 1px solid #aaa;
  resize: none;
  width: 100%;
  font-family: inherit;
  height: 15rem;
  border-radius: 10px;
    outline: none;

  &:focus{
    border: 2px solid ${color.gray50};
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

