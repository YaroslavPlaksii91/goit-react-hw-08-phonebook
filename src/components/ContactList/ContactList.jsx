import { useSelector } from 'react-redux';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactsApi';
import { getFilter } from 'redux/contacts/contacts-selectors';
import ContactListElem from '../ContactListElem';
import s from './ContactList.module.css';

const ContactList = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(getFilter);
  const normalizeFilter = filter.toLowerCase();
  const filteredContacts =
    contacts &&
    contacts.filter(({ name }) => name.toLowerCase().includes(normalizeFilter));

  return (
    <ul className={s.contacts}>
      {contacts &&
        filteredContacts.map(({ name, id, phone }) => (
          <li key={id} className={s.contactsItem}>
            <ContactListElem
              name={name}
              number={phone}
              onDelete={() => deleteContact(id)}
            />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
