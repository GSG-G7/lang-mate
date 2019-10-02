import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MessageCard from '../../../common/MessageCard';
import './index.css';

const Messages = ({ messages: { user, channels, users } }) => {
  return (
    <div>
      {channels.map(channel => (
        <Link
          to={{
            pathname: `/channel/${channel.channelId}`,
          }}
        >
          <MessageCard
            key={channel.channelId}
            participant={
              users.find(({ id }) => id === channel.participants[0]) || user
            }
            lastMessage={channel.messages[channel.messages.length - 1]}
          />
        </Link>
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
