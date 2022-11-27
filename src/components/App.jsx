import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { Container } from './Phonebook/cotainer';
import Filter from './Phonebook/Filter/Filer';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Phonebook/Loader/Loader';

export const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        {isLoading && <Loader />}
        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p
            style={{
              marginBottom: '25px',
              lineHeight: '1.15',
            }}
          >
            You have no contacts saved
          </p>
        )}
      </Container>
    </>
  );
};
