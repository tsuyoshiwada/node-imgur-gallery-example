import React from "react";
import { render } from "react-dom";
import autobind from "autobind-decorator";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  @autobind
  handleClick() {
    const { files } = this.refs.file;
    if (!files) return;

    const [file] = files;
    if (!file) return;

    const data = new FormData();
    data.append("file", file);

    fetch("/api/", {
      method: "POST",
      body: data
    })
      .then(res => res.json())
      .then(res => {
        console.log(res); // TODO
      })
      .catch(console.error); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
        <input ref="file" type="file" />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}


render(
  <App />,
  document.getElementById("app")
);
