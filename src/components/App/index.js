import { Route, Routes } from 'react-router-dom';

import LoginPage from '../Views/LoginPage';
import Homepage from '../Views/Homepage';

import './styles.css';

import RegisterPage from '../Views/RegisterPage';
import Page from '../Page';
import Tasks from '../Views/Tasks';
import Fiches from '../Views/Fiches';
import Profile from '../Views/Profile';

// == Composant
function App() {
  return (
    <div className="App">
      <Page>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cgu" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tableau-de-bord" element={<Tasks />} />
          <Route path="/fiches" element={<Fiches />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </Page>
    </div>

  );
}

// == Export
export default App;
