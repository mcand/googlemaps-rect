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
        ReactDOM.render(<Geolocation />, div);
    });
});

describe("When I type an invalid website", ()=>{
    const geoLocation = shallow(<Geolocation />);
    const urlInput = geoLocation.find("#url");
    const locateButton = geoLocation.find('#locate').at(0);
    it('renders an Alert', () => {
        urlInput.simulate('change', {target: {value: "andre"}});
        locateButton.simulate('click');
        let alert = geoLocation.find(AlertInstance);
        expect(alert.prop('hasError')).toBe(true);
    });
});

describe("When I type a correct website", ()=>{
    const geoLocation = shallow(<Geolocation />);
    const urlInput = geoLocation.find("#url");
    const locateButton = geoLocation.find('#locate').at(0);
    it('does not render an Alert', () =>{
        urlInput.simulate('change', {target: {value: "http://www.uol.com.br"}});
        locateButton.simulate('click');
        let alert = geoLocation.find(AlertInstance);
        expect(alert.prop('hasError')).toBe(false);
    });

    it('renders a map with the right location from the server', () => {
        urlInput.simulate('change', {target: {value: "http://www.andre.com"}});
        locateButton.simulate('click');
        const myFancyMap = geoLocation.find(MyFancyMap);
        expect(myFancyMap.prop('latitude')).toBeDefined;
    });
});
