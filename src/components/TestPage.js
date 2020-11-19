import React from "react";
import { connect } from "react-redux";

class TestPage extends React.Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault();

    // TODO
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
          <h1>This is the test page</h1>
      </div>
    );
  }
}

export default connect()(TestPage);