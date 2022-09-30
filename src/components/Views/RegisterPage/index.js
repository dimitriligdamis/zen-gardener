import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { actionRegister } from '../../../redux/session/sessionActions';
import Input from '../../Form/Input';
import SubmitButton from '../../Form/SubmitButton';
import './style.scss';

function RegisterPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { userIsLoggedIn } = useSelector((state) => state.session);

  const onSubmit = (data) => {
    dispatch(actionRegister(data));
  };

  if (userIsLoggedIn) {
    return (<Navigate to="/tableau-de-bord" />);
  }

  return (
    <main className="Register">
      <section className="Register__container">

        <h1 className="Register__title">Inscription</h1>
        <form className="Register__form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            type="email"
            placeholder="Email*"
            aria-label="Email"
            required
            register={register}
          />
          <Input
            name="pseudo"
            type="text"
            placeholder="Pseudo*"
            aria-label="Pseudo"
            required
            register={register}
          />
          <Input
            name="password"
            type="password"
            placeholder="Mot de passe*"
            aria-label="Mot de passe"
            required
            register={register}
          />
          <Input
            name="passwordConfirm"
            type="password"
            placeholder="Confirmer mot de passe*"
            aria-label="Confirmer mot de passe"
            required
            register={register}
          />
          <Input
            label="Adresse"
            name="adress"
            type="text"
            placeholder="Adresse"
            aria-label="Adresse"
            register={register}
          />
          <Input
            label="Ville"
            name="city"
            type="text"
            placeholder="Ville"
            aria-label="Ville"
            register={register}
          />
          <Input
            label="Code Postal"
            name="postalCode"
            type="text"
            placeholder="Code Postal"
            aria-label="Code postal"
            register={register}
          />
          <Input
            label="Téléphone"
            name="phoneNumber"
            type="text"
            placeholder="Téléphone"
            aria-label="Téléphone"
            register={register}
          />
          <SubmitButton
            label="Accepter les CGU et valider"
            className="button"
          />
        </form>
        <div className="links_container">
          <Link to="/login" className="Register__login">Déjà inscrit ?</Link>
        </div>
      </section>
    </main>
  );
}

export default RegisterPage;
