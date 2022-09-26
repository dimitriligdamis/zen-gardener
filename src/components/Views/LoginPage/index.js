/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../Form/Input';
import SubmitButton from '../../Form/SubmitButton';

import './style.scss';

function LoginPage() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.input);

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(Login(email, password));
  };

  return (
    <section className="login_container">
      {/* Importer logo */}
      <span className="logo">LOGO</span>
      <h1 className="login_title">Connexion</h1>
      <form className="login_form" onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
        />
        <Input
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
        <p>Se connecter</p>
      </div>
    </section>
  );
}

export default LoginPage;
