import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({ urlToImage, url, title, description, source }) => (
  <div className='col s12 m6 l4'>
    <div className='card'>
      <div className='card-image'>
        <img src={urlToImage} alt={title} title={title} />
        <span className='card-title'>{source.name}</span>
      </div>
      <div className='card-content'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className='card-action'>
        <a
          href={url}
          rel='noopener noreferrer'
          target='_blank'
          className='waves-effect waves-light btn'
        >
          Ver noticia completa
        </a>
      </div>
    </div>
  </div>
);

Noticia.propTypes = {
  urlToImage: PropTypes.string,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired
};

export default Noticia;
