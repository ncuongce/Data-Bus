import React, { useState, useEffect } from 'react';
import ChannelSelectOptions from '../channels/ChannelSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateMessage } from '../../actions/messageActions';

const EditMessageModal = ({ current, updateMessage }) => {
  const [data, setData] = useState('');
  const [attention, setAttention] = useState(false);
  const [channel, setChannel] = useState('');

  useEffect(() => {
    if (current) {
      setData(current.data);
      setAttention(current.attention);
      setChannel(current.channel);
    }
  }, [current]);

  const onSubmit = () => {
    if (data === '' || channel === '') {
      M.toast({ html: 'Please add the data and channel' });
    } else {
      const updMessage = {
        id: current.id,
        data,
        attention,
        channel,
        date: new Date()
      };

      updateMessage(updMessage);
      M.toast({ html: `Message updated from ${channel}` });

      // Clear Fields
      setData('');
      setChannel('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-message-modal' className='modal' style={modalStyle}>
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

const modalStyle = {
  width: '75%',
  height: '75%'
};

EditMessageModal.propTypes = {
  current: PropTypes.object,
  updateMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.message.current
});

export default connect(
  mapStateToProps,
  { updateMessage }
)(EditMessageModal);
