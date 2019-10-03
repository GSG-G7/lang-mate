import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import convertMs from '../../../services/date';
import './index.css';

const MessageCard = ({
  channel: { channelId },
  participant: { avatar_path: avatar, username },
  lastMessage: { content, sent_at: timestamp },
}) =>
  username ? (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={{
        pathname: `/channel/${username}/${channelId}`,
      }}
    >
      <div className="message-card">
        <img
          src={avatar || 'https://i.imgur.com/fLrnzVg.jpg'}
          alt={`${username} avatar`}
          className="message-card__image"
        />
        <div className="message-card__content">
          <h2 className="message-card__username">{username}</h2>
          <p className="message-card__message">{content}</p>
        </div>
        <div className="message-card__time">
          <span className="message-card__time-span">
            {convertMs(Date.now() - new Date(timestamp)).hour} hour
          </span>
        </div>
      </div>
    </Link>
  ) : (
    ''
  );

MessageCard.propTypes = {
  participant: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar_path: PropTypes.string,
  }).isRequired,
  lastMessage: PropTypes.shape({
    content: PropTypes.string.isRequired,
    sent_at: PropTypes.string.isRequired,
  }).isRequired,
  channel: PropTypes.shape({
    channelId: PropTypes.number.isRequired,
  }).isRequired,
};

export default MessageCard;
