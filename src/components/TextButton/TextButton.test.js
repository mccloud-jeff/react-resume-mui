import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import TextButton from './TextButton';

chai.use(chaiEnzyme());

describe('<TextButton />', () => {

  const minProps = { label: 'TextButton' };

  it('exists', () => {
    expect(typeof TextButton === 'function').to.be.true;
  });

  it('contains one RaisedButton component', () => {
    const wrapper = shallow(<TextButton {...minProps} />);
    expect(wrapper.find(RaisedButton)).to.have.length(1);
  });

});
