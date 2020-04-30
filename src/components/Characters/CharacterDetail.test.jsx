import React from 'react';
import { shallow } from 'enzyme';
import CharacterDetail from './CharacterDetail.jsx';

describe('CharacterDetail', () => {
  it('matches a snapshot', () => {

    const wrapper = shallow(<CharacterDetail name="Momo" photoUrl="https://vignette.wikia.nocookie.net/avatar/images/4/43/Inquisitive_Momo.png/revision/latest?cb=20081225191217" affliation="Team Aang" allies={['Aang']} enemies={['Zuko']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
