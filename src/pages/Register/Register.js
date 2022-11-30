import { FormContainer } from 'components/Phonebook/ContactForm/ContactFormStyled';
import { Container } from 'components/Phonebook/cotainer';
import { Input } from 'components/Phonebook/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { ButtonRegister, List, Span } from './Register.styled';
const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(
      register({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    e.currentTarget.reset();
  };
  return (
    <Container>
      <FormContainer onSubmit={handleSubmit} autoComplete="off">
        <Span>Username</Span>
        <List>
          <Input type="text" name="name" />
        </List>
        <Span>Email</Span>
        <List>
          <Input type="email" name="email" />
        </List>
        <Span>Password</Span>
        <List>
          <Input type="password" name="password" />
        </List>
        <ButtonRegister type="submit">Register</ButtonRegister>
      </FormContainer>
    </Container>
  );
};
export default Register;
