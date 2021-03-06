import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import createStore from 'redux/create';
import index from './index';

describe('<index />', () => {
  let component;
  beforeEach(() => {
    const store = createStore({}, {}, {});
    component = mount(
      <Provider store={store}>
        {}
        <index />
      </Provider>
    );
  });

  it('should render', () => {
    expect(component.exists()).to.be.true;
  });
});
