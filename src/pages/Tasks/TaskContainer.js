import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Task from './Task';
import { useCallback, useEffect } from 'react';
import { tasks } from '../../processes/list';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks, getIdTask } from '../../store/entities/tasks';
import { remove, update } from '../../processes/create';

const TaskContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const task_id = useSelector((state) => getIdTask(state, id));
  const taskList = useSelector((state) => getAllTasks(state));
  useEffect(() => {
    if (taskList.length === 0) {
      dispatch(tasks(id));
    }
  }, [dispatch, id, taskList]);

  console.log(task_id);

  const onCreateNewTask = () => {
    navigate(`/createtask/${id}`);
  };

  const onBackToLists = useCallback(() => {
    navigate(`/home`);
  }, [navigate]);

  return <Task taskList={taskList} onCreateNewTask={onCreateNewTask} onBackToLists={onBackToLists} />;
};
export default TaskContainer;
