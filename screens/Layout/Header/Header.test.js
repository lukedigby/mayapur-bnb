import React from 'react';
import ScreensLayoutHeader from './Header';
import { Toolbar, ToolbarContent, ToolbarBackAction } from 'react-native-paper';
import theme from '../theme'

import renderer from 'react-test-renderer';

describe("ScreensLayoutHeader", () => {
  let renderedScreensLayoutHeader;
  let props;
  
  const screensLayoutHeader = () => {
    if (!renderedScreensLayoutHeader) {
      renderedScreensLayoutHeader = renderer.create(
        <ScreensLayoutHeader {...props} />
      );
    }
    return renderedScreensLayoutHeader.root;
  }

  beforeEach(() => {
    props = {
      getScreenDetails: jest.fn().mockReturnValue({options: {title: 'Title'}}),
      scene: {isActive: true},
      navigation: { 
        state: {routes: [{}]}, 
        pop: jest.fn()
      },
    };
    renderedScreensLayoutHeader = undefined;
  });

  it('renders a Toolbar', () => {
    expect(screensLayoutHeader().findAllByType(Toolbar).length).toEqual(1)
  });

  it('passes `theme` to the rendered `Toolbar` as `theme`', () => {
    const toolbar = screensLayoutHeader().findByType(Toolbar) 
    expect(toolbar.props.theme).toBe(theme)
  });

  describe('when `navigation.state.routes` has length 0', () => {
    it("doesn't render a `ToolbarBackAction`", () => {
      expect(screensLayoutHeader().findAllByType(Toolbar)[0].findAllByType(ToolbarBackAction).length).toEqual(0)
    })  
  })
  
  describe('when `navigation.state.routes` has length greater than 1', () => {
    beforeEach(() => {
      props.navigation.state.routes = [{}, {}]
    })

    it('renders a `ToolbarBackAction`', () => {
      expect(screensLayoutHeader().findAllByType(ToolbarBackAction).length).toEqual(1)
    })

    it('passes `navigation.pop()` to `ToolbarBackAction` as `onPress`', () => {
      const toolbarBackAction = screensLayoutHeader().findByType(ToolbarBackAction)
      expect(toolbarBackAction.props.onPress()).toBe(props.navigation.pop())
    })
  })

  it('renders a `ToolbarContent`', () => {
    expect(screensLayoutHeader().findAllByType(ToolbarContent).length).toEqual(1)
  })

  it('passes `getScreenDetails(scene).options.title` to `ToolbarContent` as `title`', () => {
    const toolbarContent = screensLayoutHeader().findByType(ToolbarContent)
    expect(toolbarContent.props.title).toBe(props.getScreenDetails().options.title)
  })


});
