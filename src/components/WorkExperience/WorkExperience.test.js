import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import WorkExperience from './WorkExperience';

chai.use(chaiEnzyme());

describe('<WorkExperience />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof WorkExperience === 'function').to.be.true;
  });

});
