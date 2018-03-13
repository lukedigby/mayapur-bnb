import React from 'react';
import { Toolbar, ToolbarContent, ToolbarBackAction } from 'react-native-paper';
import { func, shape, object, bool } from 'prop-types'
import theme from '../theme'

ScreensLayoutHeader.propTypes = {
  getScreenDetails: func.isRequired,
  scene: shape({
    isActive: bool
  }).isRequired,
  navigation: shape({
    state: object
  }).isRequired
}

function ScreensLayoutHeader({ 
  getScreenDetails,
  scene,
  navigation
}) {
  return (
    <Toolbar theme={theme}>
      {navigation.state.routes.length > 1 && <ToolbarBackAction onPress={() => navigation.pop() } />}
      <ToolbarContent 
        title={getScreenDetails(scene).options.title} 
      />
    </Toolbar>
  );
}

export default ScreensLayoutHeader