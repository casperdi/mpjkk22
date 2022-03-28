import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {MediaContext} from '../contexts/mediaContext';

const logout = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(MediaContext);
  setUser(null);
  localStorage.clear();
  return <>{!user ? <Navigate to="/" /> : <div>Loading...</div>}</>;
};

export default logout;
