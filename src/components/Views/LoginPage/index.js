/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { actionLogin } from '../../../redux/session/sessionActions';
import Dashboard from '../../Dashboard';
import ErrorMessage from '../../Form/ErrorMessage';
import Input from '../../Form/Input';

import SubmitButton from '../../Form/SubmitButton';

import './style.scss';

function LoginPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { errorIsActive, message } = useSelector((state) => state.error);
  const { userIsLoggedIn } = useSelector((state) => state.session);

  const onSubmit = ({ email, password }) => {
    dispatch(actionLogin(email, password));
  };

  if (userIsLoggedIn) {
    return (<Navigate to="/tableau-de-bord" />);
  }

  return (
    <main className="login_container">
      <Dashboard />
      <Link to="/" className="logo">LOGO</Link>
      <h1 className="login_title">Connexion</h1>
      <form className="login_form" onSubmit={handleSubmit(onSubmit)}>

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
        { errorIsActive && <ErrorMessage message={message} />}
      </div>
    </main>
  );
}

export default LoginPage;
