import React from 'react';

const CardComponent = ({ title, imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p> {/* Added description paragraph */}
    </div>
  );
};

export default CardComponent;
