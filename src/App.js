import React, { Component } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    category: 'general',
    noticias: []
  };

  componentDidMount() {
    this.consultarNoticias();
  }

  cambiarCategoria = e => {
    const category = e.target.value;

    this.setState({
      category
    });

    this.consultarNoticias(category);
  };

  consultarNoticias = async categoria => {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${
      categoria ? categoria : this.state.category
    }&apiKey=6c1c1dfcb4a943c7bf481bc628b80153`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
      <>
        <Header titulo='Noticias React API' />
        <div className='container white contenedor-noticias'>
          <Formulario handleChange={this.cambiarCategoria} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </>
    );
  }
}

export default App;
