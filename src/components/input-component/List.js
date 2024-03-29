import React from "react";
import Item from "./Item";
import Paginator from "./Paginator";
import "../style/List.css";
export default class List extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    pageIndex: 1,
    itemPerPage: 5,
    view: [],
    pageNumbers: 0,
  };
  viewStats = () => {
    console.log("Calculated page numbers: ", this.state.pageNumbers);
    console.log("View: ", this.state.view);
  };
  handlePageChange = (num) => {
    this.setState({
      pageIndex: num,
      view: this.props.view.slice(
        num * this.state.itemPerPage - this.state.itemPerPage,
        num * this.state.itemPerPage
      ),
    });
  };
  componentDidUpdate(prevProps) {
    if (this.props.view !== prevProps.view) {
      this.setState({
        view: this.props.view.slice(
          this.state.pageIndex * this.state.itemPerPage -
            this.state.itemPerPage,
          this.state.pageIndex * this.state.itemPerPage
        ),
        pageNumbers: Math.ceil(this.props.list.length / 5),
      });
    }
  }

  render() {
    const pageNumberArray = [...Array(this.state.pageNumbers + 1).keys()].slice(
      1
    );
    return (
      <ul>
        {this.state.view.map((item) => {
          return (
            <li key={item.id}>
              <Item
                name={item.name}
                status={item.status}
                onClickHandler={() => this.props.statusHandler(item)}
                onChangeStatusHandler={this.props.countHandler}
                onDBClickHandler={() => this.props.editHandler(item)}
              />
            </li>
          );
        })}
        {this.state.pageNumbers > 1 ? (
          <Paginator
            pageNumbers={pageNumberArray}
            onClick={this.handlePageChange}
            pageIndex={this.state.pageIndex}
          />
        ) : (
          ""
        )}
      </ul>
    );
  }
}
