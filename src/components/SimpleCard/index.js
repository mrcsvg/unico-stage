import React from 'react';

import Link from '@docusaurus/Link';


import './styles.css';


function SimpleCard({ id, icon, title, description, to }) {
  return (
    <Link to={to} className="homepage-card">
      {/* {icon && <div className="icon">{icon}</div>} */}
      <div className="card-content">
        <div className="title" id={id}>
          {title}
        </div>
        <div className="description">{description}</div>
      </div>
    </Link>
  );
}


export default SimpleCard;