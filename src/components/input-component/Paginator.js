import React from "react";
import Button from "../menu-component/Button";

import "../style/Paginator.css";
export default class Paginator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="paginator">
        <ul className="button-list">
          {this.props.pageNumbers.map((n) => {
            return (
              <li key={n}>
                <Button
                  onClick={() => this.props.onClick(n)}
                  name={n}
                  style={
                    this.props.pageIndex === n
                      ? {
                          outline: "1px solid #ce4646",
                        }
                      : {}
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
