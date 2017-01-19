import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Paper from 'material-ui/Paper';
import Panel from './Panel';

chai.use(chaiEnzyme());

describe('<Panel />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof Panel === 'function').to.be.true;
  });
  
  it('contains one Paper component', () => {
    const wrapper = shallow(<Panel {...minProps} />);
    expect(wrapper.find(Paper)).to.have.length(1);
  });

});
