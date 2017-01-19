import React from 'react';
import { mount, render, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ContactInfo from './ContactInfo';

chai.use(chaiEnzyme());

describe('<ContactInfo />', () => {

  const minProps = {};

  it('exists', () => {
    expect(typeof ContactInfo === 'function').to.be.true;
  });

  it('has a "name" property that accepts a string', () => {
    const wrapper = shallow(
      <ContactInfo name="John Doe" />
    );
    expect(wrapper.find('.name').text()).to.be.equal('John Doe');
  });

  it('has an "addressLines" property that accepts an array of strings', () => {
    const addressLines = ['123 Main Street', 'Nowhere, USA'];
    const wrapper = shallow(
      <ContactInfo addressLines={addressLines} />
    );
    expect(wrapper.find('.address').text()).to.be.equal(addressLines.join(''));
  });

  it('has a "phone" property that accepts a string', () => {
    const wrapper = shallow(
      <ContactInfo phone="808-555-1212" />
    );
    expect(wrapper.find('.phone').text()).to.be.equal('808-555-1212');
  });

  it('has an "email" property that accepts a string', () => {
    const wrapper = shallow(
      <ContactInfo email="john_doe@example.com" />
    );
    expect(wrapper.find('.email').text()).to.be.equal('john_doe@example.com');
  });
});
