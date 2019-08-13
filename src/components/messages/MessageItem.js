import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteMessage, setCurrent } from '../../actions/messageActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const MessageItem = ({ message, deleteMessage, setCurrent }) => {
  const onDelete = () => {
    deleteMessage(message.id);
    M.toast({ html: 'Message Deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-message-modal'
          className={`modal-trigger ${
            message.attention ? 'red-text' : 'blue-text'
          }`}
          onClick={() => setCurrent(message)}
        >
          {message.data}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{message.id}</span> received from {' '}
          <span className='black-text'>{message.channel}</span> on{' '}
          <span>{message.date}</span>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  deleteMessage: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteMessage, setCurrent }
)(MessageItem);
