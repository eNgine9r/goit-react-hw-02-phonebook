import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDeleteContact }) => (
  <li>
    <p>{name}</p>    
    <div>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        aria-label="delete">
      delete
      </button>
    </div>
  </li>
);

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};