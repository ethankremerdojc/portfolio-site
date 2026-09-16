import React from 'react';
import './Card.css';

const Card = ({ children, title, footer, spacing='md', className='' }) => {
  return (
    <div className={`card card-spacing-${spacing} ${className}`}>
      {title &&
        <div className="card__header">
          <h2 className="card__title">{title}</h2>
        </div>
      }

      <div className="card__body">
        { children }
      </div>
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
