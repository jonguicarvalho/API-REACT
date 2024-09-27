import { useCallback, useEffect } from 'react';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { index } from '../../processes/list';
import { getAllLists, getIdList } from '../../store/entities/lists';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const HomeContainer = () => {
  const lists = useSelector((state) => getAllLists(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const onLogout = useCallback(async () => {
    localStorage.removeItem('token');
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuário precisa estar logado',
      });
      navigate('/login');
    } else {
      dispatch(index());
    }
  }, [navigate, dispatch, token]);

  const onCreateList = useCallback(() => {
    navigate(`/createlist`);
  }, [navigate]);

  return <Home lists={lists} onLogout={onLogout} onCreateList={onCreateList} />;
};

export default HomeContainer;

//limpar as listas do usuario passado
