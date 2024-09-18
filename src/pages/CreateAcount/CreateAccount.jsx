import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputF/InputF';
import './CreateAccount.css';

const CreateAccount = ({
  control,
  onSubmit,
  showPassword,
  onShowPassword,
  showConfirmPassword,
  onShowConfirmPassword,
  onCreateAccount,
}) => {
  return (
    <div className="container">
      <div className="div-g">
        <div className="input-div">
          <h2 className="title-box">Preencha com suas informações</h2>
          <InputField name="nome" control={control} type="text" placeholder="Nome" className="component-input" />
          <InputField name="email" control={control} type="text" placeholder="Email" className="component-input" />
          <InputField
            name="password"
            control={control}
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            className="component-input"
          />
          <div
            style={{
              display: 'flex',
            }}
          >
            <label
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              Mostrar
              <input
                type="checkbox"
                checked={showPassword}
                onChange={onShowPassword}
                style={{
                  marginLeft: 10,
                }}
              />
            </label>
          </div>
          <InputField
            name="conf_password"
            control={control}
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirme sua senha"
            className="component-input"
          />
          <div
            style={{
              display: 'flex',
            }}
          >
            <label
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              Mostrar
              <input
                type="checkbox"
                checked={showConfirmPassword}
                onChange={onShowConfirmPassword}
                style={{
                  marginLeft: 10,
                }}
              />
            </label>
          </div>
          <Button type={'submit'} id={'button-create-account'} onClick={onCreateAccount}>
            Enviar
          </Button>
          <nav>
            <Link to="/login" id="link-create-account">
              Login
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
