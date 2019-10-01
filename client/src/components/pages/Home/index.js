import React, { Component } from 'react';
import Input from '../../common/Input';
import Avatar from '../../common/Avatar';
import UserMenu from '../../common/UserMenu';
import People from './People';
import api from '../../../services/api';
import { filter } from '../../assets/svgPaths';
import './index.css';

class Home extends Component {
  state = {
    data: {},
    search: '',
    menu: false,
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

  render() {
    const {
      data: { data },
      search,
      menu,
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
        {menu ? <UserMenu /> : ''}
        <section className="main-feed__options">
          <h4 className="main-feed__people-option">people</h4>
          <h4 className="main-feed__messages-option">messages</h4>
        </section>
        {data ? <People data={data} /> : ''}
        <section className="messages"></section>
      </div>
    );
  }
}

export default Home;
