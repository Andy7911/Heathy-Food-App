import React from 'react';
import renderer from 'react-test-renderer';
import testScreen from "../component/testScreen"
import App from './App';
import Enzyme, {shallow} from 'enzyme'

it('renders correctly, test using Jest', () => {

  renderer.create(<testScreen></testScreen>)
});

it('renders correctly, test using Shallow', () => {

  const wrapper = shallow(<testScreen></testScreen>);
});
