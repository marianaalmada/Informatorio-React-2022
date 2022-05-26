import React, { Component } from 'react';
import Saludo from '../components/Saludo';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {nombre: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({nombre: e.target.value});
    }

    render() {
        const estado = this.state.nombre;
        return (
            <div className='placeholder'>
                <input value={estado} onChange={this.handleChange} placeholder="Escribe tu nombre"/>
                <Saludo name={estado}/>
            </div>
        )
    }
}

export default Home