import { Route, Routes } from 'react-router-dom';

import LoginPage from '../Views/LoginPage';
import Homepage from '../Views/Homepage';

import './styles.css';

import RegisterPage from '../Views/RegisterPage';
import Page from '../Page';
import Dashboard from '../Views/Dashboard';
import Fiches from '../Views/Fiches';
import Profile from '../Views/Profile';
import PageNotFound from '../Views/PageNotFound';
import Fiche from '../Views/Fiches/Fiche';
import RequireAuth from '../AccessControl/RequireAuth';
import PersistLogin from '../AccessControl/PersistLogin';
import RequireNotAuth from '../AccessControl/RequireNotAuth';
import CGU from '../Views/CGU';
import Contact from '../Views/Contact';
import About from '../Views/About';

// == Composant
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />}>
          <Route element={<PersistLogin />}>

            {/* PUBLIC PAGES */}
            <Route path="/cgu" element={<CGU />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* NOT AUTH PAGES */}
            <Route element={<RequireNotAuth />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* AUTH PAGES */}
            <Route element={<RequireAuth />}>
              <Route path="/tableau-de-bord" element={<Dashboard />} />
              <Route path="/fiches" element={<Fiches />} />
              <Route path="/fiches/:id" element={<Fiche />} />
              <Route path="/profil" element={<Profile />} />
            </Route>

          </Route>
          {/* 404 */}
          <Route path="/*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

// == Export
export default App;
