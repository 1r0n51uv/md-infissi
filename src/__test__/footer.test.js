import React from 'react';
import ReactDOM from 'react-dom';
import Footer from "../ui_components/footer";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
