import React from "react";
import Item from "./Item";
import Paginator from "./Paginator";
import "../style/List.css";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.pageIndex = 1;
    this.itemPerPage = 5;
    this.pageNumbers = 0;
  }
  viewStats = () => {
    console.log("Calculated page numbers: ", this.pageNumbers);
    console.log("View: ", this.state.view);
    console.log("Page Index: ", this.pageIndex);
  };
  calculatePageNumbers(item) {
    this.pageNumbers = Math.ceil(item.length / 5);
  }
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
      filter,
      filterOptions,
      list,
      statusHandler,
      countHandler,
      editTodoHandler,
      deleteHandler,
    } = this.props;
    let view = list.slice(
      this.pageIndex * this.itemPerPage - this.itemPerPage,
      this.pageIndex * this.itemPerPage
    );
    switch (filter) {
      case filterOptions.ALL:
        view = list.slice(
          this.pageIndex * this.itemPerPage - this.itemPerPage,
          this.pageIndex * this.itemPerPage
        );
        this.pageNumbers = Math.ceil(list.length / 5);
        break;
      case filterOptions.ACTIVE:
        view = list
          .filter((i) => !i.status)
          .slice(
            this.pageIndex * this.itemPerPage - this.itemPerPage,
            this.pageIndex * this.itemPerPage
          );
        this.pageNumbers = Math.ceil(list.filter((i) => !i.status).length / 5);
        break;
      case filterOptions.COMPLETED:
        view = list
          .filter((i) => i.status)
          .slice(
            this.pageIndex * this.itemPerPage - this.itemPerPage,
            this.pageIndex * this.itemPerPage
          );
        this.pageNumbers = Math.ceil(list.filter((i) => i.status).length / 5);
        break;
      default:
        break;
    }
    return (
      <ul>
        <button
          onClick={() => {
            console.log(this.pageNumbers);
          }}
        >
          view
        </button>
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
