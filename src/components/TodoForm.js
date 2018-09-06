import React, { Component } from "react";
import { observer } from "mobx-react";
class TodoForm extends Component {
  state = {
    title: ""
  };
  handleTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!!this.state.title) {
      this.props.todos.add({ title: this.state.title });
      this.setState({
        title: ""
      });
    }
  };

  render() {
    return (
      <form>
        <div>
          <input
            onChange={this.handleTitle}
            placeholder="Title"
            value={this.state.title}
          />
          <button onClick={this.handleSubmit}>
            <span role="img" aria-label="add">
              ➕
            </span>
          </button>
        </div>
      </form>
    );
  }
}

export default observer(TodoForm);
