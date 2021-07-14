import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // tags: ["Tag1", "Tag2", "Tag3"],
  };
  render() {
    return (
      <div>
        <span className={this.getBudgeClasses()}>{this.formatCounter()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  formatCounter() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  getBudgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  handleIncrement= () => {
    this.setState({ count: this.state.count + 1})
  }
}

export default Counter;
