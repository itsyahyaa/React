import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
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
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="badge bg-danger m-2"
        >
          {" "}
          Delete{" "}
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
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
  getBudgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
}

export default Counter;
