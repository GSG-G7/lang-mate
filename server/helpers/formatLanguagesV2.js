exports.formatLanguagesV2 = (users, langs) => users.map(({
  native_lang_id: nativeLangId,
  learning_lang_id: learningLangId,
  ...rest
}) => ({
  ...rest,
  learningLang: langs[learningLangId - 1],
  nativeLang: langs[nativeLangId - 1],
}));
