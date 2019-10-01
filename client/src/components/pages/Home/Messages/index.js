import React from 'react';
import MessageCard from '../../../common/MessageCard';
import './index.css';

const Messages = ({ messages }) => {
  return messages.map(message => (
    <MessageCard key={message.id} messageInfo={message} />
  ));
};

export default Messages;
