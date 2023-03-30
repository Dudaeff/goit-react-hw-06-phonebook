import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getContacts, getFilterValue } from 'redux/selectors';
import { DeleteBtn, List, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <p>{name}: </p>
            <p>{number}</p>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteBtn>
          </ListItem>
        );
      })}
    </List>
  );
};
