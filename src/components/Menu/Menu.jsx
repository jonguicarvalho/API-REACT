import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      <Link to="/">Init</Link>
      <Link to="/createaccount">Create Ac</Link>
      <Link to="/login"> Login</Link>
      <Link to="/home"> Home</Link>
    </nav>
  );
};
