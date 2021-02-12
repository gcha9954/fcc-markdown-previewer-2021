import "./styles.css";
import { Component } from "react";
import DOMPurify from "dompurify";
import marked from "marked";
marked.setOptions({
  gfm: true,
  breaks: true,
  sanitize: true
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.input =
      "# H1\n\n## H2\n\n[link](http://github.com)\n\n`inline code`\n\n```\ncode block\n```\n\n* list item\n\n> block quote\n\n![image](/images/image.png)\n\n**bolded text**";
    this.state.preview = marked(this.state.input);
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
      <>
        <header>
          <h1 id="title">Markdown Previewer</h1>
          <a href="#">GitHub</a>
        </header>
        <div className="container">
          <div className="subcontainer">
            <h2>Input</h2>
            <textarea name="editor" id="editor" onChange={this.handleChange}>
              {this.state.input}
            </textarea>
          </div>
          <div className="subcontainer">
            <h2>Preview</h2>
            <div
              id="preview"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(this.state.preview)
              }}
            ></div>
          </div>
        </div>
      </>
    );
  }
}
