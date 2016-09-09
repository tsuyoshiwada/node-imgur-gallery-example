/* eslint-disable */
import autobind from "autobind-decorator";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as ItemActions from "../actions/items";


@connect(state => state)
@autobind
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(ItemActions.fetchItemsRequest());
  }

  handleClick() {
    const { files } = this.refs.file;
    if (!files) return;

    const [file] = files;
    if (!file) return;

    this.props.dispatch(ItemActions.addItemRequest(file));
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
