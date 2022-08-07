import { Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import Section from 'components/Section';
import { Button, Error, Input, LabelName } from './ContactForm.styled';

function ContactForm({ addContact }) {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required()
      .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
        message:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      }),
    number: yup
      .string()
      .required()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        {
          message:
            'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        }
      ),
  });

  const submitHandler = (values, actions) => {
    try {
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      });
      actions.resetForm();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Section>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={submitHandler}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <LabelName>
            Name
            <Input name="name" type="text" />
          </LabelName>
          <Error name="name" component="p" />

          <LabelName>
            Number
            <Input name="number" type="tel" />
          </LabelName>
          <Error name="number" component="p" />

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </Section>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
