import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Home from './views/home';
import Login from './views/login';
import Profile from './views/profile';
import Single from './views/single';
// add to App.js after imports

const App = () => {
  return (
    // eslint-disable-next-line no-undef
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/single" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
