import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './LoginStyle.css';
import InputField from '../../components/InputF/InputF';

const Login = ({ control, onLoginSubmit, showPassword, onShowPassword }) => {
  return (
    <>
      <div className="container">
        <div className="div-login">
          <div>
            <h2 className="title-box">Bem Vindo(a)</h2>
          </div>
          <div className="login-input">
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
          </div>
          <Button type="submit" id="button-login-submit" onClick={onLoginSubmit}>
            Entrar
          </Button>
          <nav>
            <Link id="link-create-account" to={'/createaccount'}>
              Criar Contar
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Login;
