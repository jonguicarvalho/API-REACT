import { Link } from 'react-router-dom';
import './Home.css';

export const Home = ({ lists }) => {
  return (
    <div className="home-container">
      <h1>Listas</h1>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <Link to={`/tasks/${list.id}`} className="list-link">
              {list.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
