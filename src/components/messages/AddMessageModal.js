import React, { useState } from 'react';
import ChannelSelectOptions from '../channels/ChannelSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMessage } from '../../actions/messageActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddMessageModal = ({ addMessage }) => {
  const [data, setData] = useState('');
  const [attention, setAttention] = useState(false);
  const [channel, setChannel] = useState('');

  const onSubmit = () => {
    if (data === '' || channel === '') {
      M.toast({ html: 'Please add the data and channel' });
    } else {
      const newMessage = {
        data,
        attention,
        channel,
        date: new Date()
      };

      addMessage(newMessage);

      M.toast({ html: `Message received from ${channel}` });

      // Clear Fields
      setData('');
      setChannel('');
      setAttention(false);
    }
  };

  return (
    <div id='add-message-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add ARINC Message</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='data'
              value={data}
              onChange={e => setData(e.target.value)}
            />
            <label htmlFor='data' className='active'>
              Message Data
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='channel'
              value={channel}
              className='browser-default'
              onChange={e => setChannel(e.target.value)}
            >
              <option value='' disabled>
                Select Channel
              </option>
              <ChannelSelectOptions />
            </select>
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

AddMessageModal.propTypes = {
  addMessage: PropTypes.func.isRequired
};

export default connect(
  null,
  { addMessage }
)(AddMessageModal);
