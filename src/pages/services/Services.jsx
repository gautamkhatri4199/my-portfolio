import ServiceItem from '../../components/service-item';
import './Services.css';

export function Services() {
  const serviceList = [
    {
      img: 'https://www.volumetree.com/wp-content/uploads/2019/11/App-development-process-Feature-image.jpg',
      title: 'Mobile App Development',
      description:
        'Creating mobile application using technologies like Java, React Native and Ionic',
    },
    {
      img: 'https://appinventiv.com/wp-content/uploads/sites/1/2017/10/Ways-in-Which-Web-Application-Development-is-Changing.png',
      title: 'Web Development',
      description:
        'Developing web projects using HTML, CSS, JS, Java, React, Node and Python',
    },
    {
      img: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*u4EBes6Muu2fy7iM8igMug.jpeg',
      title: 'Project Management',
      description:
        'Experienced in managing small and medium scale projects using JIRA and confluence, task breakdown and effective execution',
    },
  ];
  return (
    <div className='services'>
      <h2>
        I have been providing various tech related services to different
        clients. Here are some of the services that I provide.
      </h2>
      <div className='service-list'>
        {serviceList.map((service) => (
          <ServiceItem
            img={service.img}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
