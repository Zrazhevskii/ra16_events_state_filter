import React from 'react';
import './ProjectList.css'

const ProjectList = ({projects}) => {
    let index = 0;

    return (
      projects.map((item) => (
        <div className='box-img' key={index++}>
           <img src={item.img} alt='' className='image'/>
        </div>
      ))
    );
};

export default ProjectList;
