import autobind from "autobind-decorator";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { getItemEntities } from "../selectors/items";
import * as ItemActions from "../actions/items";
import bem from "../helpers/bem";
import { Item } from "../components/";

const b = bem("item-group");

@connect(state => ({
  items: state.items,
  itemEntities: getItemEntities(state)
}))
@autobind
export default class ItemGroup extends Component {
  static propTypes = {
    items: PropTypes.object,
    itemEntities: PropTypes.array,
    dispatch: PropTypes.func
  };

  componentWillMount() {
    this.props.dispatch(ItemActions.fetchItemsRequest());
  }

  render() {
    const { itemEntities } = this.props;

    return (
      <div className={b()}>
        {itemEntities.map(entity =>
          <Item
            key={entity.id}
            id={entity.id}
            name={entity.name}
            thumbnail={entity.thumbnail}
          />
        )}
        <pre>
          {JSON.stringify(this.props.itemEntities, null, "  ")}
        </pre>
      </div>
    );
  }
}
