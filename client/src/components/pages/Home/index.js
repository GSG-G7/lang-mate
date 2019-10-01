import React, { Component } from 'react';
import Input from '../../common/Input';
import Avatar from '../../common/Avatar';
import UserMenu from '../../common/UserMenu';
import People from './People';
import Messages from './Messages';
import api from '../../../services/api';
import { filter } from '../../assets/svgPaths';
import './index.css';

class Home extends Component {
  state = {
    data: {},
    search: '',
    menu: false,
    messages: [
      {
        id: 1,
        avatar:
          'https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        username: 'ammodaa',
        lastMessage: 'Hey, what happened?',
        messageTime: '19:14',
      },
      {
        id: 2,
        avatar:
          'https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        username: 'fadi',
        lastMessage: 'Hey, what happened?',
        messageTime: '19:14',
      },
    ],
    showMessages: false,
    showPeople: true,
  };

  componentDidMount() {
    api.userNativeLang().then(res => this.setState({ data: res }));
  }

  changeSearch = ({ target: { value } }) => {
    this.setState({ search: value });
  };

  showMenu = () => {
    const { menu } = this.state;
    this.setState({ menu: !menu });
  };

  handleMessage = () => {
    this.setState({ showMessages: true, showPeople: false });
  };

  handlePeople = () => {
    this.setState({ showMessages: false, showPeople: true });
  };

  render() {
    const {
      data: { data },
      search,
      menu,
      messages,
      showMessages,
      showPeople,
    } = this.state;
    return (
      <div className="main-feed">
        <header className="main-feed__header">
          <div className="main-feed__search-box">
            <Input
              type="text"
              name="search"
              className="main-feed__search"
              label="search-box"
              placeholder="Search"
              value={search}
              onChange={this.changeSearch}
              errMsg=""
            />
          </div>
          <div className="main-feed__filter">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={filter}
                fill="black"
                fillOpacity="0.54"
              />
            </svg>
          </div>
          <button
            type="button"
            className="main-feed__profile"
            onClick={this.showMenu}
          >
            <Avatar
              width="35"
              height="35"
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
              altText="user"
              className="main-feed__user"
            />
          </button>
        </header>
        {menu ? <UserMenu username="amoodaa" /> : ''}
        <section className="main-feed__options">
          <button
            type="button"
            className="main-feed__people-option"
            onClick={this.handlePeople}
          >
            people
          </button>
          <button
            type="button"
            className="main-feed__messages-option"
            onClick={this.handleMessage}
          >
            messages
          </button>
        </section>
        {showPeople && data ? <People users={data} /> : ''}
        {showMessages && Messages ? <Messages messages={messages} /> : ''}
      </div>
    );
  }
}

export default Home;
