import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmes: []
        };

        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount() {
        this.loadFilmes();
    }

    loadFilmes() {
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                this.setState({ filmes: data });
                console.log(data)
            });
    }


    render() {
        return (
            <div className="container">


                <div className="lista-filme">
                    {this.state.filmes.map((filme) => {
                        return (
                            <article key={filme.id} className="filme">
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt="capa" />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        );
                    })}
                </div>

            </div>
        );
    }
}

export default Home;