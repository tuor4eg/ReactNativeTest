/**
 * Questions list screen
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import getQuestionsList from './actions/questions.js';

import styles from './styles';

class QuestionsListScreen extends React.Component {
  /**
   * Screen for questions list
   */
  state = {
    loading: true,
  };

  componentDidMount() {
    this.loadList();
  }

  loadList = async () => {
    /**
     * Request questions list from server to storage
     */
    const {getList} = this.props;
    try {
      this.setState({loading: true});
      await getList();
    } catch (err) {
      console.log(err);
    }
    this.setState({loading: false});
  };

  renderQuestion = ({item}) => {
    const {title, url} = item;
    const {navigation} = this.props;
    if (url) {
      return (
        <TouchableOpacity
          style={[styles.title, styles.taskButton, styles.wrappedTaskButton]}
          onPress={() => navigation.navigate('Question', {url})}>
          <Text style={styles.font}>{title}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={[styles.title, styles.taskButton, styles.wrappedTaskButton]}>
        <Text style={styles.font}>{title}</Text>
      </View>
    );
  };

  renderQuestionsList() {
    const {questions} = this.props;
    return (
      <View style={styles.centered}>
        <View style={styles.flatlist}>
          <FlatList
            data={questions}
            renderItem={this.renderQuestion}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }

  render() {
    const {loading} = this.state;
    if (!loading) {
      return <View style={styles.wrapper}>{this.renderQuestionsList()}</View>;
    }
    return (
      <View style={styles.wrapper}>
        <Text>Загрузка...</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions.questions,
});

const mapDispatchToProps = {
  getList: getQuestionsList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionsListScreen);
