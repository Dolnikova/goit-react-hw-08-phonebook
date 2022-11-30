import { NavLink } from 'react-router-dom';
import { Div, Span } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Div>
      <NavLink to="/register">
        <Span>Register</Span>
      </NavLink>
      <NavLink to="/login">
        <Span>Log In</Span>
      </NavLink>
    </Div>
  );
};
