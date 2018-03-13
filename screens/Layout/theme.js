import { DefaultTheme } from 'react-native-paper'
import { Colors } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.lightBlue900,
    accent: Colors.lightBlue300,
    background: Colors.white,
    paper: Colors.lightBlue50,
    text: Colors.black,
    listBackground: '#002f6c'
  }
}

export default theme