import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/actions';
import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <input type="text" onChange={handleFilterInput} />
    </Label>
  );
};
