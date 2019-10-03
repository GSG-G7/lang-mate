import React from 'react';
import PropTypes from 'prop-types';
import MessageCard from '../../../common/MessageCard';
import './index.css';

const Messages = ({ messages: { user, channels, users } }) => {
  return (
    <div>
      {channels.map(channel => (
        <MessageCard
          key={channel.channelId}
          channel={channel}
          participant={
            users.find(({ id }) => id === channel.participants[0]) || user
          }
          lastMessage={channel.messages[channel.messages.length - 1]}
        />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.objectOf().isRequired,
  channels: PropTypes.arrayOf(Object).isRequired,
  users: PropTypes.arrayOf(Object).isRequired,
};

export default Messages;
