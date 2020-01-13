/**
 * App's auth screen
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import initAPI from './actions/api';

import styles from './styles';

class AuthScreen extends Component {
  /**
   * Autorization screen
   */

  state = {};

  componentDidMount() {
    const {init} = this.props;
    init();
  }

  loadQuestions = () => {
    /**
     * Switch screen to questions list
     */
    const {navigation} = this.props;
    navigation.navigate('List');
  };

  render() {
    return (
      <View style={[styles.wrapper, styles.authScreen]}>
        <TouchableOpacity
          style={[styles.title, styles.taskButton, styles.wrappedTaskButton]}
          onPress={this.loadQuestions}>
          <Text style={styles.font}>Войти</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  init: initAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
