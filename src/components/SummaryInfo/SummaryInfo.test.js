import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import SummaryInfo from './SummaryInfo';

chai.use(chaiEnzyme());

describe('<SummaryInfo />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof SummaryInfo === 'function').to.be.true;
  });

  it('has an "lines" property that accepts an array of strings', () => {
    const lines = ['Write your tests first', 'Then write the code'];
    const wrapper = shallow(
      <SummaryInfo lines={lines} />
    );
    expect(wrapper.find('.summary').text()).to.be.equal(lines.join(''));
  });

});
