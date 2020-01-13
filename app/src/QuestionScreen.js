/**
 * Question's screen
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {getQuestion} from './actions/questions';

import styles from './styles';

class QuestionScreen extends Component {
  /**
   * Screen for chosen question
   */
  static navigationOptions = () => {
    /**
     * Header options: set title
     */
    return {
      headerTitle: 'Вопрос',
    };
  };

  state = {
    loading: true,
  };

  componentDidMount() {
    this.loadQuestion();
  }

  loadQuestion = async () => {
    /**
     * Request selected question from server to storage by url
     */
    const {navigation, getQuestionData} = this.props;
    const url = navigation.getParam('url');
    try {
      this.setState({loading: true});
      await getQuestionData(url);
    } catch (err) {
      console.log(err);
    }
    this.setState({loading: false});
  };

  renderAnswer = ({item}) => {
    const {answer, number} = item;

    return (
      <TouchableOpacity
        style={[styles.title, styles.taskButton, styles.wrappedTaskButton]}>
        <Text style={styles.font}>{`${number}. ${answer}`}</Text>
      </TouchableOpacity>
    );
  };

  renderQuestion() {
    const {question} = this.props;

    return (
      <View style={styles.centered}>
        <Text style={styles.font}>{question.question}</Text>
        <View style={styles.flatlist}>
          <FlatList
            data={question.answers.sort((a, b) => a.number - b.number)}
            renderItem={this.renderAnswer}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }

  render() {
    const {loading} = this.state;
    if (!loading) {
      return <View style={styles.wrapper}>{this.renderQuestion()}</View>;
    }
    return (
      <View style={styles.wrapper}>
        <Text>Загрузка...</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  question: state.questions.question,
});

const mapDispatchToProps = {
  getQuestionData: getQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);
