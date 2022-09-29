import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionRegister } from '../../../redux/session/sessionActions';
import Input from '../../Form/Input';
import SubmitButton from '../../Form/SubmitButton';
import './style.scss';

function RegisterPage() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(actionRegister(data));
  };

  return (
    <div className="register_container">
      <div className="title_container">
        <Link to="/" className="logo">LOGO</Link>
        <h1 className="register_title">Connexion</h1>
      </div>
      <form className="register_form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email*"
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
          required
          register={register}
        />
        <Input
          label="Pseudo*"
          name="userName"
          type="text"
          placeholder="Géant Vert"
          aria-label="Pseudo"
          required
          register={register}
        />
        <Input
          label="Mot de passe*"
          name="password"
          type="password"
          placeholder=""
          aria-label="Mot de passe"
          required
          register={register}
        />
        <Input
          label="Confirmer mot de passe*"
          name="passwordConfirm"
          type="password"
          placeholder=""
          aria-label="Confirmer mot de passe"
          required
          register={register}
        />
        <Input
          label="Adresse"
          name="adress"
          type="text"
          placeholder="32 rue de l'aubergine"
          aria-label="Adresse"
          register={register}
        />
        <Input
          label="Ville"
          name="city"
          type="text"
          placeholder="Gardener City"
          aria-label="Ville"
          register={register}
        />
        <Input
          label="Code Postal"
          name="postalCode"
          type="text"
          placeholder=""
          aria-label="Code postal"
          register={register}
        />
        <Input
          label="Téléphone"
          name="phoneNumber"
          type="text"
          placeholder=""
          aria-label="Téléphone"
          register={register}
        />
        <SubmitButton
          label="Accepter les CGU et valider"
          className="button"
        />
      </form>
      <div className="links_container">
        <p><Link to="/login" className="logo">Déjà inscrit ?</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage;
