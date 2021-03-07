import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import styled from 'styled-components';
import color from '../../../../styles/config/colors';
import sizing from '../../../../styles/config/sizing';
import Button from '../../../UI/Button/Button';
import TextInput from './TextInput/TextInput';
import TextArea from './TextArea/TextArea';
import { init, send } from 'emailjs-com';
init(process.env.REACT_APP_EMAIL_USER_ID);

const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid Email')
      .required('Required'),
    message: Yup.string()
      .min(1, 'Please enter a message.')
      .required('Required')
});

const StyledContainer = styled.div`
  box-shadow: 2px 4px 10px rgba(0,0,0,.2);
  border-radius: 15px;
  margin: 1rem auto;
  padding: 2rem;
  background-color: ${color.gray50};
`;

const StyledHeader = styled.h3`
  font-weight: 400;  
  margin: 0;
`;

const StyledDescription = styled.p`
  margin-top: ${sizing.size4};
  font-weight: 200;  
  color: ${color.gray600};
  margin-bottom: ${sizing.size6};
`;

const StyledSubmitButton = styled(Button)`
    width: 100%;
    height: ${sizing.size7};
    margin-top: 1rem;
`;




const ContactForm = () => {    
  function sendEmail({ name, message, email }) {
    send(
      process.env.REACT_APP_EMAIL_SERVICE,
      process.env.REACT_APP_EMAIL_TEMPLATE,
        {
          from_name: name,
          message_html: message,
          reply_to: email
        })
    // .then(() => {
    //     console.success('Success!');       
    // }, (error) => {
    //     console.error(error);
    // });
  }
  return (
    <StyledContainer>
      <StyledHeader>Contact me!</StyledHeader>
      <StyledDescription>
        For business inquiries, feedback, or to say hello!
        </StyledDescription>
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={ContactFormSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          sendEmail(values);
          resetForm();
          setTimeout(() => {
          alert(JSON.stringify(values));
            setSubmitting(false);
            
         }, 400);
        }}
      >
      {({ isSubmitting }) => (
        <Form id="contact_form">
            <TextInput
                type="text"
                name="name"
                label="Name"
                placeholder="Your name"
            />
            <TextInput 
              type="email"
              name="email"
              label="Email"
              placeholder="Your email"
            />
            <TextArea 
              type="textarea"
              name="message"
              label="Message"
              placeholder="Enter a message"
            />
            <StyledSubmitButton
              primary
              disabled={isSubmitting} >
            Submit
          </StyledSubmitButton>
        </Form>
       )}
     </Formik>
   </StyledContainer>
  )
}

export default ContactForm;