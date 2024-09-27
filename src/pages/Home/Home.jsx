import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import Button from '../../components/Button/Button';

export const Home = ({ lists, onLogout, onCreateList }) => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Listas</h1>
      <ul className="list-list">
        {lists.map((list) => (
          <li key={list.id} className="lista">
            <Link to={`/tasks/${list.id}`} className="list-link">
              {list.title}
            </Link>
            <Button
              id="button-edit"
              onClick={() => {
                navigate(`/updatelist/${list.id}`);
              }}
            >
              Edit
            </Button>
          </li>
        ))}
      </ul>
      <div className="div-button">
        <Button onClick={onLogout} id="button-logout">
          Logout
        </Button>
        <Button id="button-create-list" onClick={onCreateList}>
          Create New List
        </Button>
      </div>
    </div>
  );
};

export default Home;
