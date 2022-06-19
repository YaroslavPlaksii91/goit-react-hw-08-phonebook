import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { filterContacts } from 'redux/contacts/contacts-filterSlice';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(filterContacts(e.currentTarget.value));

  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={s.input}
          value={filter}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default Filter;
