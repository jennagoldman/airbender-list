import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters.jsx';

describe('Characters', () => {
  it('matches a snapshot', () => {
    const characters = [{
      id: '1',
      name: 'Momo',
      imageUrl: 'https://vignette.wikia.nocookie.net/avatar/images/4/43/Inquisitive_Momo.png/revision/latest?cb=20081225191217'
    }];
    const wrapper = shallow(<Characters characters={characters} />);
    expect(wrapper).toMatchSnapshot();
  });
});
