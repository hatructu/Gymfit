/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Register from '@register/Register'
import tabScreen from './src/component/TabManager'
import Login from './src/component/Login'


AppRegistry.registerComponent(appName, () => tabScreen);

// AppRegistry.registerComponent(appName, () => Login);
