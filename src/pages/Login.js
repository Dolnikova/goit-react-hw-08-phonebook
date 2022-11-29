import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { logIn } from 'redux/auth/operations';

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
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
export default Login;
