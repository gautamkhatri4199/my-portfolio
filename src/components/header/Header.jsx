import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <div className='logo'>
        <Link to='/'>
          <h1> <img src="src/assets/gk.png" alt="" />
          <a href="C:\Users\gkhat\OneDrive\Desktop\Semester 1\web app class\resources"></a>
            </h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
