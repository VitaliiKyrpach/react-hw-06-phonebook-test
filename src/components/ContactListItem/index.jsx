import { useDispatch } from 'react-redux';

export const ContactListItem = ({ id, user, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch({ type: 'deleteUser', payload: id });
  };
  return (
    <li>
      {user}: {phone}
      <button type="button" onClick={() => handleDelete(id)}>
        delete
      </button>
    </li>
  );
};
