/* eslint-disable jsx-a11y/label-has-associated-control */
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { actionLogin } from '../../../redux/session/sessionActions';
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
    <main className="LoginPage">
      <section className="LoginPage__container">
        <h1 className="LoginPage__title">Connexion</h1>
        <form className="LoginPage__form" onSubmit={handleSubmit(onSubmit)}>

          <Input
            // label="Email"
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            register={register}
            autoComplete="off"
            required
          />
          <Input
            // label="Mot de passe"
            name="password"
            type="password"
            placeholder="Mot de passe"
            aria-label="Mot de passe"
            register={register}
            autoComplete="off"
            required
          />
          <SubmitButton
            label="Se connecter"
            className="button"
          />
        </form>
        <div className="links_container">
          <a className="LoginPage__nopassword">Mot de passe oublié ?</a>
          {/* <Link className="LoginPage__register" to="/register">S'inscrire</Link> */}
          {errorIsActive && <ErrorMessage message={message} />}
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
