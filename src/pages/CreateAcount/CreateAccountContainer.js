import CreateAccount from './CreateAccount';
import { useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../processes/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CreateAccountContainer = () => {
  const [{ showPassword, showConfirmPassword }, setAll] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      sobrenome: '',
      email: '',
      password: '',
      conf_password: '',
    },
  });

  const onShowPassword = useCallback(() => {
    setAll((state) => ({
      ...state,
      showPassword: !showPassword,
    }));
  }, [showPassword]);

  const onShowConfirmPassword = useCallback(() => {
    setAll((state) => ({
      ...state,
      showConfirmPassword: !showConfirmPassword,
    }));
  }, [showConfirmPassword]);

  const onCreateAccount = useCallback(
    async (values) => {
      const { nome, email, password } = values;
      const resp = await dispatch(register({ nome, email, password }));

      if (!resp.payload?.data) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: resp.error?.message,
        });
      }

      //navigate('/login', { state: { id: resp.payload.id } });
      navigate('/login');
    },
    [navigate, dispatch],
  );

  return (
    <CreateAccount
      control={control}
      onCreateAccount={handleSubmit(onCreateAccount)}
      onShowPassword={onShowPassword}
      onShowConfirmPassword={onShowConfirmPassword}
      state={(showConfirmPassword, showPassword)}
    />
  );
};

//resolver o showpassword
//tem que ve o user name no back
//tem que ver a senha para comparar elas e so enviar a senha mesmo
//ver o campo de sobrenome

export default CreateAccountContainer;
