import './About.css';
import gk from '../../assets/gk.png';

export function About() {
  function handleClick() {
    window.open(
      'https://bobbyhadz.com/blog/javascript-open-link-in-new-tab-on-button-click'
    );
  }

  return (
    <div className='about'>
      <img className='self-img' src={gk} alt='gautam-khatri'></img>
      <div className='content'>
        <h2>Gautam Khatri</h2>
        <p>
          Hi, I am Gautam Khatri. I am an international student pursuing
          Post Graduate Degree in Canada. I come from the country where Mount Everest
          lies, i.e. Nepal. I have done my undergrad in Computer Science from
          one of the university in Nepal.
          <br />
          I love writing codes, solving problems, designing system and have also
          explored the digital marketing era.
          <br />
          <br />
          Currently, my interest is to work on the AI/ML and develop solutions
          with my knowledge and research.
          <br />
        </p>
        <button onClick={handleClick}>Download Resume</button>
      </div>
    </div>
  );
}
