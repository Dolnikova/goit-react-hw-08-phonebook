import { FormContainer } from 'components/Phonebook/ContactForm/ContactFormStyled';
import { Container } from 'components/Phonebook/cotainer';
import { Input } from 'components/Phonebook/Filter/Filter.styled';
import { Span } from 'pages/Register/Register.styled';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { logIn } from 'redux/auth/operations';
import { ButtonLoigin, List } from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    dispatch(logIn({ email: form.email.value, password: form.password.value }));
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Container>
        <FormContainer onSubmit={handleSubmit} autoComplete="off">
          <Span>Email</Span>
          <List>
            <Input type="email" name="email" />
          </List>
          <Span>Password</Span>
          <List>
            <Input type="password" name="password" />
          </List>
          <ButtonLoigin type="submit">Login</ButtonLoigin>
        </FormContainer>
      </Container>
    </>
  );
};
export default Login;
