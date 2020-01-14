/**
 * Question's screen
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, FlatList, View} from 'react-native';
import {HeaderBackButton} from 'react-navigation-stack';
import {connect} from 'react-redux';

import AnswerView from './AnswerView';

import {getQuestion} from './actions/questions';

import styles from './styles';

class QuestionScreen extends Component {
  /**
   * Screen for chosen question
   */
  static navigationOptions = ({navigation}) => {
    /**
     * Header options: set title
     */
    return {
      headerTitle: 'Вопрос',
      headerLeft: () => (
        <HeaderBackButton onPress={navigation.getParam('onPressBack')} />
      ),
    };
  };

  state = {
    loading: true,
    flip: false,
  };

  componentDidMount() {
    const {navigation} = this.props;
    navigation.setParams({onPressBack: this.onPressBack});
    this.loadQuestion();
  }

  onPressBack = () => {
    /**
     * Function for waiting digits closing and redirecting back
     */
    const {navigation} = this.props;
    this.setState({flip: true});
    setTimeout(() => navigation.pop(), 500);
  };

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
    return <AnswerView digit={number} text={answer} flip={this.state.flip} />;
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
