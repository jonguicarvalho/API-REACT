import './Button.css';

const Button = ({ id, type, onClick, children, style }) => (
  <button id={id} type={type} onClick={onClick} className={`${style}`}>
    {children}
  </button>
);

export default Button;
