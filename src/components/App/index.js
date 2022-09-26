import { Route, Routes } from 'react-router-dom';

import LoginPage from '../Views/LoginPage';
import Homepage from '../Views/Homepage';

import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
