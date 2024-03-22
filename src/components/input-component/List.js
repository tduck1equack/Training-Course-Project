import React from "react";
import Item from "./Item";
import Checkbox from "./Checkbox";
import "../style/List.css";
export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
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
