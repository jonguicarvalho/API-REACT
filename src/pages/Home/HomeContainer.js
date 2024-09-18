// HomeContainer.jsx
import { useCallback, useEffect } from 'react';
import Home from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { index } from '../../processes/list';
import { getAllLists } from '../../store/entities/lists';
import { getAuthState } from '../Login/authReducer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const HomeContainer = () => {
  const { loggedIn } = useSelector(getAuthState);
  const lists = useSelector((state) => getAllLists(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuário precisa estar logado',
      });
      navigate('/login');
    } else {
      dispatch(index());
    }
  }, [navigate, dispatch, loggedIn]);

  return <Home lists={lists} />;
};

export default HomeContainer;

//limpar as listas do usuario passado
//fazer mais botoes
//ver como aparecer a lista de tarefas referentes a lista
