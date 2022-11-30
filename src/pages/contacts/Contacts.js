import { ContactForm } from 'components/Phonebook/ContactForm/ContactForm';
import { ContactList } from 'components/Phonebook/ContactList/ContactList';
import { Container } from 'components/Phonebook/cotainer';
import Filter from 'components/Phonebook/Filter/Filer';
import { Loader } from 'components/Phonebook/Loader/Loader';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { getContacts, getLoading } from 'redux/selectors';

const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
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
export default ContactsPage;
