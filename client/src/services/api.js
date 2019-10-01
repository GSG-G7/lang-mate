const api = {
  isAuth: () => fetch('/api/v1/is-auth').then(res => res.json()),
};

export default api;
