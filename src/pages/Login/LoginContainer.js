import { useForm } from 'react-hook-form';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../processes/auth';
import Swal from 'sweetalert2';
import { getAuthState } from './authReducer';

const LoginContainer = () => {
  const { loading } = useSelector(getAuthState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [setShowPassword, showPassword]);

  const onLoginSubmit = useCallback(
    async (values) => {
      const resp = await dispatch(login(values));
      if (!resp.payload?.data) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: resp.error?.message,
        });
      }

      navigate('/home');
    },
    [navigate, dispatch],
  );

  return (
    <Login
      control={control}
      onShowPassword={onShowPassword}
      onLoginSubmit={handleSubmit(onLoginSubmit)}
      showPassword={showPassword}
    />
  );
};

export default LoginContainer;
