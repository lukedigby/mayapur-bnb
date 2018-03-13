import React from 'react';
import PropertyList from '../../../components/Property/List';
import ScreensLayout from '../../Layout';
import { Text } from 'react-native';

class ScreensPropertyList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      properties: []
    }

    this.showPropertyDetails = this.showPropertyDetails.bind(this)
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
    .then(json => json.map(p => {
      p.image = { 
        uri: p.image, 
        width: 640,
        height: 480
      }
      return p
    }))
    .then(json => this.setState({ properties: json }))
  }

  showPropertyDetails(propertyId) {
    this.props.navigation.navigate('Details', { 
      property: this.state.properties.find(p => p.id == propertyId ) 
    })
  }

  render() {
    const { properties } = this.state

    return (
      <ScreensLayout>
        {properties ? (
          <PropertyList 
            properties={properties} 
            onPressProperty={this.showPropertyDetails} 
          />
        ) : null }
      </ScreensLayout>
    );
  }
}

export default ScreensPropertyList