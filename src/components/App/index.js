import { Route, Routes } from 'react-router-dom';

import LoginPage from '../Views/LoginPage';
import Homepage from '../Views/Homepage';

import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Homepage />
      <Routes>
        <Route path="/" element={<h1>Hello c'est l'accueil ici !</h1>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
