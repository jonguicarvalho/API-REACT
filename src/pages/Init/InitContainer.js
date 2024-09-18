import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Init from './Init';

const InitContainer = () => {
  const navigate = useNavigate();

  const onLoginClick = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const onCreateAccountClick = useCallback(() => {
    navigate('/createaccount');
  }, [navigate]);

  return <Init onCreateAccountClick={onCreateAccountClick} onLoginClick={onLoginClick} />;
};

export default InitContainer;
