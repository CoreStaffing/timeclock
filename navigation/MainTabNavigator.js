/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

/*App Screens*/
import HomeScreen from '../screens/HomeScreen';
import HoursScreen from '../screens/HoursScreen';
import ResourcesScreen from '../screens/ResourcesScreen';
import SettingsScreen from '../screens/SettingsScreen';


/*App Flow*/
export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Hours: {
      screen: HoursScreen,
    },
    Resources: {
      screen: ResourcesScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Hours':
            iconName = 'briefcase';
            break;
          case 'Resources':
            iconName = 'link';
            break;
          case 'Settings':
            iconName = 'cog';
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
