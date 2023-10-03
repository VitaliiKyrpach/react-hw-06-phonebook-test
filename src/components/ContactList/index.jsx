import { ContactListItem } from 'components/ContactListItem';
// import { useMemo } from 'react';
import { useSelector } from 'react-redux';
export const ContactList = () => {
  const { contacts, filter } = useSelector(store => store);
  // const filtered = useMemo(() => {
  //   return (
  //     contacts &&
  //     contacts.filter(contact => {
  //       return contact.name.toLowerCase().includes(filter);
  //     })
  //   );
  // }, [contacts, filter]);
  const filtered =
    contacts &&
    contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
  console.log('filtered', filtered);
  console.log('contacts', contacts);
  console.log('filter', filter);
  return (
    <ul>
      {filtered &&
        filtered.map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} id={id} user={name} phone={number} />
          );
        })}
    </ul>
  );
};
