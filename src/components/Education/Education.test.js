import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Education from './Education';

chai.use(chaiEnzyme());

describe('<Education />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof Education === 'function').to.be.true;
  });

});
