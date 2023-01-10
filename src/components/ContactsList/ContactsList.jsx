import PropTypes from 'prop-types';
import { Ul, Li, Btn } from './ContactList.styled';

export const ContactsList = ({ list, deleteContacts }) => {
  return (
    <Ul>
      {list.map(({ number, name, id }) => (
        <Li key={id}>
          {name}: {number}
          <Btn type="button" onClick={() => deleteContacts(id)}>
            Delete
          </Btn>
        </Li>
      ))}
    </Ul>
  );
};
ContactsList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContacts: PropTypes.func.isRequired,
};
