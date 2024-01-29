import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../header/../../assets/logo.jpg'
export function Header() {
  return (
    <header>
      <div className='logo'>
        <Link to='/'>
           <img src= {logo} alt="GK" />
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
