import axios from 'axios';

const getUsers = () =>
  axios
    .get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
    .then(({ data }) => data);

export { getUsers };
