import Geolocation from '../Geolocation';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import FieldGroup from '../FieldGroup';
import AlertInstance from '../Alert';
import MyFancyMap from '../Map';


describe("Initialization of Geolocation", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AlertInstance />, div);
    });
});
