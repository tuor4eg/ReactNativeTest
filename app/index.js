/**
 * Main application module
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import QuestionsListScreen from './src/QuestionsListScreen';
import AuthScreen from './src/AuthScreen';
import QuestionScreen from './src/QuestionScreen';

import styles from './src/styles';

const TabNavigator = createBottomTabNavigator(
  {
    List: {
      screen: QuestionsListScreen,
      navigationOptions: {
        headerShown: false,
        tabBarLabel: 'Список вопросов',
      },
    },
    Quit: {
      screen: AuthScreen,
      navigationOptions: {
        tabBarVisible: false,
        tabBarLabel: 'Выход',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
      tabStyle: styles.tab,
      labelStyle: styles.font,
    },
  },
);

const WrapperStack = createStackNavigator(
  {
    Auth: {
      screen: AuthScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Tabs: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false,
      },
    },
    Question: QuestionScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: styles.title,
    },
  },
);

export default createAppContainer(WrapperStack);
