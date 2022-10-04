import React from 'react';
import Statistic from 'components/WidgetThird/Statistic';
import NotificationMessage from './NotificationMessage';

class WidgetFour extends React.Component {
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
          <p>Шаг 4</p>
          <h1 className="widget__title">Please leave feedback</h1>
          <button
            type="button"
            className="widget__button"
            onClick={this.handleClickGood}
          >
            Good
          </button>
          <button
            type="button"
            className="widget__button"
            onClick={this.handleClickNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className="widget__button"
            onClick={this.handleClickBad}
          >
            Bad
          </button>
          <h2 className="widget__subTitle">Statistics</h2>
          {this.state.total > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.feedBack.toFixed(1)}
            />
          ) : (
            <NotificationMessage />
          )}
        </div>
      </section>
    );
  }
}
export default WidgetFour;
