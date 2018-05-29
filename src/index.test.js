import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './components/App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<App />);
    const welcome = <h1>Hello</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});
