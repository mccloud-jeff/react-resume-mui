import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Block from './Block';

chai.use(chaiEnzyme());

describe('<Block />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof Block === 'function').to.be.true;
  });

});
