import './ProjectItem.css';

function ProjectItem({ img, title, description }) {
  return (
    <div className='item'>
      <img className='item__img' src={img} alt={title}></img>
      <div className='item__content'>
        <h2 className='item__title'>{title}</h2>
        <p className='item__description'>{description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
