import { useState } from 'react';
import {
  Edit, Framer, Mail, Map, MapPin, Phone, Tag,
} from 'react-feather';
import { Link } from 'react-router-dom';
import './styles.scss';

const info = {
  pseudo: 'Jéan Ver', email: 'Jean.ver@bonduel.fr', address: "8 rue de l'aubergine", zip_code: '87520', city: 'Le-potager', phone: '0800201010', task_notification: false, week_notification: false,
};

const {
  pseudo, address, city, zip_code, phone, email, task_notification, week_notification,
} = info;

function Profile() {
  const [inputDisabled, setInputDisabled] = useState(true);

  // Value controlled input
  const [inputPseudo, setInputPseudo] = useState(pseudo);
  const [inputAddress, setInputAddress] = useState(address);
  const [inputCity, setInputCity] = useState(city);
  const [inputZipCode, setInputZipCode] = useState(zip_code);
  const [inputPhone, setInputPhone] = useState(phone);
  const [inputEmail, setInputEmail] = useState(email);

  return (
    <main className="Profile">
      <Link className="Profile__logo" to="/tableaux">Logo</Link>
      <h1 className="Profile__title">Page de profil de: {pseudo}</h1>
      <section className="Profile__infos-container">
        <h3 className="Profile__my-infos">Mes infos</h3>
        <Edit
          onClick={() => {
            setInputDisabled(!inputDisabled);
          }}
          className="Profile__edit"
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log({
              ...info,
              pseudo: inputPseudo,
              email: inputEmail,
              address: inputEmail,
              zip_code: inputZipCode,
              phone: inputPhone,
              city: inputCity,
            });
          }}
          className="Profile__form"
        >
          <ul className="Profile__infos">
            <li className="Profile__info">
              <label className="Profile__label"><Tag /><em>Pseudo:</em></label>
              <input
                onChange={(e) => {
                  setInputPseudo(e.target.value);
                }}
                type="text"
                value={inputPseudo}
                disabled={inputDisabled}
              />
            </li>
            <li className="Profile__info">
              <label className="Profile__label"><MapPin /><em>Adresse:</em></label>
              <input
                onChange={(e) => {
                  setInputAddress(e.target.value);
                }}
                type="text"
                value={inputAddress}
                disabled={inputDisabled}
              />
            </li>
            <li className="Profile__info">
              <label className="Profile__label"><Map /><em>Ville:</em></label>
              <input
                onChange={(e) => {
                  setInputCity(e.target.value);
                }}
                type="text"
                value={inputCity}
                disabled={inputDisabled}
              />
            </li>
            <li className="Profile__info">
              <label className="Profile__label"><Framer /><em>Code postal:</em></label>
              <input
                onChange={(e) => {
                  setInputZipCode(e.target.value);
                }}
                type="text"
                value={inputZipCode}
                disabled={inputDisabled}
              />
            </li>
            <li className="Profile__info">
              <label className="Profile__label"><Phone /><em>Téléphone:</em></label>
              <input
                onChange={(e) => {
                  setInputPhone(e.target.value);
                }}
                type="text"
                value={inputPhone}
                disabled={inputDisabled}
              />
            </li>
            <li className="Profile__info">
              <label className="Profile__label"><Mail /><em>Mail:</em></label>
              <input
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
                type="text"
                value={inputEmail}
                disabled={inputDisabled}
              />
            </li>
          </ul>
          <button className="Profile__submit" type="submit" disabled={inputDisabled}>Valider les modifications</button>
        </form>
      </section>
    </main>
  );
}

export default Profile;
