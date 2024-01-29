/*
These are the major project samples that are completed by me during schooling
*/

import ProjectItem from '../../components/project-item';
import './Projects.css';

export function Project() {
  const projects = [
    {
      img: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Management System',
      description: 'Created using PHP and MySQL, this was a school management system that helped the students to view the attendance, lectures and scores.',
    },
    {
      img: 'https://colorlib.com/wp/wp-content/uploads/sites/2/thecharity-free-template-353x278.jpg',
      title: 'Landing Site for NGO',
      description: 'A website was created for the NGO located in Nepal which showcased their works and infromation.',
    },
    {
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Project 3',
      description: 'This is third Project submission my me',
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
