const api = {
  userNativeLang: () => {
    return fetch('/api/v1/users/native-lang/1').then(res => res.json());
  },
  getChannelsMessages: () => {
    return fetch('/api/v1/users/channels').then(res => res.json());
  },
  getMessages: id => {
    return fetch(`/api/v1/channels/${id}`).then(res => res.json());
  },

  signUp: data => {
    return fetch('api/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json());
  },
  login: data => {
    return fetch('/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => {
      if (res.status !== 200) {
        throw Error('Check username or password ... !!');
      }
      return res.json();
    });
  },

  isAuth: () =>
    fetch('/api/v1/is-auth', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => res.json()),

  getUserInfo: username => {
    return fetch(`/api/v1/users/profile/${username}`, {
      method: 'GET',
    }).then(result => result.json());
  },
  logout: () =>
    fetch('/api/v1/logout', {
      method: 'POST',
    }),
};

export default api;
