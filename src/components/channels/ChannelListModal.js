import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChannelItem from './ChannelItem';
import { getChannels } from '../../actions/channelActions';

const ChannelListModal = ({ getChannels, channel: { channels, loading } }) => {
  useEffect(() => {
    getChannels();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='channel-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Channel List</h4>
        <ul className='collection'>
          {!loading &&
            channels !== null &&
            channels.map(channel => <ChannelItem channel={channel} key={channel.id} />)}
        </ul>
      </div>
    </div>
  );
};

ChannelListModal.propTypes = {
  channel: PropTypes.object.isRequired,
  getChannels: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  channel: state.channel
});

export default connect(
  mapStateToProps,
  { getChannels }
)(ChannelListModal);
