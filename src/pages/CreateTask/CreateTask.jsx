import Button from '../../components/Button/Button';
import InputField from '../../components/InputF/InputF';
import './styles.css';

const CreateTask = ({ control, onCreateTask, onBackToTask }) => {
  return (
    <div className="task-container">
      <h1>Create Task</h1>
      <Button id="button-back-task" onClick={onBackToTask}>
        Voltar
      </Button>
      <InputField name="task" control={control} placeholder="Task" />
      <InputField name="due_date" control={control} placeholder="Data Limite" />
      <Button type="submit" onClick={onCreateTask}>
        Criar Tarefa
      </Button>
    </div>
  );
};

export default CreateTask;

//fazer uma check box onde tem a lista de tarefas
//usando o campo check (false/true)
