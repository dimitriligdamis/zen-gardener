/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLogin } from '../../../redux/session/sessionActions';
import Input from '../../Form/Input';
import SubmitButton from '../../Form/SubmitButton';

import './style.scss';

function LoginPage() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.input);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionLogin(email, password));
  };

  return (
    <main className="login_container">
      {/* Importer logo */}
      <Link to="/" className="logo">LOGO</Link>
      <h1 className="login_title">Connexion</h1>
      <form className="login_form" onSubmit={handleSubmit}>
        <Input
          page="login"
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
        />
        <Input
          page="login"
          label="Mot de passe"
          name="password"
          type="password"
          placeholder="Mot de passe"
          aria-label="Mot de passe"
        />
        <SubmitButton
          label="Se connecter"
          className="button"
        />
      </form>
      <div className="links_container">
        <p>Mot de passe oublié ?</p>
        <p><Link to="/register">S'inscrire</Link></p>
      </div>
    </main>
  );
}

export default LoginPage;
