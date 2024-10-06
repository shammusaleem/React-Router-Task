import React from 'react';
import CardComponent from '../components/CardComponent';
import courses from '../data/Careercourses.jsx'; // Importing course data

const Career = () => {
  return (
    <div className="card-container">  {/* Added card-container class */}
      {courses.map((course, index) => (
        <CardComponent 
          key={index} 
          title={course.title} 
          imageUrl={course.imageUrl} 
          description={course.description} // Pass the description
        />
      ))}
    </div>
  );
};
const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '20px',
};

export default Career;

