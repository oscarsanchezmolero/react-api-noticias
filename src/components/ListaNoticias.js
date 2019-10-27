import React from 'react';
import PropTypes from 'prop-types';
import Noticia from './Noticia';

const ListaNoticias = ({ noticias }) => (
  <div className='row'>
    {noticias.map(({ urlToImage, url, title, description, source }) => (
      <Noticia
        key={url}
        urlToImage={urlToImage}
        url={url}
        title={title}
        description={description}
        source={source}
      />
    ))}
  </div>
);

ListaNoticias.propTypes = {
  noticias: PropTypes.array.isRequired
};

export default ListaNoticias;
