import {
  Edit,
  // Framer, Mail, Map, MapPin, Phone, Tag,
} from 'react-feather';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './styles.scss';

const info = {
  pseudo: 'Jéan Ver', email: 'Jean.ver@bonduel.fr', address: "8 rue de l'aubergine", zip_code: '87520', city: 'Le-potager', phone: '0800201010', task_notification: true, week_notification: true,
};

const {
  pseudo, address, city, zip_code, phone, email, task_notification, week_notification,
} = info;

function Profile() {
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <main className="Profile">
      <Link className="Profile__logo" to="/tableaux">Logo</Link>
      <h1 className="Profile__title">Page de profil de: {pseudo}</h1>
      <section className="Profile__infos-container">
        <h3 className="Profile__my-infos">Mes infos</h3>
        <Edit
          className="Profile__edit"
        />
        <form onSubmit={onSubmit}>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="pseudo">Pseudo</label>
            <input value={pseudo} className="Profile__input" id="pseudo" {...register('pseudo')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="address">Adresse</label>
            <input value={address} className="Profile__input" id="address" {...register('address')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="city">Ville</label>
            <input value={city} className="Profile__input" id="city" {...register('city')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="zip_code">Code postal</label>
            <input value={zip_code} className="Profile__input" id="zip_code" {...register('zip_code')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="phone">Téléphone</label>
            <input value={phone} className="Profile__input" id="phone" {...register('phone')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="email">Mail</label>
            <input value={email} className="Profile__input" id="email" {...register('email')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="task_notification">Envoyez moi un email par tâches</label>
            <input checked={task_notification} type="checkbox" className="Profile__input" id="task_notification" {...register('task_notification')} />
          </article>
          <article className="Profile__item">
            <label className="Profile__label" htmlFor="week_notification">Envoyez moi un email par semaine</label>
            <input checked={week_notification} type="checkbox" className="Profile__input" id="week_notification" {...register('week_notification')} />
          </article>
          <button className="Profile__submit" type="submit">Valider</button>
        </form>

      </section>
    </main>
  );
}

export default Profile;
