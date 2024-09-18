import Button from '../../components/Button/Button';
import './Init.css';

const Init = ({ onLoginClick, onCreateAccountClick }) => {
  return (
    <section className="container">
      <div className="div-g">
        <Button onClick={onLoginClick} id="button-login-submit">
          Login
        </Button>
        <Button onClick={onCreateAccountClick} id="button-login-submit">
          Criar Conta
        </Button>
      </div>
    </section>
  );
};

export default Init;
