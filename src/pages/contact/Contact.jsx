import './Contact.css';
import { useNavigate } from 'react-router-dom';

export function Contact() {
  const navigate = useNavigate();

  function handleSubmit() {
    // Redirect user to the home page
    navigate('/');
  }

  return (
    <div className='contact-container'>
      <div className='contact__details'>
        <h2>Contact Me</h2>
        <h3>Phone: +14374777265</h3>
        <h3>Email: gautamkhatri4199@gmail.com</h3>
      </div>
      <form className='contact__form'>
        <label htmlFor='first-name'>First Name</label>
        <input type='text' id='first-name' name='first-name' />
        <label htmlFor='last-name'>Last Name</label>
        <input type='text' id='last-name' name='last-name' />
        <label htmlFor='contact-number'>Contact Number</label>
        <input type='text' id='contact-number' name='contact-number' />
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
        <label htmlFor='message'>Message</label>
        <input type='text' id='message' name='message' />

        <button className='form-submit' onClick={handleSubmit}>
          Sumit
        </button>
      </form>
    </div>
  );
}
