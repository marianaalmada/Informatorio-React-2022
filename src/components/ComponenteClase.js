import React, { Component } from 'react';

class ComponenteClase extends Component {

    state = {
        
    }

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

/*Estados: 
* Para guardar info en el estado se usa setState permite cambiar cualquier atributo del estado del componente 
* MEdiante un constructor se puede pasar el estado incial */