import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Home from './views/home';
import Login from './views/login';
import Profile from './views/profile';
import Single from './views/single';
import Logout from './views/logout';
import {MediaProvider} from './contexts/mediaContext';
// add to App.js after imports

const App = () => {
  return (
    // eslint-disable-next-line no-undef
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MediaProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/single" element={<Single />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </MediaProvider>
    </BrowserRouter>
  );
};

export default App;
