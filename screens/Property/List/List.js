import React from 'react';
import PropertyList from '../../../components/Property/List';
import ScreensLayout from '../../Layout';
import { Text } from 'react-native';

class ScreensPropertyList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      properties: [
      ],
    }
  }

  componentWillMount() {
    this.loadProperties()
  }

  static navigationOptions = {
    title: 'Mayapur BnB'
  }

  loadProperties() {
    return fetch('http://192.168.1.159:8000/properties')
    .then(
      response => response.json(),
      error => console.error(error)
    )
    .then(json => this.setState({ properties: json }))
  }

  showPropertyDetails() {
    this.props.navigation.navigate('Details')
  }

  render() {
    return (
      <ScreensLayout>
        {this.state.properties ? (
          <PropertyList 
            properties={this.state.properties} 
            onPressProperty={this.showPropertyDetails.bind(this)} 
          />
        ) : null }
      </ScreensLayout>
    );
  }
}

export default ScreensPropertyList