import ProjectItem from '../../components/project-item';
import './Projects.css';

export function Project() {
  const projects = [
    {
      img: 'https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg',
      title: 'Management System',
      description: 'Created using PHP and MySQL, this was a school management system that helped the students to view the attendance, lectures and scores.',
    },
    {
      img: 'https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg',
      title: 'Project 2',
      description: 'This is second description',
    },
    {
      img: 'https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg',
      title: 'Project 3',
      description: 'This is third description',
    },
  ];
  return (
    <div className='projects'>
      <h3>
        Here are some of the projects that I have done throughout my career.
      </h3>
      {projects.map((item) => (
        <ProjectItem
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}
