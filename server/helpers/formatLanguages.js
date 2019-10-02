exports.formatLanguages = (users, langs, prop) => {
  const allUsers = [...users];
  // Give each user his native language
  for (let i = 0; i < allUsers.length; i += 1) {
    allUsers[i][prop] = langs[i].rows;
  }
  return allUsers;
};
