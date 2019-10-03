import React from 'react';
import PropTypes from 'prop-types';
import MessageCard from '../../../common/MessageCard';
import './index.css';

const Messages = ({ messages: { user, channels, users } }) => {
  return (
    <div style={{ textDecoration: 'none' }}>
      {channels ? (
        channels.map(channel => (
          <MessageCard
            key={channel.channelId}
            channel={channel}
            participant={
              users.find(({ id }) => id === channel.participants[0]) || user
            }
            lastMessage={channel.messages[channel.messages.length - 1]}
          />
        ))
      ) : (
        <h3 style={{ textAlign: 'center' }}>
          {' '}
          You do not have any chat untill now{' '}
        </h3>
      )}
    </div>
  );
};

Messages.defaultProps = {
  channels: [],
  users: [],
  messages: {},
};

Messages.propTypes = {
  messages: PropTypes.objectOf(Object),
  channels: PropTypes.arrayOf(Object),
  users: PropTypes.arrayOf(Object),
};

export default Messages;
