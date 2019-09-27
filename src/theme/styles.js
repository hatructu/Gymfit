/**
 * App Styles
 */
import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';
import { Platform } from 'react-native';



export default {
  // Import app styles base
  appContainer: {
    backgroundColor: Colors.white,
    height: '100%',
  },
  whiteText:{
    color: Colors.white,
  },
  appContainerRegister:{
    backgroundColor:'#333542',
    flex: 1,
    alignItems: 'center',
    flexDirection:'column',
    justifyContent: 'center',
  }
}
