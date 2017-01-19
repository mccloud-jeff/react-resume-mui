import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import TechExperience from './TechExperience';

chai.use(chaiEnzyme());

describe('<TechExperience />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof TechExperience === 'function').to.be.true;
  });

});
