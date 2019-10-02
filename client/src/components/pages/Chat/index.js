import React, { Component } from 'react';
import Input from '../../common/Input';
import Avatar from '../../common/Avatar';
import BackButton from '../../common/BackButton';
import Button from '../../common/Button';

import './index.css';

class Chat extends Component {
  state = {
    message: '',
    messages: [],
  };

  handelChange = ({ target: { value } }) => {
    this.setState({ message: value });
  };

  handelClick = () => {
    const { message, messages } = this.state;
    messages.push(message);
  };

  render() {
    const { messages, message } = this.state;
    const {
      history: { goBack },
    } = this.props;
    return (
      <div className="chat">
        <header className="chat__header">
          <div className="chat__back">
            <BackButton back={goBack} />
          </div>
          <div className="chat__user">
            <Avatar
              src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              width="25"
              height="25"
              altText="chat user"
              className="chat__avatar"
            />
            <h4 className="chat__username">Fadi</h4>
          </div>
        </header>
        <div className="chat__body"></div>
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
