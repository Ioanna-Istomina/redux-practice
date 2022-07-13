import { actionLogin, addQuery } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const query = useSelector(state => state.form);
  const dispatch = useDispatch();

  const onHandeSubmit = ev => {
    ev.preventDefault();
    dispatch(actionLogin(query));
    dispatch(addQuery(''));
  };

  const handleChange = ev => {
    dispatch(addQuery(ev.target.value));
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
