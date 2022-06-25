import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const ContactsView = () => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactList />
    <Toaster />
  </>
);

export default ContactsView;
