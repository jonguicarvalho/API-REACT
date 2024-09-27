import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateList from './CreateList';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { store_list } from '../../processes/create';
import Swal from 'sweetalert2';

const CraeteListContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
    },
  });

  const onBackToLists = useCallback(() => {
    navigate(`/home`);
  }, [navigate]);

  const onCreateNewList = useCallback(
    async (values) => {
      const resp = await dispatch(store_list(values));
      if (!resp.payload?.data) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: resp.error?.message,
        });
      }

      navigate(`/home`);
    },
    [dispatch, navigate],
  );

  return <CreateList onBackToLists={onBackToLists} control={control} onCreateNewList={handleSubmit(onCreateNewList)} />;
};

export default CraeteListContainer;
