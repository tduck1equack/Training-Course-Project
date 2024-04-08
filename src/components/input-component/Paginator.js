import React from "react";
import Button from "../menu-component/Button";
import PropTypes from "prop-types";

import "../style/Paginator.css";
export default class Paginator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { pageNumbers, onClick, pageIndex, view } = this.props;
    return (
      <div className="paginator">
        <ul className="button-list">
          {pageNumbers.map((n) => {
            return (
              <li key={n}>
                <Button
                  onClick={() => onClick(n, view)}
                  name={n}
                  style={
                    pageIndex === n
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
Paginator.propTypes = {
  pageNumbers: PropTypes.array,
  pageIndex: PropTypes.number,
  onClick: PropTypes.func,
};
