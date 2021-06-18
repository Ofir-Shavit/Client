import React from 'react';
import ReactDom from 'react-dom';

import myDog from './assets/dog.jpg';
import './index.css';

const App = () => {
    return (
        <div>
            <div>See my dogy!</div>
            <img alt="dog" src={myDog}/>
        </div>);
};

ReactDom.render(<App/>, document.querySelector('#root'));