import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Social from './Social';

chai.use(chaiEnzyme());

describe('<Social />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof Social === 'function').to.be.true;
  });

});
