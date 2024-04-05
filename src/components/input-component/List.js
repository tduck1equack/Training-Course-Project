import React from "react";
import Item from "./Item";
import Paginator from "./Paginator";
import "../style/List.css";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.pageIndex = 1;
    this.pageNumbers = 0;
    this.itemPerPage = 5;
  }
  viewStats = () => {
    console.log("Calculated page numbers: ", this.pageNumbers);
    console.log("View: ", this.state.view);
    console.log("Page Index: ", this.pageIndex);
  };
  handlePageChange = (num) => {
    this.pageIndex = num;
    this.setState({
      view: this.props.list.slice(
        num * this.itemPerPage - this.itemPerPage,
        num * this.itemPerPage
      ),
    });
    console.log("view: ", this.view);
  };
  componentDidUpdate(prevProps) {
    if (this.props.list !== prevProps.list) {
      this.setState({
        view: this.props.list.slice(
          this.pageIndex * this.itemPerPage - this.itemPerPage,
          this.pageIndex * this.itemPerPage
        ),
      });
      this.pageNumbers = Math.ceil(this.props.list.length / 5);
    }
  }

  render() {
    const pageNumberArray = [...Array(this.pageNumbers + 1).keys()].slice(1);
    const {
      list,
      statusHandler,
      countHandler,
      editTodoHandler,
      deleteHandler,
    } = this.props;
    const view = list.slice(
      this.pageIndex * this.itemPerPage - this.itemPerPage,
      this.pageIndex * this.itemPerPage
    );
    return (
      <ul>
        {view.map((item) => {
          return (
            <li key={item.id}>
              <Item
                item={item}
                onClickHandler={statusHandler}
                onChangeStatusHandler={countHandler}
                handleEditTodo={editTodoHandler}
                handleDelete={deleteHandler}
              />
            </li>
          );
        })}
        {this.pageNumbers > 1 ? (
          <Paginator
            pageNumbers={pageNumberArray}
            onClick={this.handlePageChange}
            pageIndex={this.pageIndex}
          />
        ) : (
          ""
        )}
      </ul>
    );
  }
}
