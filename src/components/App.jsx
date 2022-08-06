import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  optionDecrement = e => {
    const optionToChange = e.target.textContent;

    this.setState(prevState => {
      return {
        [optionToChange]: (prevState[optionToChange] += 1),
      };
    });
  };

  countTotalFeedback = () => {
    const { state } = this;

    const total = Object.values(state).reduce((acc, value) => acc + value);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { state } = this;

    const total = Math.round((state.good / this.countTotalFeedback()) * 100);

    return total;
  };

  render() {
    const { state, optionDecrement } = this;
    const options = Object.keys(state);

    // console.log(state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions data={options} onButtonClick={optionDecrement} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
