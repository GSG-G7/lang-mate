import api from '../../services/api';

const auth = {
  isAuthenticated: false,
  userInfo: null,
  error: null,
  authenticate(cb) {
    api
      .isAuth()
      .then(res => {
        if (res.isAuth && res.data) {
          const { id: userId, username: userName } = res.data.userInfo;
          const userInfo = { userId, userName };
          this.isAuthenticated = true;
          this.userInfo = userInfo;
          cb();
        } else {
          this.isAuthenticated = false;
          cb();
        }
      })
      .catch(err => {
        this.error = err;
      });
  },
  getUserInfo() {
    return this.userInfo;
  },
  setUserInfo(userInfo) {
    this.userInfo = userInfo;
  },
  logout() {
    this.isAuthenticated = false;
    this.userInfo = null;
  },
};
export default auth;
