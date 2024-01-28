import './Home.css';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/about');
  }

  return (
    <div className='home'>
      <h1>Hi, Welcome to my portfolio.</h1>
      <h3>
        Providing web development services since 2017. <br />
        Need a developer for creating your site? You are at perfect place.
      </h3>
      <button onClick={handleClick}>About Me</button>
    </div>
  );
}
