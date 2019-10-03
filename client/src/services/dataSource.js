import api from './api';

const data = {
  loggedUser: {},
  users: [],
  channels: [],
  participants: [],
};

const subscribers = new Set();

const DataSource = {
  addChangeListener: notfiyFn => subscribers.add(notfiyFn),
  removeChangeListener: notfiyFn => subscribers.delete(notfiyFn),
  onChange: () => subscribers.forEach(notify => notify()),
  init: () => {
    Promise.all([api.userNativeLang(), api.getChannelsMessages()])
      .then(([users, { user, channels, users: participants }]) => {
        data.users = users;
        data.loggedUser = user;
        data.channels = channels;
        data.participants = participants;
      })
      .then(() => DataSource.onChange());
  },
};

export default Object.freeze(DataSource);
