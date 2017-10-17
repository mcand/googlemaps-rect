import MyFancyMap from '../Alert';
import ReactDOM from 'react-dom';
import React from 'react';

describe("Initialization of Geolocation", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MyFancyMap />, div);
    });
});
