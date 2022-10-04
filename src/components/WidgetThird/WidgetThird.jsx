import React from 'react';
import Statistic from './Statistic';
import FeedbackOptions from './FeedbackOptions';

class WidgetThird extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedBack: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        total: prevState.total + 1,
        feedBack: (prevState.good * 100) / prevState.total,
      };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        total: prevState.total + 1,
        feedBack: (prevState.good * 100) / prevState.total,
      };
    });
  };
  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        total: prevState.total + 1,
        feedBack: (prevState.good * 100) / prevState.total,
      };
    });
  };

  render() {
    return (
      <section className="section">
        <div className="widget__section">
          <p>Шаг 3</p>
          <h1 className="widget__title">Please leave feedback</h1>
          <FeedbackOptions
            good={this.handleClickGood}
            neutral={this.handleClickNeutral}
            bad={this.handleClickBad}
          />
          <h2 className="widget__subTitle">Statistics</h2>
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.feedBack.toFixed(1)}
          />
        </div>
      </section>
    );
  }
}
export default WidgetThird;
