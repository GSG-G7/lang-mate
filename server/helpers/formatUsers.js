const distinctInterests = (interests) => {
  const foundIds = [];
  interests
    .forEach(({ id }) => (!foundIds.includes(id) ? foundIds.push(id) : null));
  return foundIds.map((id) => interests.find((e) => id === e.id));
};
exports.formatUsers = (users, langs) => users.map(({
  native_lang_id: nativeLangId,
  learning_lang_id: learningLangId,
  interests,
  password,
  ...rest
}) => ({
  ...rest,
  learningLang: langs[learningLangId - 1],
  nativeLang: langs[nativeLangId - 1],
  interests: interests ? distinctInterests(interests) : interests,
}));
