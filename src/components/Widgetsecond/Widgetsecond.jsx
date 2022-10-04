import React from 'react';

class Widgetsecond extends React.Component {
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
          <p>Шаг 2</p>
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
          <p className="widget__text">
            Good: <span className="widget__value">{this.state.good}</span>
          </p>
          <p className="widget__text">
            Neutral: <span className="widget__value">{this.state.neutral}</span>
          </p>
          <p className="widget__text">
            Bad: <span className="widget__value">{this.state.bad}</span>
          </p>
          <p className="widget__text">
            Total: <span className="widget__value">{this.state.total}</span>
          </p>
          <p className="widget__text">
            Positive feedback:
            <span className="widget__value">
              {this.state.good === 1 ? '100.0' : this.state.feedBack.toFixed(1)}
              %
            </span>
          </p>
        </div>
      </section>
    );
  }
}
export default Widgetsecond;
