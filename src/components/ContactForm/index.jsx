import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = () => {
  const { contacts } = useSelector(store => store);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    else setNumber(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    createUser({ name: name, number: number });
    setName('');
    setNumber('');
  };
  const createUser = data => {
    const isUser =
      contacts && contacts.find(contact => contact.name === data.name);
    if (isUser) {
      alert(`${isUser.name} is already in contacts`);
      return;
    }
    dispatch({ type: 'createUser', payload: data });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
