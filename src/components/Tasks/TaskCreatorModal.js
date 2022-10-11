import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

function TaskCreatorModal({ visible }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (
    <div>
      <button type="button" className="close-button" onClick={() => setAddTaskModalIsVisible(false)}>x</button>
      <form action="">
        <label htmlFor="taskLabel">
          <span>Nom de la tâche</span>
          <input
            id="taskLabel"
            name="taskLabel"
            type="text"
            {...register(
              'taskLabel',
              { required: true },
            )}
          />
          {errors.taskLabel && <span className="error">Veuillez taper 3 caractères minimum</span>}
        </label>

        <label htmlFor="taskBegin">
          <span>Date de début</span>
          <input
            id="taskBegin"
            name="taskBegin"
            type="text"
            {...register(
              'taskBegin',
              {
                required: true,
                validation: (value) => {
                  console.log(value);
                  return false;
                },
              },
            )}
          />
          {errors.taskBegin && <span className="error">La date de début doit être antérieure à la date de fin</span>}
        </label>

        <label htmlFor="taskEnd">
          <span>Date de fin</span>
          <input
            id="taskEnd"
            name="taskEnd"
            type="date"
            min={getValues('taskBegin')}
            {...register(
              'taskEnd',
              { required: true },
            )}
          />
        </label>

        <button type="button" onClick={() => handleSubmit()}>Ajouter</button>
      </form>
    </div>
  );
}

TaskCreatorModal.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default TaskCreatorModal;
