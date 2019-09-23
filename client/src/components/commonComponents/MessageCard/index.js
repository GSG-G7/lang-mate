import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const MessageCard = ({
  messageInfo: { avatar, username, lastMessage, messageTime },
}) => (
  <div className="message-card">
    <img
      src={avatar || 'https://img.icons8.com/clouds/2x/user.png'}
      alt="userImage"
      className="message-card__image"
    />
    <div className="Message-card__content">
      <h2>{username}</h2>
      <p>{lastMessage}</p>
    </div>
    <div className="message-time">
      <span>{messageTime}</span>
    </div>
  </div>
);

MessageCard.propTypes = {
  messageInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    messageInfo: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageCard;
