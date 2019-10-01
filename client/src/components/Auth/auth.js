import api from '../../services/api';

const auth = {
  isAuthenticated: false,
  userInfo: null,
  error: null,
  authenticate(cb) {
    api
      .isAuth()
      .then(res => {
        if (res.success && res.data) {
          this.isAuthenticated = true;
          this.userInfo = res.data;
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
