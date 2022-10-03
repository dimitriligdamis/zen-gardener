import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import LoginPage from '../Views/LoginPage';
import Homepage from '../Views/Homepage';

import './styles.css';

import RegisterPage from '../Views/RegisterPage';
import Page from '../Page';
import Dashboard from '../Views/Dashboard';
import Fiches from '../Views/Fiches';
import Profile from '../Views/Profile';
import PageNotFound from '../Views/PageNotFound';
import { actionSendCookie } from '../../redux/session/sessionActions';

// == Composant
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionSendCookie());
  }, []);

  return (
    <div className="App">
      <Page>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cgu" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tableau-de-bord" element={<Dashboard />} />
          <Route path="/fiches" element={<Fiches />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Page>
    </div>

  );
}

// == Export
export default App;
