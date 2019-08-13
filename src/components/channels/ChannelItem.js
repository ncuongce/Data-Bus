import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteChannel } from '../../actions/channelActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const ChannelItem = ({ channel: { id, protocol, number }, deleteChannel }) => {
  const onDelete = () => {
    deleteChannel(id);
    M.toast({ html: 'Channel deleted' });
  };

  return (
    <li className='collection-item'>
      <div>
        {protocol} {number}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

ChannelItem.propTypes = {
  channel: PropTypes.object.isRequired,
  deleteChannel: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteChannel }
)(ChannelItem);
