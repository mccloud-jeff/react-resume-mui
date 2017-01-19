import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Job from './Job';

chai.use(chaiEnzyme());

describe('<Job />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof Job === 'function').to.be.true;
  });

});
