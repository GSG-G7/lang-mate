const fetchData = () => fetch('/api/v1').then(res => res.json());
const loginFun = () => console.log('onClick function at the logiBtn element');
const inputFun = () => console.log('onClick function at the input element');
const messErrFun = () => console.log('err message for validation');
export default { fetchData, loginFun, inputFun, messErrFun };
