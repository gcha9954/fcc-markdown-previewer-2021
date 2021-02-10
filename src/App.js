import "./styles.css";
import { Component } from "react";
import marked from "marked";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      preview: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      preview: marked(event.target.value)
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Input</h2>
          <textarea name="editor" id="editor" onChange={this.handleChange}>
            {this.state.input}
          </textarea>
        </div>
        <div>
          <h2>Preview</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: this.state.preview }}
          ></div>
        </div>
      </div>
    );
  }
}
