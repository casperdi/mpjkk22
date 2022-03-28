import {Navigate} from 'react-router-dom';

const logout = () => {
  localStorage.clear();
  return <Navigate to="/" />;
};

export default logout;
