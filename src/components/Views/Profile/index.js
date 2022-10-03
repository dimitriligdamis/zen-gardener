import { useEffect, useState } from 'react';
import {
  Edit,
  // Framer, Mail, Map, MapPin, Phone, Tag,
} from 'react-feather';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

function Profile() {
  const info = useSelector((state) => state.user);

  const [inputDisabled, setInputDisbled] = useState(true);

  const {
    pseudo, address, city, zip_code, phone, email, task_notification, week_notification,
  } = info;

  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
  });

  const handleClickEdit = () => {
    setInputDisbled(!inputDisabled);
  };

  useEffect(() => {
    reset({
      pseudo,
      email,
      address,
      zip_code,
      city,
      phone,
      task_notification,
      week_notification,
    });
  }, [reset]); // à chaque changement de l'élément rest ou info (A voir)

  return (
    <main className="Profile">
      <Link className="Profile__logo" to="/tableaux">Logo</Link>
      <h1 className="Profile__title">Page de profil de: {pseudo}</h1>
      <section className="Profile__infos-container">
        <h3 className="Profile__my-infos">Mes infos</h3>
        <Edit
          className="Profile__edit"
          onClick={handleClickEdit}
        />
        <form onSubmit={onSubmit}>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="pseudo">Pseudo</label>
            <input disabled={inputDisabled} className="Profile__input" id="pseudo" {...register('pseudo')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="address">Adresse</label>
            <input disabled={inputDisabled} className="Profile__input" id="address" {...register('address')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="city">Ville</label>
            <input disabled={inputDisabled} className="Profile__input" id="city" {...register('city')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="zip_code">Code postal</label>
            <input disabled={inputDisabled} className="Profile__input" id="zip_code" {...register('zip_code')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="phone">Téléphone</label>
            <input disabled={inputDisabled} className="Profile__input" id="phone" {...register('phone')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="email">Mail</label>
            <input disabled={inputDisabled} className="Profile__input" id="email" {...register('email')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="task_notification">Envoyez moi un email par tâches</label>
            <input disabled={inputDisabled} type="checkbox" className="Profile__input" id="task_notification" {...register('task_notification')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="week_notification">Envoyez moi un email par semaine</label>
            <input disabled={inputDisabled} type="checkbox" className="Profile__input" id="week_notification" {...register('week_notification')} />
          </article>
          <button disabled={inputDisabled} className="Profile__submit" type="submit">Valider</button>
        </form>

      </section>
    </main>
  );
}

export default Profile;
