import React, { Component } from 'react';
import Input from '../../common/Input';
import Avatar from '../../common/Avatar';
import BackButton from '../../common/BackButton';
import Button from '../../common/Button';
import api from '../../../services/api';

import './index.css';

class Chat extends Component {
  state = {
    message: '',
    messages: [],
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    api
      .getMessages(id)
      .then(res => this.setState({ messages: res.data.messages }));
  }

  handelClick = () => {
    const { message, messages } = this.state;
    messages.push(message);
  };

  handelChange = ({ target: { value } }) => {
    this.setState({ message: value });
  };

  render() {
    const { messages, message } = this.state;
    const {
      history: { goBack },
      match: {
        params: { user },
      },
    } = this.props;
    return (
      <div className="chat">
        <header className="chat__header">
          <div className="chat__back">
            <BackButton back={goBack} />
          </div>
          <div className="chat__user">
            <Avatar
              src="https://i.imgur.com/fLrnzVg.jpg"
              width="25"
              height="25"
              altText="chat user"
              className="chat__avatar"
            />
            <h4 className="chat__username">{user}</h4>
          </div>
        </header>
        <div className="chat__body">
          {messages.map(message => (
            <h4
              key={message.id}
              className={message.user_id === 2 ? 'green' : 'gray'}
            >
              {message.content}
            </h4>
          ))}
        </div>
        <div className="chat__box">
          <Input
            type="text"
            name="message"
            className="chat__input"
            label="message filed"
            placeholder="type a message"
            value={message}
            onChange={this.handelChange}
            errMsg=""
          />
          <Button
            text="+"
            className="chat__button"
            onClick={this.handelClick}
          />
        </div>
      </div>
    );
  }
}

export default Chat;
