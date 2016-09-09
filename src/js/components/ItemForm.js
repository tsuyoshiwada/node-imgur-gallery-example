import autobind from "autobind-decorator";
import React, { Component, PropTypes } from "react";
import bem from "../helpers/bem";

const b = bem("item-form");

@autobind
export default class ItemForm extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    file: PropTypes.any,
    name: PropTypes.string,
    onRequestAddItem: PropTypes.func
  };

  static defaultProps = {
    disabled: false,
    file: "",
    name: "",
    onRequestAddItem: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      file: props.file,
      name: props.name
    };
  }

  componentWillReceiveProps(nextProps) {
    const { props } = this;

    if (props.file !== nextProps.file) {
      this.setState({ file: nextProps.file });
    }

    if (props.name !== nextProps.name) {
      this.setState({ name: nextProps.name });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const { file } = this.refs;
    const { disabled } = this.props;
    const { name } = this.state;

    if (disabled) return;

    this.props.onRequestAddItem(
      file.files[0],
      name
    );
  }

  handleFileChange(e) {
    this.setState({ file: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    const { disabled } = this.props;
    const { file, name } = this.state;

    return (
      <div
        className={b({ disabled })()}
        style={{
          opacity: disabled ? 0.6 : 1
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <input
            ref="file"
            className={b("file")()}
            disabled={disabled}
            type="file"
            accept="image/*"
            value={file}
            onChange={this.handleFileChange}
          />

          <input
            disabled={disabled}
            className={b("name")()}
            type="text"
            value={name}
            onChange={this.handleNameChange}
          />

          <button
            className={b("btn")()}
            disabled={disabled || name.trim() === "" || !file}
            onClick={this.handleClick}
          >
            Add item
          </button>
        </form>
      </div>
    );
  }
}
