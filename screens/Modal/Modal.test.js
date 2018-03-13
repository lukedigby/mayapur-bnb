import React from 'react';
import ScreensModal from './Modal';
import ScreensLayout from '../Layout';
import { Calendar } from 'react-native-calendars';

import renderer from 'react-test-renderer';

describe("ScreensModal", () => {
  let screensModal = renderer.create(<ScreensModal/>).root

  it('renders a `ScreensLayout`', () => {
    expect(screensModal.findAllByType(ScreensLayout).length).toEqual(1)
  });

  it('renders a `Calendar`', () => {
    expect(screensModal.findAllByType(Calendar).length).toEqual(1)
  });

});
