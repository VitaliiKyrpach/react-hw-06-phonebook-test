import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const { filter } = useSelector(store => store);

  const dispatch = useDispatch();
  const handleChange = e => {
    const value = e.target.value;
    dispatch({ type: 'filter', payload: value });
    console.log(filter);
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </div>
  );
};
