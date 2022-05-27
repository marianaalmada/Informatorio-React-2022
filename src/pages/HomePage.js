import React, { Component } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';

class HomePage extends Component {

    render() {
        return (
            <>
                <Header />
                <div className='card__container'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </>
        )
    }
}

export default HomePage