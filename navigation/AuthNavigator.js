/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

/*Auth Screens*/
import SplashScreen from '../screens/auth/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ForgetScreen from '../screens/auth/ForgetScreen';

/*App Flow*/
export default TabNavigator(
  {
    Splash: {
      screen: SplashScreen,
      path: '',
    },
    Login: {
      screen: LoginScreen,
      path: "login",
    },
  },

  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Splash':
            iconName = 'home';
            break;
          case 'Login':
            iconName = 'briefcase';
        }
    return (
          <FontAwesome
            name={iconName}
            size={32}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      showLabel: true,
    },
  }
);
