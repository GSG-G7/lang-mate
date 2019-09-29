const fetchData = () => fetch('/api/v1').then(res => res.json());
const login = () => console.log('make fetch');
export default { fetchData, login };
