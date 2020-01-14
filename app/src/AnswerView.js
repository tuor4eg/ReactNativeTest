import React from 'react';
import {Image, View, Animated, TouchableOpacity, Text} from 'react-native';

import digit0 from './assets/0.png';
import digit1 from './assets/1.png';
import digit2 from './assets/2.png';
import digit3 from './assets/3.png';
import digit4 from './assets/4.png';
import digit5 from './assets/5.png';
import digit6 from './assets/6.png';
import digit7 from './assets/7.png';
import digit8 from './assets/8.png';
import digit9 from './assets/9.png';
import closed from './assets/closed.png';

import styles from './styles';

const digits = {
  '0': digit0,
  '1': digit1,
  '2': digit2,
  '3': digit3,
  '4': digit4,
  '5': digit5,
  '6': digit6,
  '7': digit7,
  '8': digit8,
  '9': digit9,
};

class AnswerView extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
  }

  componentDidMount() {
    this.animatedValue.addListener(({value}) => {
      this.value = value;
    });
  }

  componentDidUpdate() {
    if (this.props.flip) {
      if (this.value !== 0) this.flipDigit();
    }
  }

  flipDigit() {
    /**
     * Turn digit side
     */
    if (this.value >= 90) {
      Animated.spring(this.animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(this.animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    }
  }

  render() {
    const frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    const backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
    const frontOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [1, 0],
    });
    const backOpacity = this.animatedValue.interpolate({
      inputRange: [89, 90],
      outputRange: [0, 1],
    });

    const frontAnimatedStyle = {
      transform: [{rotateX: frontInterpolate}],
    };
    const backAnimatedStyle = {
      transform: [{rotateX: backInterpolate}],
    };

    const {digit, text} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.title, styles.answer, styles.wrappedTaskButton]}
          onPress={() => this.flipDigit()}>
          <View style={styles.digitView}>
            <Animated.View
              style={[
                styles.digit,
                frontAnimatedStyle,
                {opacity: frontOpacity},
              ]}>
              <Image
                source={closed}
                resizeMode="contain"
                style={styles.number}
              />
            </Animated.View>
            <Animated.View
              style={[
                styles.digit,
                styles.numberBack,
                backAnimatedStyle,
                {opacity: backOpacity},
              ]}>
              <Image
                source={digits[String(digit)]}
                resizeMode="contain"
                style={styles.number}
              />
            </Animated.View>
            <Text style={styles.font}>{text}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AnswerView;
