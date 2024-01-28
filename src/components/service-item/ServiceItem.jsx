import './ServiceItem.css';

function ServiceItem({ img, title, description }) {
  return (
    <div className='service-container'>
      <img className='service__img' src={img} alt={title} />
      <div className='service-content'>
        <div className='service__title'>{title}</div>
        <div className='service__description'>{description}</div>
      </div>
    </div>
  );
}

export default ServiceItem;
