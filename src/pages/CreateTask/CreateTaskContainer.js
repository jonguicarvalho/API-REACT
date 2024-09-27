import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import CreateTask from './CreateTask';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../processes/create';
import Swal from 'sweetalert2';
import { getIdTask } from '../../store/entities/tasks';

const CreateTaskContainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      task: '',
      due_date: '',
    },
  });

  const onCreateTask = useCallback(
    async (values) => {
      const resp = await dispatch(store({ formData: values, list_id: id }));
      if (!resp.payload?.data) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: resp.error?.message,
        });
      }

      navigate('/tasks/' + id);
    },
    [dispatch, navigate, id],
  );

  const onBackToTask = useCallback(() => {
    navigate(`/tasks/${id}`);
  }, [navigate, id]);

  return <CreateTask control={control} onCreateTask={handleSubmit(onCreateTask)} onBackToTask={onBackToTask} />;
};

export default CreateTaskContainer;
