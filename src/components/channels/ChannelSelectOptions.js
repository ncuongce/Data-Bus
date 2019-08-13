import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getChannels } from '../../actions/channelActions';

const ChannelSelectOptions = ({ getChannels, channel: { channels, loading } }) => {
  useEffect(() => {
    getChannels();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    channels !== null &&
    channels.map(c => (
      <option key={c.id} value={`${c.protocol} ${c.number}`}>
        {c.protocol} {c.number}
      </option>
    ))
  );
};

ChannelSelectOptions.propTypes = {
  channel: PropTypes.object.isRequired,
  getChannels: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  channel: state.channel
});

export default connect(
  mapStateToProps,
  { getChannels }
)(ChannelSelectOptions);
