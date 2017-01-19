import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Section from './Section';

chai.use(chaiEnzyme());

describe('<Section />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof Section === 'function').to.be.true;
  });

});
