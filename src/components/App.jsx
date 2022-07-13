import { useState } from 'react';
import { actionLogin } from '../redux/actions';
import { useDispatch } from 'react-redux';

export const App = () => {
  const [query, setquery] = useState('');
  const dispatch = useDispatch();

  const onHandeSubmit = ev => {
    ev.preventDefault();
    dispatch(actionLogin(query));
    setquery('');
  };

  const handleChange = ev => {
    const query = ev.target.value;
    setquery(query);
  };

  return (
    <div>
      <form onSubmit={onHandeSubmit}>
        <label>
          <input onChange={handleChange} value={query} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
