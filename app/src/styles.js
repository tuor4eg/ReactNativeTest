/**
 * Application's styles
 * https://github.com/tuor4eg/
 *
 * @format
 * @flow
 */

import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#8eedec',
  secondary: '#edd98e',
  elements: 'black',
  background: 'white',
  taskInProgress: 'blue',
  taskDone: 'green',
  taskFailed: 'red',
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  authScreen: {
    justifyContent: 'center',
  },
  mainScreen: {
    justifyContent: 'flex-start',
  },
  title: {
    backgroundColor: colors.primary,
    borderColor: colors.elements,
    borderWidth: 2,
  },
  tab: {
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 18,
    textAlign: 'center',
  },
  taskButton: {
    width: 350,
    margin: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
  },
  answer: {
    width: 350,
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 30,
  },
  wrappedTaskButton: {
    height: 75,
  },
  flatlist: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  digitView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  digit: {
    height: 50,
    position: 'relative',
    backfaceVisibility: 'hidden',
  },
  number: {
    flex: 1,
    width: 50,
  },
  numberBack: {
    position: 'absolute',
  },
});

export default styles;
