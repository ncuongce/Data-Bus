import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addChannel } from '../../actions/channelActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddChannelModal = ({ addChannel }) => {
  const [protocol, setProtocol] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = () => {
    if (protocol === '' || number === '') {
      M.toast({ html: 'Please add the channel type and number' });
    } else {
      addChannel({
        protocol,
        number
      });

      M.toast({ html: `${protocol} ${number} was added as a channel` });

      // Clear Fields
      setProtocol('');
      setNumber('');
    }
  };

  return (
    <div id='add-channel-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Channel</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='protocol'
              value={protocol}
              onChange={e => setProtocol(e.target.value)}
            />
            <label htmlFor='protocol' className='active'>
              Protocol
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='number'
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
            <label htmlFor='number' className='active'>
              Number
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Add
        </a>
      </div>
    </div>
  );
};

AddChannelModal.propTypes = {
  addChannel: PropTypes.func.isRequired
};

export default connect(
  null,
  { addChannel }
)(AddChannelModal);

