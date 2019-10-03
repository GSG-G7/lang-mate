import api from './api';

const data = {
  loggedUser: {},
  users: [],
  channels: [],
};

const subscribers = new Set();

const DataSource = {
  addChangeListener: notfiyFn => subscribers.add(notfiyFn),
  removeChangeListener: notfiyFn => subscribers.delete(notfiyFn),
  onChange: () => subscribers.forEach(notify => notify()),
};

export default Object.freeze(DataSource);
