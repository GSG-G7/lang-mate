import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const MessageCard = ({
  messageInfo: { avatar, username, lastMessage, messageTime },
}) => (
  <div className="message-card">
    <img
      src={avatar || 'https://img.icons8.com/clouds/2x/user.png'}
      alt={`${username} avatar`}
      className="message-card__image"
    />
    <div className="message-card__content">
      <h2 className="message-card__username">{username}</h2>
      <p className="message-card__message">{lastMessage}</p>
    </div>
    <div className="message-card__time">
      <span className="message-card__time-span">{messageTime}</span>
    </div>
  </div>
);

MessageCard.propTypes = {
  messageInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    messageTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageCard;
