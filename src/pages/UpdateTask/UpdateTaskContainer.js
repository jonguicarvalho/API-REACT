import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove, update } from '../../processes/create';
import Swal from 'sweetalert2';
import UpdateTask from './UpdateTask';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllTasks, getIdTask } from '../../store/entities/tasks';
import { getIdList } from '../../store/entities/lists';

const UpdateTaskContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const task_id = useSelector((state) => getIdTask(state, id));

  const { control, handleSubmit } = useForm({
    defaultValues: {
      task: task_id.task,
      due_date: task_id.due_date,
    },
  });

  const onUpdateTask = useCallback(
    async (values) => {
      await dispatch(update({ formData: values, task_id: id }));
      navigate(`/tasks/${task_id.list_id}`, { state: { flag: true } });
    },
    [dispatch, id, navigate, task_id],
  );

  const onBackToTask = useCallback(() => {
    navigate(`/tasks/${task_id.list_id}`);
  }, [navigate, task_id]);

  const onCheck = useCallback(async () => {
    await dispatch(
      update({
        formData: {
          check: !task_id.check,
        },
        task_id: task_id.id,
      }),
    );
  }, [dispatch, task_id]);

  return (
    <UpdateTask
      onUpdateTask={handleSubmit(onUpdateTask)}
      control={control}
      task_id={task_id}
      onBackToTask={onBackToTask}
      onCheck={onCheck}
    />
  );
};

export default UpdateTaskContainer;
