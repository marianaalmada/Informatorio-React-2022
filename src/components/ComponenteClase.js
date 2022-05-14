import React, { Component } from 'react';

class ComponenteClase extends Component {

    render() {
        const { prop } = this.props;
        return (
            <div>
                <h3 className='componente__titulo'>Este es un ComponenteClase</h3>
                <p className='componente__prop'>Propiedad de este componente: {prop}</p>
            </div>
        )
    }
}

export default ComponenteClase