import autobind from "autobind-decorator";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as ItemActions from "../actions/items";
import { ItemGroup } from "./";
import { ItemForm } from "../components/";

@connect(state => ({
  items: state.items
}))
@autobind
export default class App extends Component {
  static propTypes = {
    items: PropTypes.object,
    dispatch: PropTypes.func
  };

  handleAddItem(file, name) {
    this.props.dispatch(ItemActions.addItemRequest(file, name));
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        <ItemForm
          disabled={items.isAdding}
          onRequestAddItem={this.handleAddItem}
        />

        <ItemGroup />
      </div>
    );
  }
}
