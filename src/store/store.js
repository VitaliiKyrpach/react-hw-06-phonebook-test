import { createStore } from 'redux';
import { nanoid } from 'nanoid';
const init = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case 'createUser':
      return {
        ...state,
        contacts: state.contacts
          ? [...state.contacts, { id: nanoid(), ...payload }]
          : [...state.contacts, { id: nanoid(), ...payload }],
      };
    case 'deleteUser':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    case 'filter':
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export const store = createStore(reducer, {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
});
