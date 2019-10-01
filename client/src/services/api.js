const fetchData = () => fetch('/api/v1').then(res => res.json());

export default { fetchData };
