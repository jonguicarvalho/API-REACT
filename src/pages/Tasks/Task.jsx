import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './styles.css';
import { useDispatch } from 'react-redux';
import { remove, update } from '../../processes/create';
import Input from '../../components/Input/Input';

const Task = ({ taskList, onCreateNewTask, onBackToLists, onCheck }) => {
  const dispatch = useDispatch();

  return (
    <div className="home-container">
      <h1>Tarefas</h1>
      <Button id="button-back-list" onClick={onBackToLists}>
        Voltar
      </Button>
      <ul>
        {taskList.map((task) => (
          <li key={task.id} className="list-tasks">
            <Link to={`/updatetask/${task.id}`} className="task-link">
              {task.task}
            </Link>
            <Button
              id="button-delete-task"
              onClick={() => {
                dispatch(remove(task.id));
              }}
            >
              X
            </Button>
          </li>
        ))}
      </ul>
      <Button onClick={onCreateNewTask} id="button-create-task">
        Criar Nova Tarefa
      </Button>
    </div>
  );
};

export default Task;
