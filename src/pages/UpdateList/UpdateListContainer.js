import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import UpdateList from './UpdateList';
import { useForm } from 'react-hook-form';
import { remove_list, update_list } from '../../processes/create';
import { getIdList } from '../../store/entities/lists';

const UpdateListContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const list = useSelector((state) => getIdList(state, id));
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: '',
    },
  });

  const onBackToLists = useCallback(() => {
    navigate(`/home`);
  }, [navigate]);

  const onUpdateList = useCallback(
    async (values) => {
      await dispatch(update_list({ formData: values, id: id }));
      navigate(`/home`);
    },
    [dispatch, navigate, id],
  );

  const onDeleteList = useCallback(async () => {
    await dispatch(remove_list(id));
    navigate(`/home`);
  }, [navigate, dispatch, id]);

  return (
    <UpdateList
      onBackToLists={onBackToLists}
      control={control}
      onUpdateList={handleSubmit(onUpdateList)}
      onDeleteList={onDeleteList}
      list={list}
    />
  );
};

export default UpdateListContainer;

//nao enviar outra requisicao quando remover
