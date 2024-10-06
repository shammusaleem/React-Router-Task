import React from 'react';
import CardComponent from '../components/CardComponent';
import courses from '../data/courses'; // Importing course data

const All = () => {
  return (
    <div className="card-container">  {/* Added card-container class */}
      {courses.map((course, index) => (
        <CardComponent 
          key={index} 
          title={course.title} 
          imageUrl={course.imageUrl} 
          description={course.description} 
          
        />
      ))}
    </div>
  );
};

export default All;
