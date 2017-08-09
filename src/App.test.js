import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import Header from "./components/header/Header";
import {expect} from 'chai';
import Histogram from "./Histogram";
import Footer from "./components/footer/Footer";


describe('<APP/>', () => {

    it('renders without crashing', () => {

        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });

    it('renders <Header/> component', () => {
        const component = shallow(<Header/>);
        expect(component).to.have.length(1);
    });

    it('renders <Histogram/> component', () => {
         const component = shallow(<Histogram/>);
         expect(component).to.have.length(1);
    });

    it('renders <Footer/> component', () => {
        const component = shallow(<Footer/>);

        expect(component).to.have.length(1);
        expect(component.find('p').first().text()).to.equal('Developed by Rodrigo Dugin');

    });

});
