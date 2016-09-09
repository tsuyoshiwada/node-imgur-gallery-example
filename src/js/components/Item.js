import autobind from "autobind-decorator";
import React, { Component, PropTypes } from "react";
import bem from "../helpers/bem";

const b = bem("item");

@autobind
export default class Item extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    thumbnail: PropTypes.string
  };

  render() {
    const {
      name,
      thumbnail
    } = this.props;

    return (
      <div className={b()}>
        <img src={thumbnail} alt={name} />
        <div>{name}</div>
      </div>
    );
  }
}
