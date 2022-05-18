import React, { Component } from 'react';

class Counter extends Component {
// -estado inicial, a partir de eventos el estado cambia
/**
 * mediante eventos se va a ir cambiando el valor del estado del componente
 */
    constructor(props) {
        super(props);
        this.state = {valor: 0};

        this.decrementCounter = this.decrementCounter.bind(this);
        //this.incrementCounter = this.incrementCounter.bind(this);
    }

    /*se debe llamar a la función dentro del bind dentro constructor*/

    decrementCounter() {
        this.setState({
            valor: this.state.valor - 1
        });
    }

    incrementCounter() {
        this.setState({
            valor: this.state.valor + 1
        });
    }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + 1
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.decrementCounter} >-</button>
                <p>{this.state.valor}</p>
                <button onClick={this.incrementar}>+</button>
            </div>
        )
    }
}

export default Counter

/*setState cambia el estado a partir de un evento.
El estado se puede pasar a un componente hijo
* mediante hooks ahora se puede controlar el estado de componentes funcionales*/