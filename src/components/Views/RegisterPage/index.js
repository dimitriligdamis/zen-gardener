import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionRegister } from '../../../redux/session/sessionActions';
import Input from '../../Form/Input';
import SubmitButton from '../../Form/SubmitButton';
import './style.scss';

function RegisterPage() {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.input.register);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actionRegister(inputs));
  }

  return (
    <main className="page">
      {/* Importer logo */}
      <Link to="/" className="logo">LOGO</Link>
      <h1 className="login_title">Connexion</h1>
      <form className="login_form" onSubmit={handleSubmit}>
        <Input
          page="register"
          label="Email*"
          name="email"
          type="email"
          placeholder="Email"
          aria-label="Email"
          required
        />
        <Input
          page="register"
          label="Pseudo*"
          name="userName"
          type="text"
          placeholder="Géant Vert"
          aria-label="Pseudo"
          required
        />
        <Input
          page="register"
          label="Mot de passe*"
          name="password"
          type="password"
          placeholder=""
          aria-label="Mot de passe"
          required
        />
        <Input
          page="register"
          label="Confirmer mot de passe*"
          name="passwordConfirm"
          type="password"
          placeholder=""
          aria-label="Confirmer mot de passe"
          required
        />
        <Input
          page="register"
          label="Adresse"
          name="adress"
          type="text"
          placeholder="32 rue de l'aubergine"
          aria-label="Adresse"
        />
        <Input
          page="register"
          label="Ville"
          name="city"
          type="text"
          placeholder="Gardener City"
          aria-label="Ville"
        />
        <Input
          page="register"
          label="Code Postal"
          name="postalCode"
          type="text"
          placeholder=""
          aria-label="Code postal"
        />
        <Input
          page="register"
          label="Téléphone"
          name="phoneNumber"
          type="text"
          placeholder=""
          aria-label="Téléphone"
        />
        <SubmitButton
          label="Accepter les CGU et valider"
          className="button"
        />
      </form>
      <div className="links_container">
        <p><Link to="/login" className="logo">Déjà inscrit ?</Link></p>
      </div>
    </main>
  );
}

export default RegisterPage;
