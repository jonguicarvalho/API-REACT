import Button from '../../components/Button/Button';
import InputField from '../../components/InputF/InputF';
import './styles.css';

const UpdateTask = ({ control, onUpdateTask, task_id, onBackToTask, onCheck }) => {
  return (
    <div className="update-task-container">
      <h1>Página de Atualização</h1>
      <Button id="button-back-task" onClick={onBackToTask}>
        Voltar
      </Button>
      <p className="old-task">
        Tarefa atual:<b> {task_id.task} </b>
      </p>
      <p className="old-date">
        Data atual: <b>{task_id.due_date}</b>
      </p>
      <InputField name="task" control={control} placeholder="Alterar tarefa" />
      <InputField name="due_date" control={control} placeholder="Alterar data" />
      <InputField id="checkbox" name="check" type="checkbox" control={control} onClick={onCheck} />
      <label htmlFor="checkbox">Tarefa concluída</label>
      <Button id="button-update" type="submit" onClick={onUpdateTask}>
        Alterar Tarefa
      </Button>
    </div>
  );
};

export default UpdateTask;
