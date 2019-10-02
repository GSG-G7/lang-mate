import api from './api';

const DataSource = {
  data: {
    loggedUser: {},
    users: [],
    channels: [],
  },
  subscribers: [],
  addChangeListener: handleChange => {
    if (DataSource.subscribers.indexOf(handleChange) === -1)
      DataSource.subscribers.push(handleChange);
  },
  removeChangeListener: handleChange => {
    DataSource.subscribers = DataSource.subscribers.filter(
      e => e !== handleChange
    );
  },
  onChange: () => DataSource.subscribers.forEach(fun => fun()),
};

export default DataSource;
