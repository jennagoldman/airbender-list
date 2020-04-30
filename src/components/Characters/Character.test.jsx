import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character.jsx';

describe('Character', () => {
  it('matches a snapshot', () => {

    const wrapper = shallow(<Character name="Momo" imageUrl="https://vignette.wikia.nocookie.net/avatar/images/4/43/Inquisitive_Momo.png/revision/latest?cb=20081225191217" />);
    expect(wrapper).toMatchSnapshot();
  });
});
