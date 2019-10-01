const api = {
  userNativeLang: () => {
    return fetch('api/v1/users/native-lang/1').then(res => res.json());
  },
  fakeMessages: [
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
};

export default api;
