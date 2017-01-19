import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Photo from './Photo';

chai.use(chaiEnzyme());

describe('<Photo />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof Photo === 'function').to.be.true;
  });

});
