import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getMessages } from '../../actions/messageActions';

const Messages = ({ message: { messages, loading }, getMessages }) => {
  useEffect(() => {
    setInterval(getMessages, 500);
    // eslint-disable-next-line
  }, []);

  if (loading || messages === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>ARINC Messages</h4>
      </li>
      {!loading && messages.length === 0 ? (
        <p className='center'>No messages to show...</p>
      ) : (
        messages.map(message => <MessageItem message={message} key={message.id} />)
      )}
    </ul>
  );
};

Messages.propTypes = {
  message: PropTypes.object.isRequired,
  getMessages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(
  mapStateToProps,
  { getMessages }
)(Messages);
