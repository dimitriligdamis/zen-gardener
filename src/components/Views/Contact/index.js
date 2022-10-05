import { useForm } from 'react-hook-form';

import SubmitButton from '../../Form/SubmitButton';

import './styles.scss';

function Conntact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // window.location = 'mailto:yourmail@domain.com';
  };

  return (
    <section className="Contact">
      <form className="Contact__form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="Contact__title">Besoin d'aide ?</h1>
        <div className="Contact__field">
          <label className="Contact__label" htmlFor="inputEmail">
            <p className="Contact__body">Veuillez renseiger votre adresse mail ici</p>
            <input type="email" {...register('inputEmail', { required: true })} className="Contact__input" id="inputEmail" placeholder="example@example.com" />
            {errors.inputDetails && <span role="alert">Ce champs ne peut être vide</span>}
          </label>
        </div>
        <div className="Contact__field">
          <label className="Contact__label" htmlFor="inputSubject">
            <p className="Contact__body">Sur quel sujet avez vous besoin d'aide ?</p>
            <select {...register('inputSubject', { required: true })} id="inputSubject" className="Contact__select" defaultValue="default">
              <option value="" disabled>Choississez un sujet</option>
              <option value="grapefruit">Pamplemousse</option>
              <option value="lime">Citron vert</option>
              <option value="coconut">Noix de coco</option>
              <option value="mango">Mangue</option>
            </select>
            {errors.inputSubject && <span role="alert">Veuillez selectionez un sujet</span>}
          </label>
        </div>
        <div className="Contact__field">
          <label className="Contact__label" htmlFor="inputDetails">
            <p className="Contact__body">Mettez ci-dessous les détails de votre demande</p>
            <textarea {...register('inputDetails', { required: true })} className="Contact__textarea" id="inputDetails" placeholder="Merci de renseigner le maximum d'information que possible..." />
            {errors.inputDetails && <span role="alert">Ce champs ne peut être vide</span>}
          </label>
        </div>
        <SubmitButton className="Contact__submit" label="Envoyer votre demande" />
      </form>
    </section>
  );
}

export default Conntact;
