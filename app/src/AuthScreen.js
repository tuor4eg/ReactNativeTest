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

import VKLogin from 'react-native-vkontakte-login';

import initAPI from './actions/api';
import getVKUser from './actions/user';

import styles from './styles';

class AuthScreen extends Component {
  /**
   * Autorization screen
   */

  state = {};

  componentDidMount() {
    const {init} = this.props;
    init();
    VKLogin.initialize(7281081);
  }

  signIn = async () => {
    try {
      const {getUser} = this.props;
      const auth = await VKLogin.login(['friends', 'photos', 'email']);
      await getUser(auth.user_id, auth.access_token);
    } catch (err) {
      console.log(err);
    }
  };

  loadQuestions = async () => {
    /**
     * Switch screen to questions list
     */
    await this.signIn();
    const {navigation} = this.props;
    navigation.navigate('List');
  };

  render() {
    return (
      <View style={[styles.wrapper, styles.authScreen]}>
        <TouchableOpacity
          style={[styles.title, styles.taskButton, styles.wrappedTaskButton]}
          onPress={this.loadQuestions}>
          <Text style={styles.font}>Войти через Vkontakte</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});

const mapDispatchToProps = {
  init: initAPI,
  getUser: getVKUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
