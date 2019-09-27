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
    fontSize: Sizes.fontMedium,
    marginTop: Sizes.marginSml,
    alignItems: 'flex-end',
  },

  button:{
    width:Sizes.buttonSizeWidth,
    margin:Sizes.paddingSml,
    height:Sizes.buttonSizeBase,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.background,
    borderRadius:Sizes.paddingSml,
  },
  appContainerRegister:{
    backgroundColor:Colors.backgroundRegister,
    flex: 1,
    alignItems: 'center',
    flexDirection:'column',
    justifyContent: 'center',
  }
}
