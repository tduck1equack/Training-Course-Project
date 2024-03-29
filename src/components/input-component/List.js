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
      view: this.props.list.slice(
        num * this.state.itemPerPage - this.state.itemPerPage,
        num * this.state.itemPerPage
      ),
    });
  };
  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.setState({
        view: this.props.list.slice(
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
        <button onClick={() => console.log(this.props.list)}>
          view from List.js
        </button>
        {this.state.view.map((item) => {
          return (
            <li key={item.id}>
              <Item
                name={item.name}
                status={item.status}
                onClickHandler={() => this.props.statusHandler(item)}
                onChangeStatusHandler={this.props.countHandler}
                handleEditTodo={() => this.props.editTodoHandler(item.name)}
                handleDelete={() => this.props.deleteHandler(item)}
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
