import './styles.css';

const Task = ({ taskList }) => {
  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
