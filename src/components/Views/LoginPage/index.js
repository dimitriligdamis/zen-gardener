/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLogin } from '../../../redux/session/sessionActions';
import Dashboard from '../../Dashboard';
import Input from '../../Form/Input';

import SubmitButton from '../../Form/SubmitButton';

import './style.scss';

function LoginPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(actionLogin(data));
  };

  return (
    <main className="login_container">
      <Dashboard />
      {/* Importer logo */}
      <Link to="/" className="logo">LOGO</Link>
      <h1 className="login_title">Connexion</h1>
      <form className="login_form" onSubmit={handleSubmit}>

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
          register={register}
          required
        />
        <Input
          label="Mot de passe"
          name="password"
          type="password"
          placeholder="Mot de passe"
          aria-label="Mot de passe"
          register={register}
          required
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
