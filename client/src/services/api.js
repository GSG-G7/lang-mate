export const fetchData = () => fetch('/api/v1').then(res => res.json());
export const loginFun = () =>
  console.log('onClick function at the logiBtn element');
export const inputFun = () =>
  console.log('onClick function at the input element');
export default { fetchData, loginFun, inputFun };
