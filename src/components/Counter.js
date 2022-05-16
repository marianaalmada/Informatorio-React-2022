import React, { Component } from 'react';

class Counter extends Component {
// -estado inicial, a partir de eventos el estado cambia
/**
 * mediante eventos se va a ir cambiando el valor del estado del componente
 */

    state = {
        valor: 0
    }

    /*se debe llamar a la función dentro del bind dentro constructor*/

    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <p>{this.state.valor}</p>
                <button>+</button>
            </div>
        )
    }
}

export default Counter

/*setState cambia el estaoo a partir de un evento.
El estado se puede pasar a un componente hijo
* mediante hooks ahora se puede controlar el estado de componentes funcionales*/