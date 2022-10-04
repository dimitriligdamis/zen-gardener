import { useForm } from 'react-hook-form';

import SubmitButton from '../../Form/SubmitButton';

import './styles.scss';

function Conntact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="Contact">
      <form className="Contact__form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="Contact__title">Besoin d'aide ?</h1>
        <div className="Contact__field">
          <label className="Contact__label" htmlFor="inputSubject">
            <p className="Contact__body">Sur quel sujet avez vous besoin d'aide ?</p>
            <select id="inputSubject" className="Contact__select" required>
              <option value="" selected>Choississez un sujet</option>
              <option value="grapefruit">Pamplemousse</option>
              <option value="lime">Citron vert</option>
              <option value="coconut">Noix de coco</option>
              <option value="mango">Mangue</option>
            </select>
          </label>
        </div>
        <div className="Contact__field">
          <label className="Contact__label" htmlFor="inputDetails">
            <p className="Contact__body">Mettez ci-dessous les détails de votre demande</p>
            <textarea className="Contact__textarea" id="inputDetails" placeholder="Merci de renseigner le maximum d'information que possible..." {...register('example')} />
          </label>
        </div>
        <SubmitButton className="Contact__submit" label="Envoyer votre demande" />
      </form>
    </section>
  );
}

export default Conntact;
