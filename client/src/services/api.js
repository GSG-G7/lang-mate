const api = {
  userNativeLang: () => {
    return fetch('api/v1/users/native-lang/1').then(res => res.json());
  },
  getChannelsMessages: () => {
    return fetch('api/v1/channels/1').then(res => res.json());
  },
};

export default api;
