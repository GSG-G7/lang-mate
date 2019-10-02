const api = {
  isAuth: () =>
    fetch('/api/v1/is-auth', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(res => res.json()),

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
  getUserInfo: username => {
    return fetch(`/api/v1/users/profile/${username}`, {
      method: 'GET',
    }).then(result => result.json());
  },
};

export default api;
