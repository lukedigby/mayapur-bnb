import React from 'react';
import ScreensLayout from './Layout';
import { View } from 'glamorous-native';
import { Provider as PaperProvider } from 'react-native-paper';

import renderer from 'react-test-renderer';

describe("ScreensLayout", () => {
  let renderedScreensLayout;
  let props;
  
  const screensLayout = () => {
    if (!renderedScreensLayout) {
      renderedScreensLayout = renderer.create(
        <ScreensLayout {...props} />
      );
    }
    return renderedScreensLayout.root;
  }

  beforeEach(() => {
    props = {
      children: 'children',
    };
    renderedScreensLayout = undefined;
  });

  it('renders a PaperProvider', () => {
    expect(screensLayout().findAllByType(PaperProvider).length).toEqual(1)
  });

  it('renders a View', () => {
    expect(screensLayout().findAllByType(View).length).toEqual(1)
  });

  it('passes `children` to the rendered `View` as `children`', () => {
    const view = screensLayout().findByType(View) 
    expect(view.props.children).toBe(props.children)
  });

});
