import { Route, Routes } from 'react-router-dom';

import ROUTES from '../../config/routes.json';

import LoginPage from '../Views/LoginPage';
import Homepage from '../Views/Homepage';

import './styles.css';

import RegisterPage from '../Views/RegisterPage';
import Page from '../Page';
import Tasks from '../Views/Tasks';
import Fiches from '../Views/Fiches';
import Profile from '../Views/Profile';
import PageNotFound from '../Views/PageNotFound';

// == Composant
function App() {
  return (
    <div className="App">
      <Page>
        <Routes>
          <Route path={ROUTES.index} element={<Homepage />} />
          <Route path={ROUTES.register} element={<RegisterPage />} />
          <Route path={ROUTES.termsOfService} element={<Homepage />} />
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path={ROUTES.dashboard} element={<Tasks />} />
          <Route path={ROUTES.sheets} element={<Fiches />} />
          <Route path={ROUTES.profile} element={<Profile />} />
          <Route path={ROUTES.catchAll} element={<PageNotFound />} />
        </Routes>
      </Page>
    </div>

  );
}

// == Export
export default App;
