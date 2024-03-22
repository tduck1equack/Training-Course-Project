import React from "react";
import Item from "./Item";
import Menu from "./Menu";
import Checkbox from "./Checkbox";
export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <button onClick={(e) => console.log(this.props.list)}>
          View from List component
        </button>
        {this.props.list.map((item) => {
          return (
            <li>
              <Checkbox
                checked={item.status}
                onClickHandler={() => this.props.statusHandler(item)}
              />
              <Item name={item.name} completed={item.status} />
            </li>
          );
        })}
      </ul>
    );
  }
}
