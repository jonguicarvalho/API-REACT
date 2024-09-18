import { useFetcher, useParams } from 'react-router-dom';
import Task from './Task';
import { useEffect } from 'react';
import { tasks } from '../../processes/list';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../store/entities/tasks';

const TaskContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const taskList = useSelector((state) => getAllTasks(state));
  useEffect(() => {
    dispatch(tasks(id));
  }, [dispatch, id]);
  return <Task id={id} taskList={taskList} />;
};
export default TaskContainer;
