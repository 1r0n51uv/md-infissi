import React from 'react';
import ReactDOM from 'react-dom';
import Myrouter from "../logic/myrouter";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Myrouter />, div);
    ReactDOM.unmountComponentAtNode(div);
});
