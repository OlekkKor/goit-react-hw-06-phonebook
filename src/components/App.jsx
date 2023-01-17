import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div
      style={{
        width: 400,
        padding: '12px 16px',
        borderRadius: 20,
        backgroundColor: '#006d00',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};
